import React, {Component, useState} from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';

import {connect} from 'react-redux';

// colors
import Colors from '../../theme/Colors';

// components
import Button from '../form/Button';
import Badge from '../badge/Badge';

const renderTabs = (cardTabs, theme, setActiveTab, activeTab) => {
  return (
    <View style={[theme.style.row, theme.style.selfStart, theme.style.wrap]}>
      {cardTabs.map((cardTab, index) => (
        <Button
          active={activeTab === index}
          color={activeTab === index ? Colors.themeColor : Colors.themeColor6}
          backgroundColor={Colors.white}
          title={cardTab}
          tabBtn
          onPress={_ => setActiveTab(index)}
        />
      ))}
    </View>
  );
};

const renderCardImage = (image, theme) => {
  return <Image source={image} {...theme.style.cardImage} />;
};

const renderBadges = (badges, theme) => {
  return (
    <View style={theme.style.cardBadge}>
      {badges.map((badge, index) => (
        <Badge cardBadge bgColor={Colors.themeColor} title={badge} />
      ))}
    </View>
  );
};

const CardOutLineComponent = ({
  children,
  app,
  center = false,
  cardTabs = [],
  cardTabsContent = [],
  badges = [],
  cardImage = false,
  profileImage = false,
  profileTitle = '',
  profileSubTitle = '',
  onPress= _ => {}
}) => {
  let {theme} = app;
  let cardOutlineStyle = theme.style.cardOutline;
  let cardContent = theme.style.cardContent;
  let centerView = theme.style.centerView;

  if (center) {
    cardOutlineStyle = {...cardOutlineStyle, ...centerView};
  }

  let [activeTab, setActiveTab] = useState(0);
  return (
    <TouchableWithoutFeedback onPress={_=> onPress()}>
      <View style={cardOutlineStyle}>
        {badges.length > 0 && renderBadges(badges, theme)}

        {cardImage && renderCardImage(cardImage, theme)}

        {cardTabs.length > 0
          ? renderTabs(cardTabs, theme, setActiveTab, activeTab)
          : null}

        <View style={cardContent}>
          {cardTabsContent.length > 0 ? cardTabsContent[activeTab] : children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = state => {
  return {
    app: state.appReducers,
  };
};
export default connect(mapStateToProps)(CardOutLineComponent);
