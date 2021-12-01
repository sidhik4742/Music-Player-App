import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './src/navigation/app-navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
