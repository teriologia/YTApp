import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
