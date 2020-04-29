import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import constants from '../../global/constants';
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/${portfolioItem.imageUrl})`
    }
    // let randomScale = parseInt(Math.random()*3, 10);
    let randomScale = 0;
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
          <h3 className="PortfolioLIstItemTitle">
            <span>{portfolioItem.title}</span> 
            <span className="ReleaseDate">{portfolioItem.displaydate}</span>
            </h3>
          { this.props.location.pathname === `${constants.baseurl}/${portfolioItem.id}` ? <span>DETAIL</span> : null }
        </div>
      </div>
    );
  }
}

export default withRouter(PortFolioListItem);
