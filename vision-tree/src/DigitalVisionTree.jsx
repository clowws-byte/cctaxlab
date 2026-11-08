import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { quadVertex, quadFragment, pointsVertex, pointsFragment } from './shaders.js';
import { ART_WIDTH, ART_HEIGHT, RUBY, CANOPY_LIGHTS, GROUND_LIGHTS, LEAVES } from './visionTreeData.js';

const pairs = (a, n) => { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; };

/** Where the artwork sits: fitted to the height on landscape, larger and near the bottom on portrait. */
export function artLayout(W, H) {
  const portrait = W / H < 1.2;
  const sc = portrait ? (W * 1.55) / ART_WIDTH : H / ART_HEIGHT;
  const dw = ART_WIDTH * sc, dh = ART_HEIGHT * sc;
  return {
    rect: [(W - dw) / 2, portrait ? H * 0.97 - dh : (H - dh) / 2, dw, dh],
    sun: portrait ? [W * 0.84, H * 0.09, Math.max(16, Math.min(W, H) * 0.03)] : [W * 0.87, H * 0.13, Math.max(16, Math.min(W, H) * 0.03)],
  };
}

function buildPoints() {
  let s = 1234567; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const uv = [], kind = [], seed = [], size = [];
  const add = (x, y, k, sz) => { uv.push(x, y); kind.push(k); seed.push(rnd()); size.push(sz); };
  const lights = pairs(CANOPY_LIGHTS, 2).concat(pairs(GROUND_LIGHTS, 2));
  lights.forEach(([x, y]) => add(x, y, rnd() < 0.55 ? 0 : 1, 12 + rnd() * 14));
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

const isDayNow = () => { const h = new Date().getHours(); return h >= 7 && h < 19; };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)'); if (!mq) return;
    const on = () => setReduced(mq.matches); mq.addEventListener('change', on); return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

function webglAvailable() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

/**
 * Digital Vision Tree — the approved artwork brought to life with WebGL.
 *
 * @param {object}  props
 * @param {string}  props.src            URL of the artwork (vision-tree-hd.jpg)
 * @param {'dark'|'light'|'auto'} [props.mode='dark']  'auto' = light 7am–7pm by the viewer's clock
 * @param {boolean} [props.sun=true]     show the sun and its shafts of light
 * @param {boolean} [props.interactive=true]  soft light that follows the pointer
 * @param {boolean} [props.reducedMotion] force still rendering (defaults to the OS preference)
 * @param {string}  [props.className]
 * @param {object}  [props.style]
 * @param {string}  [props.ariaLabel]
 */
