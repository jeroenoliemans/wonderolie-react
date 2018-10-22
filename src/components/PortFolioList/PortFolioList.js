import React, { Component } from 'react';
import './PortFolioList.css';
import PortFolioListItemContainer from '../PortFolioListItemContainer/PortFolioListItemContainer';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { withRouter } from 'react-router';

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
        <NavLink className="test" activeClassName="PortFolioItemActive" activeStyle={{ color: 'red' }} key={index} to={`/${item.id}`}>
          <PortFolioListItemContainer portfolioItem={item}/>
        </NavLink>
      )
    });

    return (
      <Router>
        <div className="PortFolioList">
          {portfolioListItems}
        </div>
      </Router>
    );
  }
}

export default PortFolioList;
