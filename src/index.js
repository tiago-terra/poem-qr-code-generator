import Main from './Main';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
 
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router>
<Main />
</Router>

);
