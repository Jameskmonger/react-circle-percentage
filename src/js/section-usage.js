import React from 'react';

import Section from './components/section';
import Snippet from './components/snippet';

export default class UsageSection extends React.Component {
  render() {
    return <Section>
      <h2>Usage</h2>

      <Snippet>
      {
`import PercentageCircle from "react-percentage-circle";

class SomeComponent extends Component {
  render() {
    return <PercentageCircle percentage="50"/>;
  }
}`
      }
      </Snippet>
    </Section>;
  }
}
