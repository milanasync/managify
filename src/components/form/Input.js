import React, {Component, useState} from 'react';
import {Text, View, TextInput, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

//redux
import {connect} from 'react-redux';

// components
import TypoGraphy from '../TypoGraphy/TypoGraphy';
import Colors from '../../theme/Colors';

const Input = props => {
  let {app, label = '', errorMessage = '', datepicker = false} = props;
  let {theme} = app;

  let [inputStyle, setInputStyle] = useState(theme.style.textInput);
  let [isthemeText, setIsthemeText] = useState(false);
  let [showDatepicker, setShowDatepicker] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={_ => (datepicker ? setShowDatepicker(true) : null)}>
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
          editable={!datepicker}
        />
        {showDatepicker && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            date={props.value}
            value={props.value} 
            mode={'date'}
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatepicker(false);
              props.onChangeText(selectedDate);
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(Input);
