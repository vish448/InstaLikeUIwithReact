/* Profile Screen*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {Icon, Container, Content, Header, Body, Left, Right, Button} from 'native-base';

import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
      <Icon name='person' style={{color:tintColor}} />
    )
  }

  render() {
    return (
    <Container style={{flex:1, backgroundColor: '#FFF'}} >
      <Header>
        <Left><EntypoIcon name="back-in-time" style={{paddingLeft:10, fontSize:24}} /></Left>
        <Body><Text style={{fontSize: 18}}>Instagram</Text></Body>
        <Right><Icon name='md-person-add' style={{ paddingLeft:10, fontSize:24 }} /></Right>
      </Header>
      <Content>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1, padding:10}} >
              <Image source={require('../../assets/me.jpg')} style={{width: 75, height: 75, borderRadius: 37.5}}/>
            </View>
            <View style={{flex:3, paddingTop: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{alignItems: 'center'}}>
                  <Text>20</Text>
                  <Text>Posts</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>197</Text>
                  <Text>Follower</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>20</Text>
                  <Text>Following</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Button bordered dark style={{flex:3, marginLeft: 10, height: 30, justifyContent: 'center'}}>
                  <Text>Edit Profile</Text>
                </Button>
                <Button bordered dark style={{flex:1, marginLeft: 10, marginRight: 10, height: 30, justifyContent: 'center'}}>
                  <Icon name='settings' style={{fontSize: 15}} />
                </Button>
              </View>
            </View>
          </View>
          <View style = {{paddingVertical:10, paddingHorizontal:10}}>
            <Text>Vishang Soni</Text>
            <Text>Front End Developer</Text>
            <Text>www.vishangsoni.com</Text>
          </View>
        </View>
      </Content>
    </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
