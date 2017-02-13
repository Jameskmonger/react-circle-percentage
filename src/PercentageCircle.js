import React, { Component } from 'react';
import './style/PercentageCircle.scss';

class PercentageCircle extends Component {
  getClassName() {
    return `percentage-circle pct${ this.props.percentage } ${ this.getColor() }`;
  }

  getText() {
    return `${this.props.percentage}%`;
  }

  getColor() {
    if (this.props.percentage > 85) {
      return "green";
    }

    if (this.props.percentage > 45) {
      return "orange";
    }

    return "red";
  }

  render() {
    return (
      <div className={ this.getClassName() }>
        <span>{ this.getText() }</span>
        <div className="slice">
          <div className="above50"></div>
          <div className="below50"></div>
        </div>
      </div>
    );
  }
}

export default PercentageCircle;
