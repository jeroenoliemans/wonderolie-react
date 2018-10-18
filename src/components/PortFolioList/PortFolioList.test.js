import React from 'react';
import ReactDOM from 'react-dom';
import PortFolioList from './PortFolioList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortFolioList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
