// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Onboarding from './screens/Onboarding';

const App = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
