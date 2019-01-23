import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import BoidSimulation from './boids/BoidSimulation';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();

window.setTimeout(() => {
    // initialize boids
    const boidSimulation = new BoidSimulation();
    boidSimulation.startBoidSimulation();  
}, 300)


