import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdDetailPage from './AdDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AdDetailPage />,
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});