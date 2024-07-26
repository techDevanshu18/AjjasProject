import React from 'react';
import { Provider } from 'react-redux';
import { MainRouter } from './src/router/MainRouter';
import { store } from './src/networking/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
