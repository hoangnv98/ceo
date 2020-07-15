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
  TextInput,
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
export class ListMember extends Component {
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
  componentDidMount() {
    console.log(ScreenWidth);
  }
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
    var data = [1, 2, 3, 4, 5, 6];
    return (
      <View style={[styles.container]}>
        <View style={styles.containerHeader}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <Header
            iconLeft={Images.ic_back_black}
            title={'Danh sách hội viên'}
            // iconRight={Images.ic_back_black}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.boxSearch}>
            <TextInput
              style={styles.textInputSearch}
              placeholder={'Nhập thành viên cần tìm'}></TextInput>
            <Image source={Images.ic_search} style={styles.ic_search}></Image>
          </View>
          <View style={styles.contentBody}>
            {data.map((element, index) => {
              const check = index % 2;
              return (
                <View
                  key={index}
                  style={[
                    styles.itemMember,
                    check == 1 && styles.itemMemberRight,
                  ]}>
                  <TouchableOpacity style={styles.button}>
                    <Text>{element}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
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
  },
  containerHeader: {
    height: getStatusBarHeight() + getHeight(50),
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'blue',
    position: 'relative',
  },
  boxSearch: {
    top: getHeight(21),
    marginHorizontal: getWidth(16),
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: getHeight(42),
    borderRadius: 5,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  textInputSearch: {
    position: 'absolute',
    left: getWidth(15),
    width: ScreenWidth - getWidth(80),
    height: getHeight(40),
  },
  ic_search: {
    position: 'absolute',
    right: getWidth(15),
    width: getWidth(15),
    height: getHeight(15),
    resizeMode: 'contain',
  },
  contentBody: {
    position: 'absolute',
    top: getHeight(85),
    width: ScreenWidth - getWidth(32),
    marginHorizontal: getWidth(16),
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
  },
  itemMember: {
    // width: (ScreenWidth - getWidth(32)) / 2,
    width: '50%',
    marginBottom: 10,
    height: getHeight(205),
    paddingRight: getWidth(10),
  },
  itemMemberRight: {
    paddingRight: 0,
    paddingLeft: getWidth(10),
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    flex: 1,
  },
});

export default ListMember;
