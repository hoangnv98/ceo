import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {
  getHeight,
  getWidth,
  getStatusBarHeight,
  ScreenWidth,
  ScreenHeight,
} from '@common';
import {Images} from '@config';
import {Header, InputCustom} from '@components';
export class InsertInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground source={Images.bg_info} style={styles.imageBackground}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <View style={styles.imageBackground}>
            <Image source={Images.logo} style={styles.logo}></Image>
          </View>
          <Header iconLeft={Images.ic_back} />
        </ImageBackground>
        <View style={styles.body}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Thêm thành viên</Text>
            <View style={styles.cardContent}>
              <InputCustom />
              <InputCustom />
              <InputCustom />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  background: {
    justifyContent: 'center',
    width: ScreenWidth,
    height: ScreenHeight,
  },
  imageBackground: {
    width: ScreenWidth,
    height: getHeight(270),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: getWidth(85),
    height: getHeight(85),
    resizeMode: 'contain',
  },
  body: {
    position: 'absolute',
    width: ScreenWidth,
    top: getHeight(270 - getStatusBarHeight() - 30),
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    height: getHeight(555),
    borderRadius: 15,
    width: ScreenWidth - getWidth(34),
  },
  cardTitle: {
    textAlign: 'center',
    color: '#002f87',
    textTransform: 'uppercase',
    top: getHeight(30),
    fontSize: getHeight(16),
    fontFamily: 'OpenSans-Bold',
  },
  cardContent: {
    position: 'absolute',
    top: 100,
  },
});

export default InsertInfo;
