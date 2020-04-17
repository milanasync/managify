import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import {connect} from 'react-redux';

// import components
import TypoGraphy from '../TypoGraphy/TypoGraphy';
import Colors from '../../theme/Colors';

const ListItem = ({title, icon = false, app, onPress = _ => {}}) => {
  let {theme} = app;
  return (
    <TouchableOpacity onPress={_ => onPress()} style={[theme.style.listItem]}>
      {icon && <Icon name={icon} />}
      <TypoGraphy isthemeText={false} color={Colors.themeColor5}>
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
export default connect(mapStateToProps)(ListItem);
