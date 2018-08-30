/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {Card, CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'

 class CardComponent extends Component {
  render() {

    const images = {
      'paint' : require('../assets/paint.jpg'),
      'rafa1' : require('../assets/rafa1.jpg'),
      'rafa2' : require('../assets/rafa2.jpg'),
      'rafa3' : require('../assets/rafa3.jpg'),
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.jpg')}/>
            <Body>
              <Text>Vishang</Text>
              <Text note>July 4, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]} style={{height:200, width: null,flex:1}} />
        </CardItem>
        <CardItem style={{height:30}}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart-outline' style={{color: '#000'}} />
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles-outline' style={{color: '#000'}} />
            </Button>
            <Button transparent>
              <Icon name='ios-send-outline' style={{color: '#000'}} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height:40}}>
          <Text>{this.props.likes} Likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text><Text style={{fontWeight: '800'}}>Vishag </Text>Some randome text comment.Some randome text comment.
            Some randome text comment.
            Some randome text comment
            Some randome text comment
            Some randome text comment
            Some randome text comment
            Some randome text comment
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
