import React, { Component } from 'react';
import './PortFolioList.css';
import PortFolioListItem from '../PortFolioListItem/PortFolioListItem'

class PortFolioList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
        items
    } = this.props;

    const portfolioListItems = items.map((item, index) => {
      return (
          <PortFolioListItem key={index} portfolioItem={item}/>
      )
    });

    return (
      <div className="PortFolioList">
        {portfolioListItems}
      </div>
    );
  }
}

export default PortFolioList;
