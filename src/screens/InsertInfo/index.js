import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  Text,
  Button,
  TouchableOpacity,
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
              <InputCustom textInput={'NGUYỄN VIỆT HOÀNG'} />
              <InputCustom textInput={'nviethoang98@gmail.com'} input={''} />
              <InputCustom placeholder={'Số điện thoại*'} />
              <InputCustom placeholder={'Chức vụ'} />
              <InputCustom placeholder={'Tên doanh nghiệp'} />
              <InputCustom placeholder={'Mật khẩu'} />
              <InputCustom placeholder={'Nhập lại mật khẩu'} />
            </View>
            <TouchableOpacity style={styles.cardBottom}>
              <Text style={styles.textFinish}>Xong</Text>
            </TouchableOpacity>
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
    flexDirection: 'column',
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
    flexDirection: 'column',
  },
  cardBottom: {
    position: 'absolute',
    bottom: getHeight(23),
    width: '88%',
    marginHorizontal: getWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fec32b',
    height: getHeight(40),
    borderRadius: 5,
  },
  textFinish: {
    color: '#fff8ea',
  },
});

export default InsertInfo;
