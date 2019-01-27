import React, { Component } from 'react';
import './PortFolioList.css';
import PortFolioListItemContainer from '../PortFolioListItemContainer/PortFolioListItemContainer';

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
          <PortFolioListItemContainer key={index} portfolioItem={item}/>
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
