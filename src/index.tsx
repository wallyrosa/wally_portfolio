import ReactDOM from 'react-dom/client';
import { App } from './App';
import './css/App.css';
import './css/index.css';
import './css/responsive.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
