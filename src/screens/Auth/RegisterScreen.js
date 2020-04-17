import React, {Component} from 'react';
import {StatusBar, StyleSheet, ScrollView, Image} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import {CommonActions} from '@react-navigation/native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import {Card, Input, Button} from '../../components';
import Colors from '../../theme/Colors';

// strings
import strings from '../../localizations';
// import actions here

class AuthRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  doRegister = _ => {
    this.showToast(strings.loading);
    setTimeout(_ => {
      this.refs.toast.close();
      this.showToast(strings.successReg);
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'UserDashStack'}],
        }),
      );
    }, 1000);
  };

  showToast = msg => {
    this.refs.toast.show(msg);
  };
  doLogin = _ => {
    this.props.navigation.navigate('AuthLoginScreen');
  };

  render() {
    let {theme} = this.props.app;
    let images = theme.style.Images;

    return (
      <>
        <Toast ref="toast" {...theme.style.toast} />

        <ScrollView
          style={{backgroundColor: Colors.white, paddingVertical: 42}}>
          <StatusBar {...theme.statusBarProps} />
          <Image source={{uri: images.logo}} {...theme.style.centerImage} />
          <Card cardImage={{uri: images.loginCardImage}}>
            <Input label={strings.name} />
            <Input label={strings.mobile} keyboardType="phone-pad"/>
            <Input label={strings.password} secureTextEntry/>
            <Button onPress={_ => this.doRegister()} title={strings.register} />
            <Button
              color={Colors.themeColor3}
              backgroundColor={Colors.white}
              onPress={_ => this.doLogin()}
              title={strings.login}
            />
          </Card>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // add action here
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(AuthRegisterScreen);
