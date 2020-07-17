import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {getHeight, getWidth, getStatusBarHeight, ScreenWidth} from '@common';
import axios from 'axios';
import {Images} from '@config';
import {Header} from '@components';
import {FlatList} from 'react-native-gesture-handler';
const headers = {
  'Content-Type': 'text/plain',
  'x-token':
    'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjowLCJ1c2VybmFtZSI6Imd1ZXN0IiwiY3JlYXRlZF90aW1lIjoxNTk0NzExODU4LCJ0dGwiOjYwNDgwMH0.QoLIEqegwDjQjf05iEXeL3F-FN9yMxVQvSwqTAyZplM',
};
const data = [
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
  {money: '5.000.000', status: 0, dateTime: '20.03.2020'},
];
export const getImgThumb = (name, width = 0, height = 0, crop = false) => {
  if (ScreenWidth < 360) {
    width = parseInt(width, 10) * 0.95;
    height = parseInt(height, 10) * 0.95;
  } else if (ScreenWidth > 667) {
    width = parseInt(width, 10) * 1.1;
    height = parseInt(height, 10) * 1.1;
  }
  let url =
    'https://dev.apecsoft.asia/cktc/' +
    'image?name=' +
    name +
    '&width=' +
    width +
    '&height=' +
    height +
    '&crop=' +
    crop;
  return {uri: url};
};
export class ListMember extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .post('https://dev.apecsoft.asia/cktc/api/account/list_member', data, {
        headers: headers,
      })
      .then((response) => {
        this.setState({
          listData: response.data.data,
        });
        console.log('data trả về : ', this.state.listData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  _renderItem = (element) => {
    return <View style={styles.containerItem}></View>;
  };
  _renderList = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        onEndReachedThreshold={0.3}
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
            title={'Danh sách hội viên'}
            // iconRight={Images.ic_back_black}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.boxSearch}>
            <TextInput
              style={styles.textInputSearch}
              placeholder={'Nhập thành viên cần tìm'}
            />
            <Image source={Images.ic_search} style={styles.ic_search} />
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
    // position: 'relative',
    // flexWrap: 'wrap',
  },
  boxSearch: {
    top: getHeight(21),
    marginHorizontal: getWidth(16),
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: getHeight(42),
    borderRadius: 5,
    flexDirection: 'row',
    // position: 'relative',
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
    // flex: 1,
  },
  scrollView: {
    marginTop: getHeight(40),
    backgroundColor: 'red',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerItem: {
    backgroundColor: 'red',
    flexDirection: 'row',
    width: 100,
    height: 1,
  },
});

export default ListMember;
