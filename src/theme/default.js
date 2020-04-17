import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

import Colors from './Colors';
import Images from './Images';

// component-props
export const statusBar = {
  backgroundColor: Colors.white,
  barStyle: 'dark-content',
  translucent: false,
};

export const drawer = {
  initialRouteName: 'Auth',
  keyboardDismissMode: 'on-drag',
  drawerStyle: {
    // width: width / 2,
  },
};
// component-props-ends

// component-styles

// basic styles
export const borderTop = {
  borderTopWidth: 1,
  borderTopColor: Colors.greyColor
};

export const row = {
  flexDirection: 'row',
};

export const rowCenter = {
  ...row,
  alignItems: 'center',
  justifyContent: 'center',
};

export const rowCenterStart = {
  ...row,
  ...rowCenter,
  justifyContent: 'flex-start',
};

export const rowCenterEnd = {
  ...row,
  ...rowCenter,
  justifyContent: 'flex-end',
};

export const rowCenterBetween = {
  ...row,
  ...rowCenter,
  justifyContent: 'space-between',
};

export const rowCenterAround = {
  ...row,
  ...rowCenter,
  justifyContent: 'space-around',
};

export const rowCenterEvenly = {
  ...row,
  ...rowCenter,
  justifyContent: 'space-evenly',
};

export const selfCenter = {
  alignSelf: 'center',
};

export const selfStart = {
  alignSelf: 'flex-start',
};

export const selfEnd = {
  alignSelf: 'flex-end',
};

export const selfStretch = {
  alignSelf: 'stretch',
};

export const wrap = {
  flexWrap: 'wrap',
};

export const themeBtn = {
  backgroundColor: Colors.themeColor,
  borderRadius: 50,
  padding: 12,
  margin: 12,
};

export const textInput = {
  borderColor: Colors.greyColor,
  borderWidth: 1,
  borderRadius: 4,
  padding: 12,
  margin: 12,
};

export const activeTextInput = {
  ...textInput,
  borderColor: Colors.themeColor,
};

export const textInputLabel = {
  position: 'absolute',
  left: 28,
  top: 2,
  backgroundColor: Colors.white,
  zIndex: 1000,
  paddingHorizontal: 5,
};

export const textInputLabelText = {
  color: Colors.greyColor,
};

export const listItem = {
  paddingHorizontal: 24,
  paddingVertical: 18,
  backgroundColor: Colors.white,
  borderBottomWidth: 0.8,
  borderColor: Colors.greyColor,
  justifyContent: 'center',
};
// basic styles end

export const drawerItemsStyle = {
  // backgroundColor: Colors.lightThemeColor,
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
};

export const cardOutline = {
  backgroundColor: Colors.white,
  borderRadius: 10,
  elevation: 5,
  margin: 10,
};

export const cardContent = {
  padding: 22,
};

export const cardBadge = {
  position: 'absolute',
  zIndex: 10000,
  left: -10,
  top: 10,
};

export const cardImage = {
  style: {
    height: height / 4,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  resizeMode: 'cover',
  resizeMethod: 'resize',
};

export const centerView = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const themeText = {
  color: Colors.themeColor,
};

export const formModal = {
  margin: 0,
  height,
  width,
  justifyContent: 'flex-start',
  flex: 1,
  backgroundColor: Colors.white,
};

export const dataListImageThumb = {
  style: {
    height: width / 6,
    width: width / 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  resizeMode: 'cover',
  resizeMethod: 'resize',
};

export const centerImage = {
  ...dataListImageThumb,
  style: {
    ...dataListImageThumb.style,
    ...selfCenter,
  },
};

export const toast = {
  position: 'top',
  positionValue: 10,
  style: {width: '100%', ...centerView, backgroundColor: Colors.themeColor},
};

export const toastDanger = {
  ...toast,
  style: {...toast.style, backgroundColor: Colors.black},
};

export const listContainer = {
  backgroundColor: Colors.white,
  paddingBottom: 120,
  minHeight: '100%',
};
// component-styles-ends

export const appStyle = {
  cardOutline,
  centerView,
  themeText,
  drawer,

  // basic styles
  row,
  rowCenter,
  rowCenterAround,
  rowCenterBetween,
  rowCenterEnd,
  rowCenterEvenly,
  rowCenterStart,
  selfCenter,
  selfEnd,
  selfStart,
  selfStart,

  wrap,
  textInput,
  activeTextInput,
  textInputLabel,
  textInputLabelText,
  themeBtn,
  cardContent,
  cardImage,
  cardBadge,

  listItem,
  formModal,
  dataListImageThumb,
  Images,
  centerImage,
  toast,
  toastDanger,
  listContainer,

  borderTop
  // basic styles end
};
