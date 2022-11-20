import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, StatusBarStyle, StatusBar } from 'react-native';
import {setStatusBarHidden} from "expo-status-bar";


class BalanceHeader extends Component {
  render() {
    return (
        <Text style={styles.header}>
          {this.props.children}
        </Text>
    );
  }
}

const App = () =>  {
  setStatusBarHidden(false, "slide");
  return (
      <View style={styles.container}>
        <BalanceHeader>${balance}</BalanceHeader>
      </View>
  );
}
let balance = 94.26;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: '300',
  },
  container: {
    flex: 1,
    fontWeight: 'thin',
    backgroundColor: '#fff',
  },
});

export default App;
