import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReportCard from './Report';
import ErrorCard from './Error';

it('Main app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Reportcard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReportCard />, div);
});

it('Error card renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorCard />, div);
});
