import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/index.css';
import 'devicon/devicon.min.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
ReactDOM.createRoot(root).render(<App />);
