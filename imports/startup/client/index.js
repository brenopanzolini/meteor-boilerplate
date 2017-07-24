import { Meteor } from 'meteor/meteor'
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>Hello World!</h1>;

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
