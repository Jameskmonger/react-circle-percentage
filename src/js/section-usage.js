import React from 'react';
import BaseSection from './section-base';

import Section from './components/section';
import Snippet from './components/snippet';

export default class UsageSection extends BaseSection {
  render() {
    return <Section show={ this.props.show }>
      <h2>Usage</h2>

      <Snippet>
      {
`import React from "react";
import PercentageCircle from "react-percentage-circle";

class SomeComponent extends React.Component {
  render() {
    return <PercentageCircle percentage="50"/>;
  }
}`
      }
      </Snippet>
    </Section>;
  }
}