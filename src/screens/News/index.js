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
import axios from 'axios';
import {Images} from '@config';
import {Header} from '@components';
const headers = {
  'Content-Type': 'text/plain',
  'x-token':
    'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjowLCJ1c2VybmFtZSI6Imd1ZXN0IiwiY3JlYXRlZF90aW1lIjoxNTk0NzExODU4LCJ0dGwiOjYwNDgwMH0.QoLIEqegwDjQjf05iEXeL3F-FN9yMxVQvSwqTAyZplM',
};
const data = {
  page: 1,
  limit: 7,
  post_id: 47,
};
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
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: {},
      imageThumb: '',
    };
  }

  componentDidMount() {
    axios
      .post('https://dev.apecsoft.asia/cktc/api/news/get_list_related', data, {
        headers: headers,
      })
      .then((response) => {
        this.setState({
          listData: response.data.data,
        });
        console.log('list data : ', this.state.listData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  _listNew = (element) => {
    const imageThumb = getImgThumb(element.thumbnail, 300, 300, false);
    return (
      <TouchableOpacity style={styles.ItemNews}>
        <Image source={imageThumb} style={styles.image} />
        <View style={styles.contentTitleNews}>
          <Text style={styles.title} ellipsizeMode={'tail'} numberOfLines={2}>
            {element.title}
          </Text>
          <Text
            style={styles.subTitle}
            ellipsizeMode={'tail'}
            numberOfLines={3}>
            {element.slug}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  _render_list = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        onEndReached={this.onLoadMore}
        onEndReachedThreshold={0.3}
        data={this.state.listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => this._listNew(item)}
      />
    );
  };
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.containerHeader}>
          <StatusBar backgroundColor={'red'} translucent={true} />
          <Header
            iconLeft={Images.ic_back_black}
            title={'Tin tức'}
            // iconRight={Images.ic_back_black}
          />
        </View>
        <View style={styles.body}>{this._render_list()}</View>
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
  containerHeader: {
    height: getStatusBarHeight() + getHeight(50),
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
    marginBottom: getHeight(26),
  },
  body: {
    flex: 1,
  },
  ItemNews: {
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: getWidth(16),
    marginVertical: getHeight(10),
  },
  image: {
    width: getWidth(114),
    height: getHeight(114),
    resizeMode: 'cover',
    borderRadius: getWidth(2),
  },
  contentTitleNews: {
    left: getWidth(15),
    width: ScreenWidth - getWidth(150),
  },
  title: {
    fontSize: getHeight(15),
    fontFamily: 'OpenSans-SemiBold',
  },
  subTitle: {
    fontSize: getHeight(15),
    fontFamily: 'OpenSans-Regular',
  },
});

export default News;
