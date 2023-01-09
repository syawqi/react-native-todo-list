import React from 'react';
import {ImageLoadEventData} from 'react-native';
import CommonIcon from '../common/CommonIcon';
import AppBarIconStyles from './AppBarIcon.styles';

const AppBarIcon = ({source}: ImageLoadEventData) => {
  const styles = AppBarIconStyles();

  return (
    <CommonIcon
      source={source}
      style={styles.container}
      resizeMode={'stretch'}
    />
  );
};

export default AppBarIcon;
