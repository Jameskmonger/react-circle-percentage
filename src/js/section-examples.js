import React from 'react';
import CirclePercentage from 'react-circle-percentage';

import BaseSection from './section-base';

import Section from './components/section';
import Snippet from './components/snippet';

export default class ExamplesSection extends BaseSection {
  render() {
    return <Section show={ this.props.show }>
      <h2>Examples</h2>
      <CirclePercentage percentage="21"/>
      <CirclePercentage percentage="57"/>
      <CirclePercentage percentage="86"/>
    </Section>;
  }
}
