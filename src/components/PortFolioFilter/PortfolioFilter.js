import React, { Component } from 'react';
import './PortfolioFilter.css';
import constants from '../../global/constants';
import { FiCode } from 'react-icons/fi';
import { withRouter } from 'react-router';


class PortfolioFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);

    this.state = {currentFilter: 2};
  }

  handleChange(event) {
    this.setState({currentFilter: event.target.value});
    this.props.onCategoryChange(event.target.value);

    this.props.history.push('/');
  }

  handleLabelClick(index) {
      this.setState({currentFilter: (index + 1)});
      this.props.onCategoryChange(index + 1);
    this.props.history.push('/');
  }

  render() {
    const {
        items
    } = this.props;

    const portfolioFilterItems = constants.categories.map((category, index) => {
      return (
          <span key={index} onClick={() => this.handleLabelClick(index)} className="PortFolioFilterLabel"><FiCode /> {category}</span>
      )
    });

    return (
      <div className="PortFolioFilter">
        <div className="PortFolioFilterRange">
          <input type="range" min="1" max="3" steps="1" onChange={this.handleChange} value={this.state.currentFilter} />
        </div>
        <div className="PortFolioFilterLabels">
          {portfolioFilterItems}
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioFilter);
