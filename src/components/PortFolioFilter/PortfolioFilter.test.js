import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioFilter from './PortfolioFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
