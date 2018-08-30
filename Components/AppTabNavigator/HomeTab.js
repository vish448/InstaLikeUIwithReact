/* Home Screen*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CardComponent from '../CardComponent';

import {Container, Content, Icon} from 'native-base';

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
          <CardComponent />
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
