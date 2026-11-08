import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import DigitalVisionTree from '../src/index.js';

const btn = on => ({ font: '600 12px/1 system-ui, sans-serif', letterSpacing: '.04em', padding: '8px 12px', border: 0, borderRadius: 999, cursor: 'pointer',
  background: on ? 'rgba(255,198,90,.95)' : 'transparent', color: on ? '#1a1206' : 'rgba(220,235,255,.85)' });

function Demo() {
  const [mode, setMode] = useState('dark');
  const [still, setStill] = useState(undefined);
  const light = mode === 'light';
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <DigitalVisionTree src="../vision-tree-hd.jpg" mode={mode} reducedMotion={still} />
      <div style={{ position: 'fixed', right: 16, bottom: 16, display: 'flex', gap: 4, padding: 4, borderRadius: 999,
        background: light ? 'rgba(20,40,70,.55)' : 'rgba(0,20,45,.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(160,200,255,.18)' }}>
        {['dark', 'light', 'auto'].map(m => <button key={m} style={btn(mode === m)} onClick={() => setMode(m)}>{m[0].toUpperCase() + m.slice(1)}</button>)}
        <button style={btn(still === true)} onClick={() => setStill(still ? undefined : true)} title="Preview the reduced-motion version">Still</button>
      </div>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<Demo />);
