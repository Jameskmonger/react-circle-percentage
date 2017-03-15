import React from 'react';
import ReactDOM from 'react-dom';

import InstallationSection from './section-installation';
import UsageSection from './section-usage';
import ExamplesSection from './section-examples';

class App extends React.Component {
  render() {
    return <div>
      <h1>React Circle Percentage</h1>

      <InstallationSection />

      <UsageSection />

      <ExamplesSection />
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
