import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images} from '@config';
import {
  getHeight,
  getWidth,
  getStatusBarHeight,
  ScreenWidth,
  ScreenHeight,
} from '@common';

export class InputCustom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <View style={styles.input}></View>;
  }
}
const styles = StyleSheet.create({
  input: {
    position: 'absolute',
    width: '100%',
    height: 30,
  },
});
export default InputCustom;
