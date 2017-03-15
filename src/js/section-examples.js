import React from 'react';
import CirclePercentage from 'react-circle-percentage';

import Section from './components/section';
import Snippet from './components/snippet';

export default class ExamplesSection extends React.Component {
  render() {
    return <Section>
      <h2>Examples</h2>
      <CirclePercentage percentage="21"/>
      <CirclePercentage percentage="57"/>
      <CirclePercentage percentage="86"/>
    </Section>;
  }
}
