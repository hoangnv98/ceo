import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images} from '@config';
import {getWidth, getHeight} from '@common';
import {ScreenWidth} from '../../common';

export class ItemNotifi extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image source={Images.ic_notify} style={styles.icon_Notify} />
            <View style={styles.dot} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleContent}>
            At vero eos et accusamus et iusto od
          </Text>
          <Text style={styles.desContent}>
            Et harum quidem rerum facilis est et expedita
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    position: 'relative',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    height: getHeight(65),
  },
  imageContainer: {
    // flex: 1,
    position: 'relative',
    width: getWidth(50),
    height: getHeight(65),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
  },
  icon_Notify: {
    width: getWidth(24),
    height: getHeight(24),
    resizeMode: 'contain',
  },
  dot: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    width: 10,
    height: getHeight(10),
    backgroundColor: 'red',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    borderBottomColor: '#f5f5f2',
    borderBottomWidth: 1,
  },
  titleContent: {
    fontSize: getHeight(15),
    fontWeight: 'bold',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
});

export default ItemNotifi;
