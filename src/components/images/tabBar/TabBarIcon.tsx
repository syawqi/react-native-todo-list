import React from 'react';
import {ImageLoadEventData} from 'react-native';
import CommonIcon from '../common/CommonIcon';
import TabBarIconStyles from './TabBarIcon.styles';

const TabBarIcon = ({source}: ImageLoadEventData) => {
  const styles = TabBarIconStyles();

  return (
    <CommonIcon
      source={source}
      style={styles.container}
      resizeMode={'stretch'}
    />
  );
};

export default TabBarIcon;
