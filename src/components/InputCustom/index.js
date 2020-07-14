import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
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

  componentDidMount() {
    console.log('height : ', ScreenHeight);
    console.log('width: ', ScreenWidth);
  }

  render() {
    return (
      <View style={styles.itemInput}>
        <View style={styles.contentInput}>
          <View style={styles.image}>
            <Image source={Images.ic_user} style={styles.ic_user}></Image>
          </View>
          <View style={styles.textInput}>
            <TextInput
              style={[styles.inputHere, this.props.input]}
              placeholder={this.props.placeholder}>
              {this.props.textInput}
            </TextInput>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemInput: {
    position: 'relative',
  },
  contentInput: {
    position: 'relative',
    marginHorizontal: getWidth(22),
    borderBottomColor: '#f0f0f0',
    width: ScreenWidth - getWidth(44 + 34),
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: getHeight(52),
  },
  image: {
    position: 'absolute',
    bottom: getHeight(4),
  },
  ic_user: {
    width: getWidth(12),
    height: getHeight(13),
    resizeMode: 'contain',
  },
  textInput: {
    position: 'absolute',
    top: getHeight(14),
    left: getWidth(16),
  },
  inputHere: {
    width: ScreenWidth - getWidth(44 + 34 + 16),
    fontSize: getHeight(12),
    fontFamily: 'OpenSans-Regular',
  },
  input: {
    fontFamily: 'OpenSans-Bold',
  },
});
export default InputCustom;
