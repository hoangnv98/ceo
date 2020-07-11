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
export class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.background}>
          <ImageBackground
            source={Images.bg_splash}
            style={styles.imageBackground}
          />
        </View>
        <View style={styles.content}>
          <Image source={Images.logo} style={styles.logo}></Image>
          <Text style={styles.title}>CÂU LẠC BỘ</Text>
          <Text style={styles.subtitle}>CEO - CHÌA KHOÁ THÀNH CÔNG</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: getWidth(135),
    height: getHeight(135),
    resizeMode: 'contain',
  },
  title: {
    marginTop: getHeight(27),
    color: '#fff',
    fontSize: getHeight(15),
    fontFamily: 'OpenSans-Bold',
  },
  subtitle: {
    marginTop: getHeight(15),
    color: '#fff',
    fontSize: getHeight(16),
    fontFamily: 'OpenSans-Bold',
  },
});

export default Splash;
