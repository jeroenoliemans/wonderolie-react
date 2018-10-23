import React, { Component } from 'react';
import './PortFolioDetail.css';

class PortFolioDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      portfolioIid,
    } = this.props;

    return (
      <div className="PortFolioDetail"> 
        <div className="PortFolioDetailBox">
          <h1>{portfolioIid}</h1>
        </div>
      </div>
    );
  }
}

export default PortFolioDetail;
