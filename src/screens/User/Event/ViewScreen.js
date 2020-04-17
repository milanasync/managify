import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions here

class UserEventViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <Text>UserEventViewScreen works!</Text>;
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // add action here
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(UserEventViewScreen);

