import React, {Component, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import {connect} from 'react-redux';

// components
import TypoGraphy from '../TypoGraphy/TypoGraphy';
import Colors from '../../theme/Colors';
const Input = props => {
  let {app, label = '', errorMessage = ''} = props;
  let {theme} = app;

  let [inputStyle, setInputStyle] = useState(theme.style.textInput);
  let [isthemeText, setIsthemeText] = useState(false);
  return (
    <View>
      <View style={theme.style.textInputLabel}>
        <TypoGraphy
          color={Colors.themeColor6}
          isthemeText={isthemeText}
          fontSize={14}>
          {label}
        </TypoGraphy>
      </View>
      <TextInput
        {...props}
        style={inputStyle}
        onFocus={_ => {
          setInputStyle(theme.style.activeTextInput);
          setIsthemeText(true);
        }}
        onBlur={_ => {
          setInputStyle(theme.style.textInput);
          setIsthemeText(false);
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(Input);
