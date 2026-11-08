// GLSL for the Digital Vision Tree.
// Everything is computed in CSS-pixel screen space so it stays aligned with the artwork at any size.
// The artwork itself is never redrawn: effects are masks derived from its own colours, so the tree's
// proportions, structure and colour identity are untouched.

const common = /* glsl */ `
  uniform vec2  uRes;      // canvas size, CSS px
  uniform float uDpr;
  uniform vec4  uRect;     // artwork rectangle on screen: x, y, width, height (CSS px, top-left origin)
  uniform float uTime;     // seconds
  uniform float uMotion;   // 1 = animate, 0 = still (reduced motion)
  uniform float uIntro;    // 0 -> 1 fade in
  uniform float uDay;      // 0 = dark, 1 = light (eased)
  uniform vec3  uPointer;  // x, y (CSS px), strength 0..1
`;

export const quadVertex = /* glsl */ `
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

export const quadFragment = /* glsl */ `
  precision highp float;
  ${common}
  uniform sampler2D uArt;
  uniform vec3  uSun;      // x, y, radius (CSS px)
  uniform float uSunOn;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  vec3 screenBlend(vec3 a, vec3 b) { return 1.0 - (1.0 - a) * (1.0 - b); }

  void main() {
    vec2 p = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;   // CSS px, top-left origin
    vec2 uv = (p - uRect.xy) / uRect.zw;                                    // artwork space 0..1
    float sc = uRect.w / 902.0;
    float t = uTime;
    bool inArt = uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0;

    // ---------- night backdrop: midnight navy matching the artwork's edges
    float cd = length((p - uRes * 0.5) / max(uRes.x, uRes.y));
    vec3 navy = mix(vec3(0.0, 0.094, 0.212), vec3(0.0, 0.051, 0.157), smoothstep(0.0, 0.75, cd));
    vec3 c = navy;
    float edge = 1.0;
    if (inArt) {
      c = texture2D(uArt, vec2(uv.x, 1.0 - uv.y)).rgb;
      // soften the artwork's border into the backdrop where it sits inside the screen
      vec2 dpx = min(uv, 1.0 - uv) * uRect.zw;
      edge = smoothstep(0.0, 48.0 * sc, min(dpx.x, dpx.y));
    }

    // ---------- masks from the artwork's own colours
    float mx = max(c.r, max(c.g, c.b));
    float gold  = smoothstep(0.74, 0.9, c.r) * smoothstep(0.48, 0.62, c.g) * (1.0 - smoothstep(0.42, 0.62, c.b));
    float green = smoothstep(0.08, 0.24, c.g - max(c.r, c.b)) * smoothstep(0.42, 0.62, c.g);
    float ruby  = smoothstep(0.18, 0.4, c.r - max(c.g, c.b)) * smoothstep(0.62, 0.82, c.r);
    float cyan  = smoothstep(0.55, 0.85, c.b) * smoothstep(0.32, 0.6, c.g) * (1.0 - smoothstep(0.5, 0.78, c.r));

    if (inArt && uMotion > 0.5) {
      // blue digital particles: each tiny cell of the canopy twinkles on its own rhythm
      vec2 cell = floor(uv * vec2(170.0, 88.0));
      float h = hash(cell);
      float tw = pow(0.5 + 0.5 * sin(t * (0.55 + 1.5 * h) + h * 6.2831), 3.0);
      c *= mix(1.0, 0.78 + 0.6 * tw, cyan);

      // golden energy: rising through trunk and branches, flowing outward along the roots
      float w1 = 1.04 - fract(t / 5.6) * 1.1, w2 = 1.04 - fract(t / 5.6 + 0.5) * 1.1;
      float up = exp(-pow(uv.y - w1, 2.0) / 0.0005) + exp(-pow(uv.y - w2, 2.0) / 0.0005);
      float rx = abs(uv.x - 0.5) * 1.93;
      float r1 = fract(t / 4.8) * 0.62, r2 = fract(t / 4.8 + 0.5) * 0.62;
      float out_ = exp(-pow(rx - r1, 2.0) / 0.0007) + exp(-pow(rx - r2, 2.0) / 0.0007);
      float roots = smoothstep(0.76, 0.82, uv.y);
      float pulse = mix(up * (1.0 - smoothstep(0.84, 0.9, uv.y)), out_, roots);
      c += gold * pulse * vec3(1.0, 0.78, 0.42) * 0.55;

      // green leaves: a delicate shimmer passing from leaf to leaf
      vec2 lc = floor(uv * vec2(96.0, 50.0));
      float lh = hash(lc + 17.0);
      float sh = pow(0.5 + 0.5 * sin(t * (0.45 + 0.7 * lh) + lh * 6.2831), 5.0);
      c += green * sh * vec3(0.32, 0.62, 0.42) * 0.55;

      // red nodes: a gentle breathing glow
      float rh = hash(floor(uv * 36.0) + 3.0);
      c += ruby * (0.1 + 0.12 * sin(t * 1.1 + rh * 6.2831)) * vec3(1.0, 0.32, 0.36);
    }

    // interactive light: a soft glow that follows the pointer and wakes the lights it passes
    float pd = length(p - uPointer.xy);
    float pl = exp(-pd * pd / (2.0 * pow(150.0 * max(sc, 0.6), 2.0))) * uPointer.z * uMotion;
    if (inArt) c += (cyan * vec3(0.15, 0.55, 0.75) + gold * vec3(0.55, 0.42, 0.18) + green * vec3(0.2, 0.45, 0.25)) * pl * 0.7;

    vec3 night = mix(navy, c, edge) + vec3(0.0, 0.03, 0.06) * pl;

    // ---------- light mode: the artwork's lights laid over a soft morning sky (navy removed)
    float a = smoothstep(0.28, 0.87, mx) * edge;
    vec3 un = clamp((c - (1.0 - a) * vec3(0.0, 0.07, 0.184)) / max(a, 0.001) * 0.9, 0.0, 1.0);
    un = mix(un, vec3(0.92, 0.97, 1.0), (1.0 - a) * 0.55);   // faint glows become pale light, not dark rims
    float sy = p.y / uRes.y;
    vec3 sky = mix(vec3(0.725, 0.839, 0.933), vec3(0.839, 0.906, 0.953), smoothstep(0.0, 0.45, sy));
    sky = mix(sky, vec3(0.918, 0.945, 0.949), smoothstep(0.45, 0.8, sy));
    sky = mix(sky, vec3(0.945, 0.953, 0.925), smoothstep(0.8, 1.0, sy));
    float warm = exp(-length(p - uSun.xy) / (max(uRes.x, uRes.y) * 0.32));
    sky += vec3(1.0, 0.886, 0.627) * warm * 0.18 * uSunOn;
    vec3 day = mix(sky, un, a);

    vec3 col = mix(night, day, uDay);

    // ---------- sunlight: sun, slowly turning rays, soft shafts of light across the tree
    if (uSunOn > 0.5) {
      vec2 v = p - uSun.xy;
      float d = length(v) / uSun.z;
      float ang = atan(v.y, v.x);
      float core = smoothstep(1.05, 0.75, d);
      float bloom = exp(-d * 0.55) * 0.75 + exp(-d * 0.16) * 0.28 + exp(-d * 0.05) * 0.06;
      float ra = ang + t * 0.03 * uMotion;
      float rays = pow(0.5 + 0.5 * cos(ra * 28.0), 5.0) * exp(-d / mix(2.6, 4.6, step(0.0, cos(ra * 14.0)))) * smoothstep(0.8, 1.8, d);
      float breathe = 0.78 + 0.22 * sin(t / 3.7) * uMotion;
      float shafts = 0.0;
      float L = length(v);
      for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float ba = 2.05 + fi * 0.2 + 0.03 * sin(fi * 2.3);
        float bw = 0.045 + 0.02 * fract(fi * 0.618);
        float da = abs(atan(sin(ang - ba), cos(ang - ba)));
        shafts += smoothstep(bw, 0.0, da) * exp(-L / (max(uRes.x, uRes.y) * 0.5)) * (0.6 + 0.4 * fract(fi * 0.37));
      }
      float fade = min(1.0, uIntro * 1.4);
      float gs = bloom + rays * 0.4;
      vec3 glow = (vec3(1.0, 0.82, 0.5) * gs + vec3(1.0, 0.9, 0.66) * shafts * 0.1 * breathe) * fade;
      vec3 nightSun = col + glow + vec3(1.0) * core * fade;
      // by day a warmer, deeper gold so the sun still reads against the bright sky
      vec3 daySun = mix(col, vec3(1.0, 0.8, 0.42), clamp(gs * 0.75, 0.0, 0.85) * fade) + vec3(1.0, 0.9, 0.66) * shafts * 0.05 * breathe * fade;
      daySun = mix(daySun, vec3(1.0, 0.99, 0.95), core * fade);
      col = mix(nightSun, daySun, uDay);
    }

    gl_FragColor = vec4(mix(navy * (1.0 - uDay) + vec3(0.839, 0.906, 0.953) * uDay, col, uIntro), 1.0);
  }
