import React, { Component } from 'react';
import './PortfolioFilter.css';
import constants from '../../global/constants'


class PortfolioFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {currentFilter: 2};
  }

  handleChange(event) {
    this.setState({currentFilter: event.target.value});
    this.props.onCategoryChange(event.target.value);
  }

  render() {
    const {
        items
    } = this.props;

    const portfolioFilterItems = constants.categories.map((category, index) => {
      return (
          <span className="PortFolioFilterLabel">{category}</span>
      )
    });

    return (
      <div className="PortFolioFilter">
        <div class="PortFolioFilterRange">
          <input type="range" min="1" max="3" steps="1" defaultValue="2" onChange={this.handleChange} value={this.state.currentFilter} />
        </div>
        <div className="PortFolioFilterLabels">
          {portfolioFilterItems}
        </div>
      </div>
    );
  }
}

export default PortfolioFilter;
