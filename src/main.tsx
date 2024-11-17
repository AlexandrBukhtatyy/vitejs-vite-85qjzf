import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Components from './pages/components/Components.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Components />
  </StrictMode>
);
