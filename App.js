import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//redux
import {Provider} from 'react-redux';

//imports
import {store} from './src/redux/store/store';

//routes
import Routes from './src/navigation/routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
