import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  getHeight,
  getWidth,
  getStatusBarHeight,
  ScreenWidth,
  ScreenHeight,
} from '@common';
import axios from 'axios';
import {Images} from '@config';
import {Header, InputCustom} from '@components';
const headers = {
  'Content-Type': 'text/plain',
  'x-token':
    'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjowLCJ1c2VybmFtZSI6Imd1ZXN0IiwiY3JlYXRlZF90aW1lIjoxNTk0NzExODU4LCJ0dGwiOjYwNDgwMH0.QoLIEqegwDjQjf05iEXeL3F-FN9yMxVQvSwqTAyZplM',
};
const data = [
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '7.000.000', status: 1, dateTime: '22.03.2020'},
  {money: '6.000.000', status: 2, dateTime: '24.03.2020'},
  {money: '8.000.000', status: 1, dateTime: '28.03.2020'},
  {money: '8.000.000', status: 2, dateTime: '28.03.2020'},
  {money: '8.000.000', status: 0, dateTime: '28.03.2020'},
  {money: '8.000.000', status: 0, dateTime: '28.03.2020'},
  {money: '8.000.000', status: 0, dateTime: '28.03.2020'},
  {money: '15.000.000', status: 0, dateTime: '28.03.2020'},
  {money: '8.000.000', status: 0, dateTime: '28.03.2020'},
];
export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderImage = (status) => {
    if (status == 0)
      return (
        <Image source={Images.img_timer_1} style={styles.imageTimer}></Image>
      );
    else if (status == 1)
      return (
        <Image source={Images.img_timer_2} style={styles.imageTimer}></Image>
      );
    return (
      <Image source={Images.img_timer_3} style={styles.imageTimer}></Image>
    );
  };
  checkStatus(status) {
    if (status == 0) return <Text style={styles.subTextOwe}>Chưa đóng</Text>;
    else if (status == 1)
      return <Text style={styles.subTextOwe_2}>Chưa đóng</Text>;
    return <Text style={styles.subTextOwe_3}>Đã đóng</Text>;
  }
  componentDidMount() {}
  _renderItem = (element) => {
    return (
      <View style={styles.Item}>
        <View style={styles.contentItem}>
          {this._renderImage(element.status)}
          <View style={styles.textOwe}>
            <Text style={styles.textTitleOwe}>{element.money + ' đ'}</Text>
            {this.checkStatus(element.status)}
          </View>
          <Text style={styles.dateTime}>{element.dateTime}</Text>
        </View>
      </View>
    );
  };
  _renderList = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.3}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => this._renderItem(item)}
      />
    );
  };
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.containerHeader}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <Header
            iconLeft={Images.ic_back_black}
            title={'Lịch sử đóng phí'}
            // iconRight={Images.ic_back_black}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.headerBody}>
            <Text style={styles.textTotalMoney}>TỔNG PHÍ ĐÃ ĐÓNG</Text>
            <Text style={styles.TotalMoney}>27.800.000 đ</Text>
          </View>
          <View style={styles.contentBody}>{this._renderList()}</View>
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
  containerHeader: {
    height: getStatusBarHeight() + getHeight(50),
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
  },
  headerBody: {
    backgroundColor: '#f5f7f9',
    height: getHeight(75),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(16),
  },
  textTotalMoney: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: getHeight(12),
    color: '#11d424',
  },
  TotalMoney: {
    fontFamily: 'OpenSans-Bold',
    fontSize: getHeight(14),
  },
  contentBody: {
    flex: 1,
  },
  Item: {
    position: 'relative',
    height: getHeight(76),
    width: '100%',
    justifyContent: 'center',
  },
  contentItem: {
    position: 'absolute',
    height: getHeight(76),
    width: ScreenWidth - getWidth(34),
    marginHorizontal: getWidth(17),
    alignItems: 'center',
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  imageTimer: {
    height: getHeight(40),
    width: getWidth(40),
    resizeMode: 'contain',
  },
  textOwe: {
    left: getWidth(11),
  },
  textTitleOwe: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: getHeight(15),
  },
  subTextOwe: {
    color: '#fec32b',
    fontFamily: 'OpenSans-Regular',
    fontSize: getHeight(15),
  },
  subTextOwe_2: {
    color: '#da3705',
    fontFamily: 'OpenSans-Regular',
    fontSize: getHeight(15),
  },
  subTextOwe_3: {
    color: '#11d424',
    fontFamily: 'OpenSans-Regular',
    fontSize: getHeight(15),
  },
  dateTime: {
    position: 'absolute',
    fontSize: getHeight(15),
    fontFamily: 'OpenSans-Regular',
    right: 0,
  },
});

export default History;
