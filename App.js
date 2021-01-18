import React, {useEffect} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import reducers from './reducers'
import RestaurantsContainer from './components/RestaurantsContainer';


export default function App() {
  //must pass in reducers
  const store = createStore(reducers)

  return (
    <Provider store={store}>
        <SafeAreaView style={styles.container}>
            <RestaurantsContainer />
        </SafeAreaView>
    </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});