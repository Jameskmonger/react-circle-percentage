import React from 'react';
import CirclePercentage from 'react-circle-percentage';

export default class BaseSection extends React.Component {
  componentWillReceiveProps(nextProps) {
    // see if 'show' has been updated
    if (nextProps.show !== this.props.show) {

      // if we have an onShow function, wait 750 ms (for fade in) and call it
      if (this.props.onShow && typeof this.props.onShow === 'function') {
        setTimeout(this.props.onShow, 750);
      }

    }
  }
}
