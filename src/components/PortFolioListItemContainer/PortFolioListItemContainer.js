import React, { Component } from 'react';
import PortFolioListItem from '../PortFolioListItem/PortFolioListItem';
import PortFolioDetail from '../PortFolioDetail/PortFolioDetail';
import { withRouter } from 'react-router';
import constants from '../../global/constants';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class PortFolioListItemContainer extends Component {
  constructor(props) {
    super(props);
  }

  checkItem(id) {
    let checkRegEx = new RegExp(id);

    return checkRegEx.test(this.props.location.pathname)
  }

  render() {
    const {
      portfolioItem,
    } = this.props;

    return (
      <div className={this.checkItem(portfolioItem.id) ? 'PortFolioItemActive' : 'PortFolioItemContainer'}> 
          <Router basename={`${constants.baseurl}`}/>
          { this.checkItem(portfolioItem.id) ? 
            <PortFolioDetail ClassName="PortFolioItemActive" portfolioIid={portfolioItem.id} />
            : 
            <NavLink activeStyle={{ color: 'red' }} to={`${constants.baseurl}/${portfolioItem.id}`}>
              <PortFolioListItem portfolioItem={portfolioItem} /> 
            </NavLink>
          }
      </div>
    );
  }
}

export default withRouter(PortFolioListItemContainer);
