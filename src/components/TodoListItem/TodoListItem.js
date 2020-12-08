import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      done,
      important,
      onDeleteCallback,
      onToggleImportantCallback,
      onToggleDoneCallback,
    } = this.props;
    let listItemClass = 'todo-list-item';
    if (done) {
      listItemClass += ' done';
    }
    if (important) {
      listItemClass += ' important';
    }

    return (
      <div className={listItemClass}>
        <span className="todo-list-item-label" onClick={onToggleDoneCallback}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleteCallback}
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportantCallback}
        >
          <i className="fa fa-exclamation" />
        </button>
      </div>
    );
  }
}
