import { useEffect, useRef, useState } from 'react';
import { createVisionTree, webglSupported } from './core.js';

export { artLayout } from './core.js';

const isDayNow = () => { const h = new Date().getHours(); return h >= 7 && h < 19; };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)'); if (!mq) return;
    const on = () => setReduced(mq.matches); mq.addEventListener('change', on); return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
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
  const treeRef = useRef(null);
  const osReduced = usePrefersReducedMotion();
  const still = reducedMotion ?? osReduced;
  const [fallback, setFallback] = useState(false);
  const [autoDay, setAutoDay] = useState(isDayNow);

  useEffect(() => { if (mode !== 'auto') return; setAutoDay(isDayNow()); const id = setInterval(() => setAutoDay(isDayNow()), 60000); return () => clearInterval(id); }, [mode]);
  const day = mode === 'light' || (mode === 'auto' && autoDay);
  const latest = useRef({}); latest.current = { day, sun, interactive, still };

  useEffect(() => {
    if (!webglSupported()) { setFallback(true); return; }
    let tree;
    try { tree = createVisionTree(hostRef.current, { src, ...latest.current, onError: () => setFallback(true) }); }
    catch { setFallback(true); return; }
    treeRef.current = tree;
    return () => { tree.destroy(); treeRef.current = null; };
  }, [src]);

  useEffect(() => { treeRef.current?.set({ day, sun, interactive, still }); }, [day, sun, interactive, still]);

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
