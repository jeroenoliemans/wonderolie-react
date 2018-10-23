import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PortFolioListItem.css';
import { withRouter } from 'react-router';

class PortFolioListItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      portfolioItem,
    } = this.props;

    let backgroundStyle = {
      backgroundImage: `url(${portfolioItem.imageUrl})`
    }
    let randomScale = parseInt(Math.random()*3, 10);
    //let randomDeg = Math.random()*5 -2;
    let randomDeg = 0;

    let randomStyle = {
      transform: `scale(1.${randomScale}) rotate(${randomDeg}deg)`,
      opacity: 1
    }

    return (
      <div style={randomStyle} className="PortFolioListItem"> 
        <div className="PortFolioListItemBox" 
              style={backgroundStyle}>
          <h3 className="PortfolioLIstItemTitle">{portfolioItem.title}</h3>
          { this.props.location.pathname === `/${portfolioItem.id}` ? <span>DETAIL</span> : null }
        </div>
      </div>
    );
  }
}

export default withRouter(PortFolioListItem);
