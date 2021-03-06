import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdDetailPage from './AdDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AdDetailPage match={{params: {id: 1}, isExact: true, path: "", url: ""}} />,
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});