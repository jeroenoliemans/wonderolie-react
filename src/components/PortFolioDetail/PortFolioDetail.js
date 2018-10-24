import React, { Component } from 'react';
import portFolioService  from '../../services/portFolioService';
import './PortFolioDetail.css';

class PortFolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    }

    portFolioService.getPortFolioItem(this.props.portfolioIid)
      .then((result) => {
        this.setState((state) => ({
          detail: JSON.parse(result)
        }));
      })
  }


  render() {
    const {
      portfolioIid,
    } = this.props;

    return (
      <div className="PortFolioDetail"> 
        <div className="PortFolioDetailBox">
          <h1>{this.state.detail.name}</h1>
        </div>
      </div>
    );
  }
}

export default PortFolioDetail;
