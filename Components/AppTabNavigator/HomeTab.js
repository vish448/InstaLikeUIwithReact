/* Home Screen*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import CardComponent from '../CardComponent';

import {Container, Content, Icon, Thumbnail} from 'native-base';

class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
      <Icon name='ios-home' style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{height:100}}>
            <View style={{flex:1,justifyContent: 'space-between',flexDirection: 'row',alignItems: 'center',paddingHorizontal: 7}}>
              <Text>Stories</Text>
              <Text>Watch All</Text>
            </View>
            <View style={{flex:3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalIndicator={false}
                contentContainerStyle={{
                  alignItems:'center',
                  paddingStart:5,
                  paddingEnd:5
                }}>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>
                <Thumbnail source={require('../../assets/me.jpg')} style = {{marginHorizontal:5,borderColor:'pink',borderWidth:2}}/>

              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource = 'paint' likes='30'/>
          <CardComponent imageSource = 'rafa1' likes='4240'/>
          <CardComponent imageSource = 'rafa2' likes='3450'/>
          <CardComponent imageSource = 'rafa3' likes='3770'/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
