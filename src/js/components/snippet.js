import React from 'react';

export default class Snippet extends React.Component {
  render() {
    return <div className="snippet">
      { this.props.children }
    </div>;
  }
}
