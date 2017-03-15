import React from 'react';
import ReactDOM from 'react-dom';

import InstallationSection from './section-installation';
import UsageSection from './section-usage';
import ExamplesSection from './section-examples';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      installationShouldShow: false,
      usageShouldShow: false,
      examplesShouldShow: false
    };
  }

  componentDidMount() {
    // when all mounted, wait 0.5s and show the installation section
    setTimeout(() => {
      this.setState({
        installationShouldShow: true
      });
    }, 500);
  }

  installationShown() {
    this.setState({
      usageShouldShow: true
    });
  }

  usageShown() {
    this.setState({
      examplesShouldShow: true
    });
  }

  render() {
    return <div>
      <h1>React Circle Percentage</h1>

      <InstallationSection
        show={ this.state.installationShouldShow }
        onShow={ this.installationShown.bind(this) }/>

      <UsageSection
        show={ this.state.usageShouldShow }
        onShow={ this.usageShown.bind(this) }/>

      <ExamplesSection show={ this.state.examplesShouldShow }/>
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
