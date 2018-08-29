import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base'


class MainScreen extends Component {

  static navigationOptions= {
    headerLeft:<Icon name='ios-camera-outline' style={{paddingLeft: 10}}/>,
    title: 'Instagram',
    headerRight:<Icon name='ios-send-outline' style={{paddingRight:10}}/>,
  }

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
