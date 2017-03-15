import React from 'react';
import ReactDOM from 'react-dom';
import CirclePercentage from 'react-circle-percentage';

import Snippet from './components/snippet';
import Section from './components/section';

class App extends React.Component {
  render() {
    return <div>
      <h1>React Circle Percentage</h1>

      <Section>
        <h2>Installation</h2>

        <Snippet>
          $ npm install react-circle-percentage --save
        </Snippet>
      </Section>

      <Section>
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
      </Section>

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
