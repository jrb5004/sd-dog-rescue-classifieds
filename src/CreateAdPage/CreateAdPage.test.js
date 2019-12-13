import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateAdPage from './CreateAdPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CreateAdPage />,
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});