import React from 'react';
import ReactDOM from 'react-dom';
import CirclePercentage from 'react-circle-percentage';

import Snippet from './components/snippet';
import Section from './components/section';

import InstallationSection from './section-installation';
import UsageSection from './section-usage';

class App extends React.Component {
  render() {
    return <div>
      <h1>React Circle Percentage</h1>

      <InstallationSection />

      <UsageSection />

      <Section>
        <h2>Examples</h2>
        <CirclePercentage percentage="21"/>
        <CirclePercentage percentage="57"/>
        <CirclePercentage percentage="86"/>
      </Section>
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
