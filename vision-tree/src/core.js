// Framework-free core of the Digital Vision Tree: used by the React component and by the CCTaxLab portal.
import * as THREE from 'three';
import { quadVertex, quadFragment, pointsVertex, pointsFragment } from './shaders.js';
import { ART_WIDTH, ART_HEIGHT, RUBY, CANOPY_LIGHTS, GROUND_LIGHTS, LEAVES } from './visionTreeData.js';

const pairs = (a, n) => { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; };

/** Where the artwork sits: fitted to the height on landscape, larger and near the bottom on portrait. */
export function artLayout(W, H) {
  const portrait = W / H < 1.2;
  const sc = portrait ? (W * 1.55) / ART_WIDTH : H / ART_HEIGHT;
  const dw = ART_WIDTH * sc, dh = ART_HEIGHT * sc, r = Math.max(16, Math.min(W, H) * 0.03);
  return {
    rect: [(W - dw) / 2, portrait ? H * 0.97 - dh : (H - dh) / 2, dw, dh],
    sun: portrait ? [W * 0.84, H * 0.09, r] : [W * 0.87, H * 0.13, r],
  };
}

export function webglSupported() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

function buildPoints() {
  let s = 1234567; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const uv = [], kind = [], seed = [], size = [];
  const add = (x, y, k, sz) => { uv.push(x, y); kind.push(k); seed.push(rnd()); size.push(sz); };
  pairs(CANOPY_LIGHTS, 2).concat(pairs(GROUND_LIGHTS, 2)).forEach(([x, y]) => add(x, y, rnd() < 0.55 ? 0 : 1, 12 + rnd() * 14));
  pairs(RUBY, 3).forEach(([x, y, r]) => add(x, y, 2, r * ART_WIDTH * 8));
  pairs(LEAVES, 2).forEach(([x, y]) => add(x, y, 4, 24));
  const canopy = pairs(CANOPY_LIGHTS, 2);
  for (let i = 0; i < 60; i++) { const [x, y] = canopy[Math.floor(rnd() * canopy.length)]; add(x, y, 3, 6 + rnd() * 6); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(kind.length * 3), 3));
  g.setAttribute('aUv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
  g.setAttribute('aSeed', new THREE.Float32BufferAttribute(seed, 1));
  g.setAttribute('aSize', new THREE.Float32BufferAttribute(size, 1));
  return g;
}

/**
 * Mount the tree into `host` (it fills the host; give the host a size).
 * @param {HTMLElement} host
 * @param {{src:string, day?:boolean, sun?:boolean, interactive?:boolean, still?:boolean, onError?:Function}} opts
 * @returns {{set(o:object):void, destroy():void}}
 */
