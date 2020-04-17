import React, {Component} from 'react';
import {StatusBar, StyleSheet, ScrollView, Image} from 'react-native';

// toast
import Toast, {DURATION} from 'react-native-easy-toast';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import {Card, Input, Button} from '../../components';
import Colors from '../../theme/Colors';

// strings
import strings from '../../localizations';

class AuthForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  doSendLink = _ => {};

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
            <Input label={strings.mobile} keyboardType="phone-pad" />
            <Button onPress={_ => this.doSendLink()} title={strings.sendLink} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthForgotPasswordScreen);
