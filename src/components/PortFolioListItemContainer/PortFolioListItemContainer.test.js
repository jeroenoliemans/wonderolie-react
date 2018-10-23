import React from 'react';
import ReactDOM from 'react-dom';
import PortFolioListItem from './PortFolioListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortFolioListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