export default function DigitalVisionTree({
  src, mode = 'dark', sun = true, interactive = true, reducedMotion, className, style,
  ariaLabel = 'Digital Vision Tree: a golden tree with a canopy of blue light, green leaves and red nodes',
}) {
  const hostRef = useRef(null);
  const apiRef = useRef(null);
  const osReduced = usePrefersReducedMotion();
  const still = reducedMotion ?? osReduced;
  const [fallback, setFallback] = useState(false);
  const [autoDay, setAutoDay] = useState(isDayNow);

  useEffect(() => { if (mode !== 'auto') return; const id = setInterval(() => setAutoDay(isDayNow()), 60000); return () => clearInterval(id); }, [mode]);
  const day = mode === 'light' || (mode === 'auto' && autoDay);

  // create the renderer once
  useEffect(() => {
    const host = hostRef.current;
    if (!webglAvailable()) { setFallback(true); return; }
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' }); }
    catch { setFallback(true); return; }
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;   // shaders work directly in the artwork's sRGB values
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const cvs = renderer.domElement;
    Object.assign(cvs.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
    host.appendChild(cvs);

    const uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: 1 }, uRect: { value: new THREE.Vector4() },
      uTime: { value: 0 }, uMotion: { value: 1 }, uIntro: { value: 0 }, uDay: { value: 0 },
      uPointer: { value: new THREE.Vector3(-9999, -9999, 0) }, uArt: { value: null },
      uSun: { value: new THREE.Vector3() }, uSunOn: { value: 1 },
    };
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms, vertexShader: quadVertex, fragmentShader: quadFragment, depthTest: false, depthWrite: false }));
    quad.frustumCulled = false; scene.add(quad);
    const pmat = new THREE.ShaderMaterial({
      uniforms, vertexShader: pointsVertex, fragmentShader: pointsFragment, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    const points = new THREE.Points(buildPoints(), pmat); points.frustumCulled = false; points.renderOrder = 1; scene.add(points);

    const st = { W: 1, H: 1, raf: 0, visible: true, inView: true, started: 0, ready: false, still: false, day: 0, dayTarget: 0, pTarget: 0, last: 0 };

    const resize = () => {
      const r = host.getBoundingClientRect(); st.W = Math.max(1, r.width); st.H = Math.max(1, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr); renderer.setSize(st.W, st.H, false);
      uniforms.uRes.value.set(st.W, st.H); uniforms.uDpr.value = dpr;
      const { rect, sun: s } = artLayout(st.W, st.H);
      uniforms.uRect.value.set(...rect); uniforms.uSun.value.set(...s);
      if (st.still) render(performance.now());
    };
    const render = now => {
      const t = (now - st.started) / 1000;
      uniforms.uTime.value = st.still ? 12 : t;
      uniforms.uIntro.value = st.ready ? (st.still ? 1 : Math.min(1, t / 1.6)) : 0;
      // ease between dark and light, and the pointer glow in and out
      const dt = Math.min(0.05, (now - (st.last || now)) / 1000); st.last = now;
      st.day += (st.dayTarget - st.day) * (st.still ? 1 : 1 - Math.exp(-dt * 3));
      uniforms.uDay.value = st.day;
      const pz = uniforms.uPointer.value; pz.z += (st.pTarget - pz.z) * (st.still ? 1 : 1 - Math.exp(-dt * 4));
      const lightBlend = st.day > 0.5;
      if (lightBlend !== st.lightBlend) { pmat.blendDst = lightBlend ? THREE.OneMinusSrcAlphaFactor : THREE.OneFactor; pmat.needsUpdate = true; st.lightBlend = lightBlend; }
      renderer.render(scene, camera);
    };
    const loop = now => {
      st.raf = 0;
      if (st.still || !st.visible || !st.inView) return;
      render(now);
      st.raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!st.raf && !st.still && st.visible && st.inView) st.raf = requestAnimationFrame(loop); };

    const ro = new ResizeObserver(resize); ro.observe(host);
    const io = new IntersectionObserver(([e]) => { st.inView = e.isIntersecting; kick(); }); io.observe(host);
    const onVis = () => { st.visible = !document.hidden; st.last = 0; kick(); };
    document.addEventListener('visibilitychange', onVis);
    const onMove = e => { const r = host.getBoundingClientRect(); uniforms.uPointer.value.x = e.clientX - r.left; uniforms.uPointer.value.y = e.clientY - r.top; st.pTarget = st.interactive ? 1 : 0; };
    const onLeave = () => { st.pTarget = 0; };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    const onLost = e => { e.preventDefault(); setFallback(true); };
    cvs.addEventListener('webglcontextlost', onLost);

    new THREE.TextureLoader().load(src, tex => {
      tex.colorSpace = THREE.NoColorSpace;
      tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.generateMipmaps = true;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      uniforms.uArt.value = tex; st.ready = true; st.started = performance.now();
      if (st.still) render(performance.now()); else kick();
    }, undefined, () => setFallback(true));

    resize();
    apiRef.current = {
      set({ still, day, sun, interactive }) {
        st.still = still; uniforms.uMotion.value = still ? 0 : 1; st.dayTarget = day ? 1 : 0; uniforms.uSunOn.value = sun ? 1 : 0;
        st.interactive = interactive; if (!interactive) st.pTarget = 0;
        if (still) { cancelAnimationFrame(st.raf); st.raf = 0; if (st.ready) render(performance.now()); } else kick();
      },
    };
    return () => {
      cancelAnimationFrame(st.raf); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', onVis); window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave); window.removeEventListener('blur', onLeave);
      cvs.removeEventListener('webglcontextlost', onLost);
      uniforms.uArt.value?.dispose(); quad.geometry.dispose(); quad.material.dispose(); points.geometry.dispose(); pmat.dispose();
      renderer.dispose(); cvs.remove(); apiRef.current = null;
    };
  }, [src]);

  // props -> renderer
  useEffect(() => { apiRef.current?.set({ still, day, sun, interactive }); }, [still, day, sun, interactive, fallback]);

  const base = { position: 'relative', overflow: 'hidden', width: '100%', height: '100%', background: day ? '#d6e7f3' : '#000d28', ...style };
  if (fallback) {
    return (
      <div className={className} style={base} role="img" aria-label={ariaLabel}>
        <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }} />
      </div>
    );
  }
  return <div ref={hostRef} className={className} style={base} role="img" aria-label={ariaLabel} />;
}
