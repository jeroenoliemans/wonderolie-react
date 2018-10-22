import React, { Component } from 'react';
import './PortFolioList.css';
import PortFolioListItem from '../PortFolioListItem/PortFolioListItem';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
        <Link  key={index} to={item.id}>
          <PortFolioListItem portfolioItem={item}/>
        </Link>
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
