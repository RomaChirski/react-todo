import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.buttons = [
      { label: 'All', name: 'all' },
      { label: 'Active', name: 'active' },
      { label: 'Done', name: 'done' },
    ];
  }
  render() {
    const { filterStatus, changeFilterStatus } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = name === filterStatus;
      const buttonClasses = `btn ${
        isActive ? 'btn-info' : 'btn-outline-secondary'
      }`;
      return (
        <button
          type="button"
          key={name}
          className={buttonClasses}
          onClick={(e) => {
            e.target.blur();
            changeFilterStatus(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
