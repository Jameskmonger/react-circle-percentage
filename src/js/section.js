import React from 'react';

export default class Section extends React.Component {
  render() {
    return <section>
      { this.props.children }
    </section>;
  }
}