`;

export const pointsVertex = /* glsl */ `
  precision highp float;
  ${common}
  attribute vec2  aUv;
  attribute float aKind;   // 0 cyan, 1 blue, 2 ruby, 3 drifting mote, 4 leaf glint
  attribute float aSeed;
  attribute float aSize;
  varying float vA;
  varying float vKind;
  void main() {
    vec2 uv = aUv;
    float t = uTime, ph = aSeed * 6.2831, a = 1.0;
    if (aKind < 1.5) {
      float s = sin(t * (0.7 + 1.8 * fract(aSeed * 7.31)) + ph);
      a = uMotion > 0.5 ? pow(max(0.0, (s - 0.15) / 0.85), 2.0) * 0.9 : 0.3;
    } else if (aKind < 2.5) {
      a = 0.5 + 0.14 * sin(t * 0.9 + ph) * uMotion;
    } else if (aKind < 3.5) {
      float life = fract(t * 0.045 * (0.6 + fract(aSeed * 3.1)) + aSeed);
      uv.y -= life * 0.09;
      uv.x += sin(t * 0.4 + ph) * 0.004;
      a = sin(life * 3.14159) * 0.6 * uMotion;
    } else {
      float s = 0.5 + 0.5 * sin(t * (0.5 + 0.8 * fract(aSeed * 5.7)) + ph);
      a = s * s * 0.42 * uMotion;
    }
    vec2 px = uRect.xy + uv * uRect.zw;
    // a whisper of parallax: the light layer drifts slightly against the pointer
    px += (uPointer.xy / uRes - 0.5) * -7.0 * uPointer.z * uMotion * (aKind > 2.5 && aKind < 3.5 ? 1.8 : 1.0);
    // and lights near the pointer wake up a little
    float pd = length(px - uPointer.xy);
    a += uPointer.z * uMotion * exp(-pd * pd / 18000.0) * 0.35 * step(aKind, 1.5);
    gl_Position = vec4(px.x / uRes.x * 2.0 - 1.0, 1.0 - px.y / uRes.y * 2.0, 0.0, 1.0);
    float sz = aSize * (uRect.w / 902.0);
    if (aKind < 1.5) sz *= 0.6 + a * 0.7;
    gl_PointSize = max(1.0, sz * uDpr);
    vA = a * uIntro;
    vKind = aKind;
  }
`;

export const pointsFragment = /* glsl */ `
  precision highp float;
  uniform float uDay;
  varying float vA;
  varying float vKind;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = exp(-d * d * 30.0);
    float halo = exp(-d * d * 5.0) * 0.55;
    float g = (core + halo) * (1.0 - d);
    vec3 col = vKind < 0.5 ? vec3(0.0, 0.81, 1.0)
             : vKind < 1.5 ? vec3(0.0, 0.56, 1.0)
             : vKind < 2.5 ? vec3(1.0, 0.21, 0.3)
             : vKind < 3.5 ? vec3(0.0, 0.81, 1.0)
             : vec3(0.51, 0.96, 0.64);
    vec3 c = mix(col, vec3(1.0), core * 0.75);
    float a = g * vA * mix(1.0, 0.8, uDay);
    gl_FragColor = vec4(c * a, a);   // premultiplied
  }
`;
