/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Luis Vasquez" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
