import { Meteor } from 'meteor/meteor'
import React from 'react';
import { render } from 'react-dom';

import App from '../../ui/layouts/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