export function createVisionTree(host, opts) {
  const o = { day: false, sun: true, interactive: true, still: false, ...opts };
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;   // shaders work directly in the artwork's sRGB values
  const cvs = renderer.domElement;
  // invisible until the artwork is ready, then cross-fades in (over a preview image, if the page shows one)
  Object.assign(cvs.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block', opacity: '0', transition: o.still ? 'none' : 'opacity .7s ease' });
  host.appendChild(cvs);

  const uniforms = {
    uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: 1 }, uRect: { value: new THREE.Vector4() },
    uTime: { value: 0 }, uMotion: { value: 1 }, uIntro: { value: 0 }, uDay: { value: o.day ? 1 : 0 },
    uPointer: { value: new THREE.Vector3(-9999, -9999, 0) }, uArt: { value: null },
    uSun: { value: new THREE.Vector3() }, uSunOn: { value: 1 },
  };
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms, vertexShader: quadVertex, fragmentShader: quadFragment, depthTest: false, depthWrite: false }));
  quad.frustumCulled = false; scene.add(quad);
  const pmat = new THREE.ShaderMaterial({ uniforms, vertexShader: pointsVertex, fragmentShader: pointsFragment, transparent: true, depthTest: false, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor });
  const points = new THREE.Points(buildPoints(), pmat); points.frustumCulled = false; points.renderOrder = 1; scene.add(points);

  const st = { W: 1, H: 1, raf: 0, visible: !document.hidden, inView: true, started: 0, ready: false, day: o.day ? 1 : 0, pTarget: 0, last: 0, lightBlend: null, dead: false };

  function render(now) {
    const t = (now - st.started) / 1000;
    uniforms.uTime.value = o.still ? 12 : t;
    uniforms.uIntro.value = st.ready ? 1 : 0;
    const dt = Math.min(0.05, (now - (st.last || now)) / 1000); st.last = now;
    st.day += ((o.day ? 1 : 0) - st.day) * (o.still ? 1 : 1 - Math.exp(-dt * 3));
    uniforms.uDay.value = st.day;
    const pz = uniforms.uPointer.value; pz.z += (st.pTarget - pz.z) * (o.still ? 1 : 1 - Math.exp(-dt * 4));
    const lb = st.day > 0.5;
    if (lb !== st.lightBlend) { pmat.blendDst = lb ? THREE.OneMinusSrcAlphaFactor : THREE.OneFactor; pmat.needsUpdate = true; st.lightBlend = lb; }
    renderer.render(scene, camera);
  }
  function loop(now) { st.raf = 0; if (st.dead || o.still || !st.visible || !st.inView) return; render(now); st.raf = requestAnimationFrame(loop); }
  function kick() { if (!st.dead && !st.raf && !o.still && st.visible && st.inView) st.raf = requestAnimationFrame(loop); }
  function still() { if (st.ready && !st.dead) render(performance.now()); }
  function resize() {
    const r = host.getBoundingClientRect(); st.W = Math.max(1, r.width); st.H = Math.max(1, r.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr); renderer.setSize(st.W, st.H, false);
    uniforms.uRes.value.set(st.W, st.H); uniforms.uDpr.value = dpr;
    const { rect, sun } = artLayout(st.W, st.H); uniforms.uRect.value.set(...rect); uniforms.uSun.value.set(...sun);
    if (o.still) still();
  }

  const ro = new ResizeObserver(resize); ro.observe(host);
  const io = new IntersectionObserver(([e]) => { st.inView = e.isIntersecting; kick(); }); io.observe(host);
  const onVis = () => { st.visible = !document.hidden; st.last = 0; kick(); };
  const onMove = e => { const r = host.getBoundingClientRect(); uniforms.uPointer.value.x = e.clientX - r.left; uniforms.uPointer.value.y = e.clientY - r.top; st.pTarget = o.interactive ? 1 : 0; kick(); };
  const onLeave = () => { st.pTarget = 0; };
  const onLost = e => { e.preventDefault(); api.destroy(); o.onError && o.onError(new Error('WebGL context lost')); };
  document.addEventListener('visibilitychange', onVis);
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave); window.addEventListener('blur', onLeave);
  cvs.addEventListener('webglcontextlost', onLost);

  new THREE.TextureLoader().load(o.src, tex => {
    if (st.dead) { tex.dispose(); return; }
    tex.colorSpace = THREE.NoColorSpace; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    uniforms.uArt.value = tex; st.ready = true; st.started = performance.now();
    render(st.started);                                        // draw the first frame, then reveal it
    requestAnimationFrame(() => { cvs.style.opacity = '1'; });
    if (!o.still) kick();
  }, undefined, err => { o.onError && o.onError(err || new Error('artwork failed to load')); });

  const api = {
    set(n) {
      Object.assign(o, n);
      uniforms.uMotion.value = o.still ? 0 : 1; uniforms.uSunOn.value = o.sun ? 1 : 0; if (!o.interactive) st.pTarget = 0;
      if (o.still) { cancelAnimationFrame(st.raf); st.raf = 0; still(); } else kick();
    },
    destroy() {
      if (st.dead) return; st.dead = true;
      cancelAnimationFrame(st.raf); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', onVis); window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave); window.removeEventListener('blur', onLeave); cvs.removeEventListener('webglcontextlost', onLost);
      uniforms.uArt.value && uniforms.uArt.value.dispose(); quad.geometry.dispose(); quad.material.dispose(); points.geometry.dispose(); pmat.dispose();
      renderer.dispose(); cvs.remove();
    },
  };
  api.set({});
  resize();
  return api;
}
