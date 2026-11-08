# Digital Vision Tree (React + Three.js)

The CCTaxLab Digital Vision Tree artwork, brought to life on the GPU. The artwork is shown exactly as designed. Every effect is a shader mask computed from the artwork's own colours, so the tree's proportions, structure and colour identity never change.

**Live demo:** https://clowws-byte.github.io/cctaxlab/vision-tree/demo.html

## What it does

| Effect | How it works |
| --- | --- |
| Blue digital particles twinkle | Each small cell of the canopy's cyan/blue pixels brightens and dims on its own rhythm. About 700 extracted light points also glow softly on top. |
| Golden energy pulses | Gold pixels carry two waves of light that rise up the trunk and branches. Two more waves flow outward along the roots. |
| Leaves shimmer | Green pixels catch a faint light that passes from leaf to leaf, plus soft mint glints. |
| Red nodes glow | Ruby pixels breathe gently, with a restrained red halo. |
| Sunlight | A sun top-right with slowly turning rays and soft shafts of light (can be turned off). |
| Pointer light | A soft glow follows the pointer and wakes the lights it passes. The light layer drifts slightly for depth. |
| Dark / Light / Auto | Dark mode shows the artwork on midnight navy. Light mode shows the artwork's lights over a soft morning sky, with the navy removed in the shader. Auto switches to light from 7am to 7pm. Changes fade smoothly. |
| Responsive | Fills its container. Landscape screens fit the artwork to the height. Portrait screens show it larger near the bottom. Pixel ratio is capped at 2. |
| Reduced motion | It follows the operating system setting, or the `reducedMotion` prop. It renders one still frame and runs no animation loop. |
| Efficient | Pauses when the tab is hidden or the component is scrolled out of view. Uses one full-screen shader plus one batch of points. |
| Fallback | If WebGL isn't available, it shows the plain artwork image. |

## Usage

```jsx
import DigitalVisionTree from './vision-tree/src';

export default function Hero() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <DigitalVisionTree src="/vision-tree-hd.jpg" mode="auto" />
    </div>
  );
}
```

The component fills its parent, so give the parent a size.

### Props

| Prop | Default | |
| --- | --- | --- |
| `src` | (required) | URL of the artwork (`vision-tree-hd.jpg`, 3488×1804) |
| `mode` | `'dark'` | `'dark'`, `'light'` or `'auto'` |
| `sun` | `true` | Show the sun and its shafts of light |
| `interactive` | `true` | Pointer light and parallax |
| `reducedMotion` | OS setting | `true` forces the still version |
| `className`, `style` | | Applied to the wrapper |
| `ariaLabel` | descriptive text | Accessible name (the component has `role="img"`) |

Peer dependencies: `react` 18 or later and `three` 0.160 or later (built and tested with React 19.3 and three 0.187).

## Without React (the CCTaxLab portal)

`dist/vision-tree.js` is a self-contained browser build (three.js included) that exposes `window.VisionTree`:

```js
const tree = VisionTree.create(document.querySelector('.bg'), { src: 'vision-tree-hd.jpg', day: false });
tree.set({ day: true });      // also: sun, interactive, still
tree.destroy();
```

The portal (`index.html`) loads it on demand and falls back to its 2D canvas version if WebGL is unavailable.

## Files

- `src/core.js`: the framework-free renderer (WebGL setup, resizing, pausing, modes, pointer)
- `src/DigitalVisionTree.jsx`: the React component (wraps the core, reduced-motion and auto-mode hooks, image fallback)
- `src/portal.js` → `dist/vision-tree.js`: browser build for pages without React
- `src/shaders.js`: the GLSL (colour masks, effects, light mode, sunlight, particles)
- `src/visionTreeData.js`: feature coordinates extracted from the artwork (ruby nodes, light points, leaves)
- `demo.html` + `demo/main.jsx`: the demo; `demo/demo.js` is the built bundle so the demo runs on GitHub Pages without installing anything

## Develop

```bash
cd vision-tree
npm install
npm run build      # rebuilds demo/demo.js and dist/vision-tree.js
python3 -m http.server -d ..   # then open http://localhost:8000/vision-tree/demo.html
```

## Changing the artwork

Keep the same 1744:902 aspect ratio (or update `ART_WIDTH` / `ART_HEIGHT`) and re-extract the coordinates in `visionTreeData.js`. The colour masks need no changes as long as the palette stays the same: gold trunk, cyan/blue lights, green leaves and red nodes on navy.
