import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      textForSearch: '',
    }
  }
  render() {
    return (
      <input
        className="search-input form-control "
        type="text"
        placeholder="search"
      ></input>
    );
  };
};