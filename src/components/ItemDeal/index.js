import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images} from '@config';
import {getWidth, getHeight} from '@common';
import {ScreenWidth, ScreenHeight} from '../../common';

export class ItemDeal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <View style={styles.imageContainer}>
          <Image source={this.props.image} style={styles.image} />
        </View>
        <View style={styles.countdown}>
          <View style={styles.componentTimes}>
            <Text style={styles.timesBig}>12</Text>
            <Text style={styles.subTimes}>Days</Text>
          </View>
          <Text style={styles.twodot}>:</Text>
          <View style={styles.componentTimes}>
            <Text style={styles.timesBig}>12</Text>
            <Text style={styles.subTimes}>Hours</Text>
          </View>
          <Text style={styles.twodot}>:</Text>
          <View style={styles.componentTimes}>
            <Text style={styles.timesBig}>12</Text>
            <Text style={styles.subTimes}>Minutes</Text>
          </View>
          <Text style={styles.twodot}>:</Text>
          <View style={styles.componentTimes}>
            <Text style={styles.timesBig}>12</Text>
            <Text style={styles.subTimes}>Second</Text>
          </View>
        </View>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode={'clip'}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    position: 'relative',
    height: getHeight(222),
  },
  imageContainer: {
    position: 'relative',
    width: ScreenWidth - getWidth(0),
    flexDirection: 'column',
    borderRadius: 50,
  },
  image: {
    position: 'absolute',
    height: getHeight(169),
    width: ScreenWidth,
    right: 6,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  countdown: {
    position: 'absolute',
    top: getHeight(6),
    left: getWidth(6),
    backgroundColor: '#68697f',
    width: getWidth(188),
    height: getHeight(43),
    borderRadius: 5,
    flexDirection: 'row',
  },
  componentTimes: {
    // backgroundColor: 'red',
    width: getWidth(45),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  timesBig: {
    color: '#fff',
    fontSize: getHeight(20),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  subTimes: {
    color: '#fff',
    fontSize: getHeight(9),
    fontFamily: 'SF-Pro-Display-Regular',
  },
  twodot: {
    // position: 'absolute',
    flexDirection: 'column',
    color: '#fff',
    top: getHeight(6),
  },
  text: {
    position: 'absolute',
    bottom: getHeight(11),
    left: getWidth(10),
    width: getWidth(311),
    fontSize: getHeight(15),
    fontFamily: 'SF-Pro-Display-Semibold',
  },
});

export default ItemDeal;
