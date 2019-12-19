import React, { Component } from 'react';
import classes from './Checkbox.module.scss';

class Checkbox extends Component {
  render() {
    return (
      <div className={classes.Checkbox}>
        <label className={classes.Container}>
          <input type='checkbox' />
          <span className={classes.Checkmark}></span>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
