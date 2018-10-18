import React, { Component } from 'react';
import './PortFolioListItem.css';

class PortFolioListItem extends Component {
  constructor(props) {
    super(props);

    this.itemClickHandler = this.itemClickHandler.bind(this);
  }

  itemClickHandler(event) {
    console.log(event);
  }

  render() {
    const {
      portfolioItem,
      itemClickHandler
    } = this.props;

    let backgroundStyle = {
      backgroundImage: `url(${portfolioItem.imageUrl})`
    }
    let randomScale = parseInt(Math.random()*3, 10);
    let randomDeg = Math.random()*5 -2;

    let randomStyle = {
      transform: `scale(1.${randomScale}) rotate(${randomDeg}deg)`,
      opacity: 1
    }

    return (
      <div style={randomStyle} className="PortFolioListItem"> 
        <div className="PortFolioListItemBox" 
              onClick={(e) => {this.itemClickHandler(e)}}
              style={backgroundStyle}>
          <h3>{portfolioItem.title}</h3>
        </div>
      </div>
    );
  }
}

export default PortFolioListItem;
