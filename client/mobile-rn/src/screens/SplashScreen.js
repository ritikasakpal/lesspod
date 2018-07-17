import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';

import CustomLoader from './../components/CustomLoader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <CustomLoader />
      </SafeAreaView>
    );
  }
}