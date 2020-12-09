import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
    };
    this.changeStateTerm = (e) => {
      const term = e.target.value;
      this.setState({ term }, () => {
        this.props.onChangeInputCallback(this.state.term);
      });
    };
  }
  render() {
    const { term } = this.state;
    return (
      <input
        className="search-input form-control "
        type="text"
        value={term}
        placeholder="search"
        onChange={this.changeStateTerm}
      ></input>
    );
  }
}
