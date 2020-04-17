import React, {Component, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import {connect} from 'react-redux';

// componets
import TypoGraphy from '../TypoGraphy/TypoGraphy';
import Colors from '../../theme/Colors';

const Button = props => {
  let {
    app,
    title,
    errorMessage = '',
    onPress,
    color,
    backgroundColor,
    tabBtn = false,
    active = false,
  } = props;
  let {theme} = app;
  let btnStyle = theme.style.themeBtn;
  if (color != undefined && backgroundColor != undefined) {
    btnStyle = {
      ...btnStyle,
      ...{color, backgroundColor, borderColor: color, borderWidth: 1},
    };
  }

  if (tabBtn) {
    let borderColor = Colors.white;
    if (active) {
      borderColor = Colors.themeColor;
    }
    btnStyle = {
      ...btnStyle,
      ...{
        margin: 0,
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 4,
        borderColor,
      },
    };
  }
  return (
    <TouchableOpacity onPress={_ => onPress()} style={btnStyle}>
      <TypoGraphy color={color} center isthemeText={false}>
        {title}
      </TypoGraphy>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(Button);
