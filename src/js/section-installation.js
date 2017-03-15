import React from 'react';
import BaseSection from './section-base';

import Section from './components/section';
import Snippet from './components/snippet';

export default class InstallationSection extends BaseSection {
  render() {
    return <Section>
      <h2>Installation</h2>

      <Snippet>
        $ npm install react-circle-percentage --save
      </Snippet>
    </Section>;
  }
}
