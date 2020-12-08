import React, { Component } from 'react';
import './AddItemPanel.css';

export default class AddItemPanel extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
    this.onChangeLabel = (e) => {
      this.setState({
        label: e.target.value,
      });
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAddCallback(this.state.label);
      this.setState({
        label: '',
      })
    };
  }
  render() {
    return (
      <form className="add-item-panel" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          value={this.state.label}
          onChange={this.onChangeLabel}
        ></input>
        <button
          // type="submit"
          className="btn btn-info"
        >
          Добавить
        </button>
      </form>
    );
  }
}
