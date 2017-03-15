import React from 'react';
import CirclePercentage from 'react-circle-percentage';

export default class BaseSection extends React.Component {
  componentDidMount() {
    // if we have an onMount function, call it
    if (this.props.onMount && typeof this.props.onMount === 'function') {
      this.props.onMount();
    }
  }
}
