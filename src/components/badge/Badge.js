import React, {Component, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import {connect} from 'react-redux';

// componets
import TypoGraphy from '../TypoGraphy/TypoGraphy';

const Badge = props => {
  let {app, title, cardBadge} = props;
  let {theme} = app;

  return (
    <TypoGraphy cardBadge isBadge center isthemeText={false} {...props}>
      {title}
    </TypoGraphy>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(Badge);
