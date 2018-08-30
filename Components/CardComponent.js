/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Card, CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'

 class CardComponent extends Component {
  render() {
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
