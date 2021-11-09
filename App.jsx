import React from 'react';
import { View, StyleSheet } from 'react-native';

import BoxListScreen from './src/screens/BoxListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <BoxListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
