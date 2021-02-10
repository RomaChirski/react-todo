import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const getData = async () => {
  const response = await fetch('https://swapi.dev/api/films/1/')
  console.log(response);
}

getData();

ReactDom.render(<App />, document.getElementById('root'));
