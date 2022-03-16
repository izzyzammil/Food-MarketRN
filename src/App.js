import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
