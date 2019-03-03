import React, {component} from 'react';
import './PortFolioFooter.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const PortFolioFooter = () => {
    const getCurrentYear = () => ((new Date()).getFullYear());

    return (
        <div className="PortFolioFooter">
          <a className="PortFolioFooterLink" href="https://www.linkedin.com/in/jeroenoliemans/" title="LinkedIn Jeroen Oliemans">
            <FiLinkedin className="PortFolioFooterIcon"/> 
            <span className="PortFolioFooterLinkText">LinkedIn</span>
          </a>
          <a className="PortFolioFooterLink" href="https://github.com/jeroenoliemans" title="Github Jeroen Oliemans">
            <FiGithub className="PortFolioFooterIcon"/>
            <span className="PortFolioFooterLinkText">Github</span>
            </a>
          <span className="PortFolioFooterText">Copyright wonderolie {getCurrentYear()}</span>
        </div>
      );
}

export default PortFolioFooter;