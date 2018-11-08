import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioSlider from './PortfolioSlider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
