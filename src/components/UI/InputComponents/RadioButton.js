import React, { Component } from 'react';
import classes from './RadioButton.module.scss';

class RadioButton extends Component {
  render() {
    return (
      <div className={classes.RadioButton}>
        <label className={classes.Container}>
          <input type='radio' name={this.props.name} />
          <span className={classes.Checkmark}></span>
          {this.props.label}
        </label>
      </div>
    );
  }
}
export default RadioButton;
