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

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.left}>
          <Image source={this.props.iconLeft}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.center}>
          <Text style={styles.center}>{this.props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.right}>
          <Image source={this.props.iconRight}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: ScreenWidth,
    top: getStatusBarHeight(),
    height: getHeight(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    left: getWidth(10),
  },
  center: {
    color: '#fff',
    fontSize: getHeight(16),
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
  },
  right: {
    right: getWidth(10),
  },
});
export default Header;
