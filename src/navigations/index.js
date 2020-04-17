import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import actions here
import {AppActions} from '../redux/actions';

// import navigations
import AppStack from './AppStack';

// global styles
import {statusBar, appStyle, drawer, drawerItemsStyle} from '../theme/default';

const App = ({appAction}) => {
  appAction({
    statusBarProps: statusBar,
    style: appStyle,
    drawer,
    drawerItemsStyle,
  });

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      appAction: AppActions.appAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);
