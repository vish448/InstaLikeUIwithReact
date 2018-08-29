import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab.js';
import SearchTab from './AppTabNavigator/SearchTab.js';
import AddMediaTab from './AppTabNavigator/AddMediaTab.js';
import LikesTab from './AppTabNavigator/LikesTab.js';
import ProfileTab from './AppTabNavigator/ProfileTab.js';


class MainScreen extends Component {

  static navigationOptions= {
    headerLeft:<Icon name='ios-camera-outline' style={{paddingLeft: 10}}/>,
    title: 'Instagram',
    headerRight:<Icon name='ios-send-outline' style={{paddingRight:10}}/>,
  }

  render() {
    return (
        <AppTabNavigator />
    );
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab : {
    screen: HomeTab
  },
  SearchTab : {
    screen: SearchTab
  },
  MediaTab : {
    screen: AddMediaTab
  },
  LikesTab : {
    screen: LikesTab
  },
  ProfileTab : {
    screen: ProfileTab
  }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPositions:'bottom',
  tabBarOptions:{
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor:'#d1cece',
    showLabel:false,
    showIcon:true
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  }

});
