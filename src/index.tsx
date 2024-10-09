// Imports
import { createRoot } from 'react-dom/client';

import { App } from '@/App';

// Main code
const root = document.getElementById('root');

if (!root) throw new Error('No root element');

const container = createRoot(root);

container.render(<App />);
