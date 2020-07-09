import {StyleSheet} from 'react-native';
import {getHeight, getWidth} from './Helper';
export const globalText = {
  style: {
    fontSize: 13.34,
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(34, 34, 34, 0.6)',
  },
};

export const globalView = {
  style: {
    backgroundColor: '#fff',
  },
};

export const globalTouchablOpacity = {
  activeOpacity: 0.7,
};

export const Colors = {
  c1: '#002f87',
  c2: '#fec32b',
  c3: 'rgba(34, 34, 34, 0.6)',
  c4: '#3a3936',
};

export const fontFamily = {
  f1: 'OpenSans-Regular',
  f2: 'OpenSans-Bold',
  f3: 'OpenSans-Semibold',
  f4: 'OpenSans-Light',
  f5: 'OpenSans-ExtraBold',
  f6: 'SFProText-Medium',
};

export const Style = StyleSheet.create({
  body: {
    backgroundColor: '#f5f7f9',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  flexCenter: {
    alignItems: 'center',
  },
  textDanger: {
    color: '#dc3545',
  },
  borderHead: {
    borderBottomColor: '#BEBEBE',
    borderBottomWidth: 0.5,
  },
  label: {
    marginBottom: 5,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  iconTabBottom: {
    width: getWidth(24.97),
    height: getHeight(26.89),
    resizeMode: 'contain',
  },
  mb_30: {
    marginBottom: getHeight(30),
  },
  mb_5: {
    marginBottom: getHeight(5),
  },
});
