import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  View,
  FlatList,
  Alert,
} from 'react-native';

// toast
import Toast, {DURATION} from 'react-native-easy-toast';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import {
  Card,
  Badge,
  Button,
  TypoGraphy,
  FormModal,
  Input,
} from '../../../components';
import Colors from '../../../theme/Colors';

// strings
import strings from '../../../localizations';

// actions
import {EventActions} from '../../../redux/actions';

class UserEventListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: 0,
      name: '',
      starts: '',
      ends: '',
      contactPerson: '',
      peoples: 0,
      members: [],
      members_gift: [],
      members_return_gift: [],
      refresh: false,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  setModalVisble = visible =>
    visible
      ? this.setState({visible})
      : this.setState({
          visible,
          name: '',
          starts: '',
          ends: '',
          venue: '',
          contactPerson: '',
          peoples: 0,
          members: [],
          members_gift: [],
          members_return_gift: [],
          id: 0,
        });

  onSubmit = _ => {
    let {
      name,
      starts,
      ends,
      contactPerson,
      id,
      venue,
      peoples,
      members,
      members_gift,
      members_return_gift
    } = this.state;
    let event = {
      name,
      starts,
      ends,
      contactPerson,
      venue,
      peoples,
      id,
      members,
      members_gift,
      members_return_gift
    };
    if (id == 0) {
      this.props.addEvent(event);
    } else {
      this.props.editEvent(event);
    }
    this.setModalVisble(false);
    // this.showToast(strings.eventAdded);
  };

  showToast = msg => {
    this.refs.toast.show(msg);
  };

  deleteEvent = index => {
    Alert.alert(strings.deleteEvent, strings.deleteEventMsg, [
      {
        text: 'No',
        onPress: _ => null,
      },
      {
        text: 'Yes',
        onPress: _ => {
          this.props.deleteEvent(index);
          this.setState({refresh: !this.state.refresh});
        },
      },
    ]);
  };

  editEventForm = (item, index) => {
    this.setState({...item, id: index + 1});
    this.setModalVisble(true);
  };

  renderEventForm = _ => (
    <FormModal
      onSubmit={this.onSubmit}
      header={strings.addEvent}
      isVisible={this.state.visible}
      onRequestClose={this.setModalVisble}>
      <ScrollView>{this.renderEventFormInputs()}</ScrollView>
    </FormModal>
  );

  renderEventFormInputs = _ => {
    return (
      <>
        <Input
          value={this.state.name}
          onChangeText={text => this.setState({name: text})}
          label={strings.name}
        />
        <Input
          value={this.state.starts}
          onChangeText={text => this.setState({starts: text})}
          label={strings.starts}
        />
        <Input
          value={this.state.ends}
          onChangeText={text => this.setState({ends: text})}
          label={strings.ends}
        />
        <Input
          value={this.state.venue}
          onChangeText={text => this.setState({venue: text})}
          label={strings.venue}
        />
        <Input
          value={this.state.contactPerson}
          onChangeText={text => this.setState({contactPerson: text})}
          label={strings.contactPerson}
        />
      </>
    );
  };

  renderCard = ({item, index}) => {
    let {theme} = this.props.app;

    return (
      <Card
        onPress={_ => {
          this.props.selectEventAction(item);
          this.props.navigation.navigate('UserMembersStack', {event: item});
        }}>
        <View style={[theme.style.rowCenterBetween, theme.style.wrap]}>
          <View>
            <TypoGraphy>{item.name}</TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {strings.starts + ': ' + item.starts}
            </TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {strings.ends + ': ' + item.ends}
            </TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {strings.peoples + ': ' + item.peoples}
            </TypoGraphy>
          </View>
          <View>
            <Button
              title={strings.edit}
              onPress={_ => this.editEventForm(item, index)}
            />
            <Button
              onPress={_ => this.deleteEvent(index)}
              backgroundColor={Colors.white}
              color={Colors.themeColor6}
              title={strings.delete}
            />
          </View>
        </View>
      </Card>
    );
  };
  render() {
    let {list} = this.props.events;
    let {theme} = this.props.app;

    return (
      <>
        {this.renderEventForm()}
        <View style={theme.style.listContainer}>
          <Toast ref="toast" {...theme.style.toast} />
          <Button
            title={strings.addEvent}
            onPress={_ => this.setModalVisble(true)}
          />
          <FlatList
            ListEmptyComponent={
              <Card center>
                <TypoGraphy isthemeText={false} color={Colors.themeColor6}>
                  {strings.noEvents}
                </TypoGraphy>
              </Card>
            }
            data={list}
            renderItem={this.renderCard}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    app: state.appReducers,
    events: state.eventReducers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEvent: EventActions.addEventAction,
      editEvent: EventActions.editEventAction,
      deleteEvent: EventActions.deleteEventAction,
      selectEventAction: EventActions.selectEventAction,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEventListScreen);
