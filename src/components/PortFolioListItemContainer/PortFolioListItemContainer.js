import React, { Component } from 'react';
import PortFolioListItem from '../PortFolioListItem/PortFolioListItem';
import PortFolioDetail from '../PortFolioDetail/PortFolioDetail';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './PortFolioListItemContainer.css';


class PortFolioListItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      portfolioItem,
    } = this.props;

    return (
      <div className={this.props.location.pathname === `/${portfolioItem.id}` ? 'PortFolioItemActive' : ''}> 
          { this.props.location.pathname === `/${portfolioItem.id}` ? 
            <PortFolioDetail ClassName="PortFolioItemActive" portfolioIid={portfolioItem.id} />
            : 
            <NavLink activeStyle={{ color: 'red' }} to={`/${portfolioItem.id}`}>
              <PortFolioListItem portfolioItem={portfolioItem} /> 
            </NavLink>
          }
      </div>
    );
  }
}

export default withRouter(PortFolioListItemContainer);
