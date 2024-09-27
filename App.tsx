/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import Router from './src/Router';
import { store } from './src/redux/store/store';
import { Provider } from 'react-redux';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';


  return (
    <>
      <Provider store={store}>
        {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor='transparent'
        />
        <Router />
      </Provider>
    </>
  );
}


export default App;
