import Main from './Main';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom"; 

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter basename='/'>
<Main />
</HashRouter>
);
