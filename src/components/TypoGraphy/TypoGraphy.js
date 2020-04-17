import React, {Component} from 'react';
import {Text} from 'react-native';
import Colors from '../../theme/Colors';
//redux
import {connect} from 'react-redux';

const TypoGraphy = ({
  themeText,
  app,
  children,
  isthemeText = true,
  bold = false,
  mdText = false,
  fontSize = 18,
  color = Colors.white,
  center = false,
  bgColor = false,
  isBadge = false,
  cardBadge = false,
  right = false,
}) => {
  let {theme} = app;
  let themeTextStyle = {fontSize, color};

  if (isthemeText) {
    themeTextStyle = {...themeTextStyle, ...theme.style.themeText};
  }

  if (bold) {
    themeTextStyle = {...themeTextStyle, fontWeight: 'bold'};
  }

  if (mdText) {
    themeTextStyle = {...themeTextStyle, fontSize: 28};
  }

  if (center) {
    themeTextStyle = {...themeTextStyle, textAlign: 'center'};
  }

  if (right) {
    themeTextStyle = {...themeTextStyle, textAlign: 'right'};
  }

  if (bgColor) {
    themeTextStyle = {...themeTextStyle, backgroundColor: bgColor};
  }

  if (isBadge) {
    themeTextStyle = {
      ...themeTextStyle,
      padding: 5,
      paddingHorizontal: 12,
      borderRadius: 50,
      margin: 1,
    };
    if (cardBadge) {
      themeTextStyle = {
        ...themeTextStyle,
        padding: 4,
        paddingHorizontal: 10,
        fontSize: 14,
      };
    }
  }
  return <Text style={themeTextStyle}>{children}</Text>;
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(TypoGraphy);
