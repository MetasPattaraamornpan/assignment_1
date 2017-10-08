/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import FacebookForm from './components/FacebookForm'


class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <FacebookForm />
      </Provider>
    );
  }
}

export default App;


