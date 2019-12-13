import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditAdPage from './EditAdPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EditAdPage />,
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});