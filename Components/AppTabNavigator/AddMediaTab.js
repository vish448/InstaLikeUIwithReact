/* Media Screen*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AddMediaTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MediaTab</Text>
      </View>
    );
  }
}

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
