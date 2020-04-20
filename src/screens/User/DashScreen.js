import React, {Component} from 'react';
import {StatusBar, StyleSheet, ScrollView, Image, View} from 'react-native';

// toast
import Toast, {DURATION} from 'react-native-easy-toast';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import {Card, Badge, Button, TypoGraphy} from '../../components';
import Colors from '../../theme/Colors';

// strings
import strings from '../../localizations';

class UserDashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refersh: false,
    };
  }

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        refersh: !this.state.refersh,
      });
    });
  }

  componentWillUnmount() {}

  render() {
    let {theme} = this.props.app;
    let {list} = this.props.events;
    let membersList = this.props.members.list;
    return (
      <>
        <StatusBar {...theme.statusBarProps} />
        <ScrollView style={{backgroundColor: Colors.white}}>
          <Card onPress={_ => this.props.navigation.navigate('EventsStack')}>
            <View style={[theme.style.rowCenterBetween, theme.style.wrap]}>
              <TypoGraphy>{strings.events}</TypoGraphy>
              <View>
                <Badge
                  bgColor={Colors.themeColor}
                  title={strings.totalEvents + ': ' + list.length}
                />
              </View>
            </View>
          </Card>

          <Card
            onPress={_ => this.props.navigation.navigate('UserMembersStack')}>
            <View style={[theme.style.rowCenterBetween, theme.style.wrap]}>
              <TypoGraphy>{strings.peoples}</TypoGraphy>
              <View>
                <Badge
                  bgColor={Colors.themeColor}
                  title={strings.total + ': ' + membersList.length}
                />
              </View>
            </View>
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
    events: state.eventReducers,
    members: state.membersReducers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // add action here
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(UserDashScreen);
