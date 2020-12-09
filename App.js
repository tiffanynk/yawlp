import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './reducers'

export default function App() {
  //must pass in reducers
  const store = createStore({reducers})

  return (
    //pass store as props to provider
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
