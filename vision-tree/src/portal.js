// Browser build for pages without React (the CCTaxLab portal): exposes window.VisionTree.
import { createVisionTree, webglSupported, artLayout } from './core.js';
window.VisionTree = { create: createVisionTree, supported: webglSupported, artLayout };
