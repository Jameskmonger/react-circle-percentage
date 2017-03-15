import React from 'react';

export default class Section extends React.Component {
  render() {
    return <section className={`${ this.props.show ? 'show' : '' }`}>
      { this.props.children }
    </section>;
  }
}
