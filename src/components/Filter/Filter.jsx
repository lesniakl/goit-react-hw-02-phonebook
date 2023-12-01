import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    return (
      <>
        <label htmlFor="filterInput">Find contacts by name</label>
        <input
          type="text"
          id="filterInput"
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
