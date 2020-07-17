import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {getHeight, getWidth, getStatusBarHeight, ScreenWidth} from '@common';
import {Images} from '@config';
import {Header} from '@components';
const data = [
  {name: 'Tài khoản', iconleft: Images.ic_account},
  {name: 'Hội đồng cố vấn', iconleft: Images.ic_council},
  {name: 'Hội viên', iconleft: Images.ic_member},
  {name: 'Kiến thức hay', iconleft: Images.ic_knowledge},
  {name: 'Tin tức', iconleft: Images.ic_news},
  {name: 'Media', iconleft: Images.ic_media},
  {name: 'Tài liệu nội bộ', iconleft: Images.ic_document},
  {name: 'Cài đặt', iconleft: Images.ic_setting},
  {name: 'Giới thiệu nhà phát triển', iconleft: Images.ic_home},
];
export class Bonus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(ScreenWidth);
  }
  _renderItem = (element) => {
    console.log(element);
    return (
      <TouchableOpacity style={styles.containerItem}>
        <View style={styles.left}>
          <Image source={element.iconleft} style={styles.image} />
          <Text style={styles.text}>{element.name}</Text>
        </View>
        <View style={styles.right}>
          <Image source={Images.ic_continues} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };
  _renderList = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
            iconLeft={Images.ic_logo}
            stylesImageLeft={styles.imageLeft}
            title={'Thêm'}
            iconRight={Images.ic_notify}
          />
        </View>
        <View style={styles.body}>{this._renderList()}</View>
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
  },
  body: {
    flex: 1,
    position: 'relative',
    top: getHeight(15),
  },
  containerItem: {
    height: getHeight(58),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#eeeff0',
    borderBottomWidth: 1,
  },
  image: {
    width: getWidth(24),
    height: getHeight(24),
    resizeMode: 'contain',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: getWidth(10),
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: getHeight(15),
    marginLeft: getWidth(10),
  },
  right: {
    right: getWidth(10),
  },
});

export default Bonus;
