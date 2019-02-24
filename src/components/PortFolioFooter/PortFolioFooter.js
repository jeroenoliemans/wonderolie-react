import React, {component} from 'react';
import './PortFolioFooter.css'

const PortFolioFooter = () => {
    const getCurrentYear = () => ((new Date()).getFullYear());

    return (
        <div className="PortFolioFooter">
          <a href="https://www.linkedin.com/in/jeroenoliemans/" title="LinkedIn Jeroen Oliemans">LinkedIn</a>
          <a href="https://github.com/jeroenoliemans" title="Github Jeroen Oliemans">Github</a>
          <span>Copyright wonderolie {getCurrentYear()}</span>
        </div>
      );
}

export default PortFolioFooter;