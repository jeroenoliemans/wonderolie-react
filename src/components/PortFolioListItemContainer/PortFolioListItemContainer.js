import React, { Component } from 'react';
import PortFolioListItem from '../PortFolioListItem/PortFolioListItem';
import PortFolioDetail from '../PortFolioDetail/PortFolioDetail';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PortFolioListItemContainer.css';
import { withRouter } from 'react-router';

class PortFolioListItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      portfolioItem,
    } = this.props;

    return (
      <div> 
          { this.props.location.pathname === `/${portfolioItem.id}` ? 
            <PortFolioDetail portfolioIid={portfolioItem.id} />
            : 
            <PortFolioListItem portfolioItem={portfolioItem} /> 
          }
      </div>
    );
  }
}

export default withRouter(PortFolioListItemContainer);
