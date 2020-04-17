import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//redux
import {connect} from 'react-redux';

// import components
import Card from '../card/Card';
import TypoGraphy from '../TypoGraphy/TypoGraphy';
import Badge from '../badge/Badge';
import Colors from '../../theme/Colors';

const DataListItem = ({item, onPress, children, app}) => {
  let {theme} = app;
  return (
    <TouchableOpacity onPress={_ => onPress()} style={[theme.style.listItem]}>
      <Card>
        <View style={[theme.style.rowCenterAround, theme.style.wrap]}>
          <Image source={item.image} {...theme.style.dataListImageThumb} />
          <View>
            <TypoGraphy>{item.title}</TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {item.subTitle}
            </TypoGraphy>

            <View style={[theme.style.row, theme.style.wrap]}>
              {item.tags.map(tag => (
                <Badge bgColor={Colors.themeColor} title={tag} />
              ))}
            </View>
            {children}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(DataListItem);
