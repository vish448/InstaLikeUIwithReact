/* Profile Screen*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import {Icon, Container, Content, Header, Body, Left, Right, Button} from 'native-base';

import EntypoIcon from 'react-native-vector-icons/Entypo'


var images = [
  require('../../assets/feedImages/feedImage1.jpg'),
  require('../../assets/feedImages/feedImage2.jpg'),
  require('../../assets/feedImages/feedImage3.jpg'),
  require('../../assets/feedImages/feedImage4.jpg'),
  require('../../assets/feedImages/feedImage5.jpg'),
  require('../../assets/feedImages/feedImage6.jpg'),
  require('../../assets/feedImages/feedImage7.jpg'),
  require('../../assets/feedImages/feedImage8.jpg'),
  require('../../assets/feedImages/feedImage9.jpg'),
  require('../../assets/feedImages/feedImage10.jpg'),
  require('../../assets/feedImages/feedImage11.jpg'),
  require('../../assets/feedImages/feedImage12.jpg'),
  require('../../assets/feedImages/feedImage13.jpg'),
  require('../../assets/feedImages/feedImage14.jpg'),
  require('../../assets/feedImages/feedImage15.jpg'),
  require('../../assets/feedImages/feedImage16.jpg'),
  require('../../assets/feedImages/feedImage17.jpg'),
  require('../../assets/feedImages/feedImage18.jpg'),
  require('../../assets/feedImages/feedImage19.jpg'),
  require('../../assets/feedImages/feedImage20.jpg'),
  require('../../assets/feedImages/feedImage21.jpg')
]

var {width,height} = Dimensions.get('window')

class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
      <Icon name='person' style={{color:tintColor}} />
    )
  }

  constructor(props){
    super(props)

    this.state = {
      activeIndex: 0
    }

  }

  segmentClicked = (index) =>{
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image, index) => {
      return(
        <View key={index} style={[ {width:(width)/3}, {height:(height)/3}]} >
          <Image source={image} style={{flex:1, width: undefined, height:undefined}} />
        </View>
      )
    })
  }

  renderSection = () => {
    if(this.state.activeIndex  == 0){
      return(
      <View style={{flexWrap: 'wrap',flexDirection: 'row'}}>
        {this.renderSectionOne()}
      </View>
    )
  }
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

        <View>
          <View style={{flexDirection: 'row',justifyContent: 'space-around',borderTopWidth: 1, borderTopColor: '#EEE'}}>
            <Button transparent dark style={{color: '#CCC'}}
                    onpress={()=>this.segmentClicked(0)}
                    active={this.state.activeIndex == 0}>
              <Icon name='ios-apps-outline'
                    style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}></Icon>
            </Button>
            <Button transparent dark style={{color: '#CCC'}}
                    onpress={()=>this.segmentClicked(1)}
                    active={this.state.activeIndex == 1}>
              <Icon name='ios-list-outline'
                    style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}></Icon>
            </Button>
            <Button transparent dark style={{color: '#CCC'}}
                    onpress={()=>this.segmentClicked(2)}
                    active={this.state.activeIndex == 2}>
              <Icon name='ios-people-outline'
                    style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}></Icon>
            </Button>
            <Button transparent dark style={{color: '#CCC'}}
                    onpress={()=>this.segmentClicked(3)}
                    active={this.state.activeIndex == 3}>
              <Icon name='ios-bookmark-outline'
                    style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}></Icon>
            </Button>
          </View>
          {this.renderSection()}
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
