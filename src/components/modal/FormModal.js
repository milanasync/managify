import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

//redux
import {connect} from 'react-redux';

// import components
import ListItem from '../list/ListItem';
import Button from '../form/Button';
import Colors from '../../theme/Colors';

const renderHeader = (header = '', theme) => {
  return <ListItem title={header} />;
};

const renderButton = (onSubmit, onCancle, theme) => {
  return (
    <View style={[theme.style.row, theme.style.rowCenterEnd]}>
      <Button
        color={Colors.themeColor6}
        backgroundColor={Colors.white}
        onPress={_ => onCancle()}
        title="Cancle"
      />
      <Button onPress={_ => onSubmit()} title="Submit" />
    </View>
  );
};

const FormModal = props => {
  let {theme} = props.app;
  let {children, header, onSubmit = _ => {}} = props;
  return (
    <Modal
      avoidKeyboard
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={theme.style.formModal}
      hasBackdrop={false}
      {...props}>
      {renderHeader(header, theme)}
      <ScrollView showsVerticalScrollIndicator={false}>
        {children}
        {renderButton(onSubmit, props.onRequestClose, theme)}
      </ScrollView>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(FormModal);
