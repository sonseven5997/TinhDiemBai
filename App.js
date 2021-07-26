import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppNavigator} from './src/navigation/appNavigator';

const App = () => {
  return (
    <View style={styles.flex1}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
});

export default App;
