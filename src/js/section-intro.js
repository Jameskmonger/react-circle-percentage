import React from 'react';
import BaseSection from './section-base';

import Section from './components/section';
export default class IntroSection extends BaseSection {
  render() {
    return <Section show={ this.props.show }>
      <p>
        A React component to display a percentage with a circle.
      </p>

      <p>
        Built from <a href="http://circle.firchow.net/">CSS Percentage Circle by Andre Firchow</a>,
        which gives credit to <a href="http://atomicnoggin.ca/blog/2013/01/26/css3-pie-charts-revisited/">atomicnoggin</a>
      </p>

      <p>
        Licensed under the <a href="https://raw.githubusercontent.com/Jameskmonger/react-circle-percentage/master/LICENSE">MIT License</a>,
        hosted on <a href="https://github.com/Jameskmonger/react-circle-percentage">GitHub</a> and <a href="https://www.npmjs.com/package/react-circle-percentage">npm</a>.
      </p>
    </Section>;
  }
}
