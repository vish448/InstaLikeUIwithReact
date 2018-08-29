import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



class MainScreen extends Component {
  render() {
    return (

        <Text style ={styles.container}>MainScreen</Text>

    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  }

});
