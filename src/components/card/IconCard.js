import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// style
import Colors from '../../theme/Colors';

// components
import CardOutLineComponent from './CardOutline';
import {TypoGraphy} from '../index';
const IconCard = props => {
  return (
    <CardOutLineComponent {...props} center>
      <View>
        <Icon name={props.icon} color={Colors.themeColor} />
        <TypoGraphy>{props.iconText}</TypoGraphy>
      </View>
      <TypoGraphy mdText>{props.number}</TypoGraphy>
    </CardOutLineComponent>
  );
};

export default IconCard;
