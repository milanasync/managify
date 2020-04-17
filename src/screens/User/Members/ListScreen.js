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
import {MemberActions, EventActions} from '../../../redux/actions';

class UserMembersListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: 0,
      name: '',
      mobile: '',
      village: '',
      refresh: false,
      showFilter: false,
    };
  }

  componentDidMount() {}

  showFilter = _ => {
    this.setState({
      showFilter: !this.state.showFilter,
    });
  };

  componentWillUnmount() {
    this.props.selectEventAction({});
  }

  setModalVisble = visible =>
    visible
      ? this.setState({visible})
      : this.setState({
          visible,
          name: '',
          mobile: '',
          village: '',
          id: 0,
        });

  onSubmit = _ => {
    let {name, mobile, village, id} = this.state;
    let member = {name, mobile, village, id};
    console.warn({id});
    if (id == 0) {
      this.props.addMember(member);
    } else {
      this.props.editMember(member);
    }
    this.setModalVisble(false);
    // this.showToast(strings.eventAdded);
  };

  showToast = msg => {
    this.refs.toast.show(msg);
  };

  deleteMember = index => {
    Alert.alert(strings.deleteMember, strings.deleteMemberMsg, [
      {
        text: 'No',
        onPress: _ => null,
      },
      {
        text: 'Yes',
        onPress: _ => {
          this.props.deleteMember(index);
          this.setState({refresh: !this.state.refresh});
        },
      },
    ]);
  };

  editMemberForm = (item, index) => {
    this.setState({...item, id: index + 1});
    this.setModalVisble(true);
  };

  renderMemberForm = _ => (
    <FormModal
      onSubmit={this.onSubmit}
      header={strings.addMember}
      isVisible={this.state.visible}
      onRequestClose={this.setModalVisble}>
      <ScrollView>{this.renderMemberFormInputs()}</ScrollView>
    </FormModal>
  );

  renderMemberFormInputs = _ => {
    return (
      <>
        <Input
          value={this.state.name}
          onChangeText={text => this.setState({name: text})}
          label={strings.name}
        />
        <Input
          value={this.state.mobile}
          onChangeText={text => this.setState({mobile: text})}
          label={strings.mobile}
          keyboardType="phone-pad"
        />
        <Input
          value={this.state.village}
          onChangeText={text => this.setState({village: text})}
          label={strings.village}
        />
      </>
    );
  };

  checkInvited = member => {
    let selectedEvent = this.props.events.selectedEvent;
    let memberInvited = selectedEvent.members.filter(m => m.id === member);
    return memberInvited.length > 0;
  };

  checkGift = member => {
    let selectedEvent = this.props.events.selectedEvent;
    let memberGift = selectedEvent.members_gift.filter(
      m => m.memberId === member,
    );
    console.warn({memberGift});

    return memberGift.length > 0 ? memberGift[0] : false;
  };

  checkReturnGift = member => {
    let selectedEvent = this.props.events.selectedEvent;
    let memberReturnGift = selectedEvent.members_return_gift.filter(
      m => m.memberId === member,
    );

    console.warn({memberReturnGift});
    return memberReturnGift.length > 0 ? memberReturnGift[0] : false;
  };

  renderCard = ({item, index}) => {
    let {theme} = this.props.app;
    let selectedEvent = this.props.events.selectedEvent;
    return (
      <Card>
        <View style={[theme.style.rowCenterBetween, theme.style.wrap]}>
          <View>
            <TypoGraphy>{item.name}</TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {strings.mobile + ': ' + item.mobile}
            </TypoGraphy>
            <TypoGraphy
              fontSize={14}
              isthemeText={false}
              color={Colors.themeColor6}>
              {strings.village + ': ' + item.village}
            </TypoGraphy>
          </View>
          <View>
            <Button
              title={strings.edit}
              onPress={_ => this.editMemberForm(item, index)}
            />
            <Button
              onPress={_ => this.deleteMember(index)}
              backgroundColor={Colors.white}
              color={Colors.themeColor6}
              title={strings.delete}
            />
          </View>
        </View>
        {selectedEvent.id != undefined && (
          <View
            style={[
              theme.style.rowCenterStart,
              theme.style.wrap,
              theme.style.borderTop,
            ]}>
            {!this.checkInvited(item.id) ? (
              <Button
                backgroundColor={Colors.white}
                color={Colors.themeColor6}
                title={strings.invite}
                onPress={_ => {
                  this.props.inviteMember({
                    event: selectedEvent.id,
                    member: item,
                  });
                  this.setState({
                    refresh: !this.state.refresh,
                  });
                }}
              />
            ) : (
              <View>
                <TypoGraphy isBadge color={Colors.themeColor6}>
                  {strings.gift}
                </TypoGraphy>
                {!this.checkGift(item.id) ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {[1, 2, 3, 1, 2, 3, 1, 2, 3].map(i => (
                      <Button
                        onPress={_ => {
                          this.props.addMemberGift({
                            event: selectedEvent.id,
                            data: {
                              memberId: item.id,
                              gift: i,
                            },
                          });
                          this.setState({
                            refresh: !this.state.refresh,
                          });
                        }}
                        backgroundColor={Colors.white}
                        color={Colors.themeColor6}
                        title={strings.gift}
                      />
                    ))}
                  </ScrollView>
                ) : (
                  <Button
                    backgroundColor={Colors.greyColor}
                    color={Colors.black}
                    onPress={_ => null}
                    title={this.checkGift(item.id).gift}
                  />
                )}
                <View style={theme.style.rowCenterBetween}>
                  <TypoGraphy isBadge color={Colors.themeColor6}>
                    {strings.returnGift}
                  </TypoGraphy>
                  <TypoGraphy isBadge color={Colors.themeColor6}>
                    {strings.addGift}
                  </TypoGraphy>
                </View>
                {!this.checkReturnGift(item.id) ? (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {[
                      'Rs 11',
                      'Rs 51',
                      'Rs 101',
                      'Rs 201',
                      'Rs 501',
                      'Rs 1001',
                    ].map(i => (
                      <Button
                        onPress={_ => {
                          this.props.addMemberReturnGift({
                            event: selectedEvent.id,
                            data: {
                              memberId: item.id,
                              returnGift: i,
                            },
                          });
                          this.setState({
                            refresh: !this.state.refresh,
                          });
                        }}
                        backgroundColor={Colors.white}
                        color={Colors.themeColor6}
                        title={i}
                      />
                    ))}
                  </ScrollView>
                ) : (
                  <Button
                    backgroundColor={Colors.greyColor}
                    color={Colors.black}
                    onPress={_ => null}
                    title={this.checkReturnGift(item.id).returnGift}
                  />
                )}
              </View>
            )}
          </View>
        )}
      </Card>
    );
  };
  render() {
    let {list} = this.props.members;
    let {theme} = this.props.app;

    return (
      <>
        {this.renderMemberForm()}
        <View style={theme.style.listContainer}>
          <Toast ref="toast" {...theme.style.toast} />
          <View style={theme.style.rowCenterEnd}>
            <Button
              title={strings.addMember}
              onPress={_ => this.setModalVisble(true)}
            />
            <Button
              color={Colors.themeColor6}
              backgroundColor={Colors.white}
              title={strings.filter}
              onPress={_ => this.showFilter()}
            />
          </View>
          {this.state.showFilter && (
            <Card>
              <TypoGraphy isthemeText={false} color={Colors.themeColor6}>
                {strings.filterDesc}
              </TypoGraphy>
              <Input label={strings.search} />
              <Input label={strings.village} />
              <Button title={strings.filter} onPress={_ => this.showFilter()} />
            </Card>
          )}
          <View style={theme.style.rowCenterEnd}>
            <Badge
              bgColor={Colors.white}
              color={Colors.themeColor5}
              title={`${strings.total}: ${list.length}`}
            />
          </View>
          <FlatList
            ListEmptyComponent={
              <Card center>
                <TypoGraphy isthemeText={false} color={Colors.themeColor6}>
                  {strings.noMembers}
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
    members: state.membersReducers,
    events: state.eventReducers,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addMember: MemberActions.addMemberAction,
      editMember: MemberActions.editMemberAction,
      deleteMember: MemberActions.deleteMemberAction,
      selectEventAction: EventActions.selectEventAction,
      inviteMember: EventActions.inviteMemberAction,
      addMemberGift: EventActions.addMemberGiftAction,
      addMemberReturnGift: EventActions.addMemberReturnGiftAction,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMembersListScreen);
