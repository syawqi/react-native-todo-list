import React from 'react';
import {Text} from 'react-native';
import {TabBarTypeProps} from '../../../types/tabBar';
import TabBarTextStyles from './TabBarText.styles';

const TabBarText = ({label, active}: TabBarTypeProps) => {
  const styles = TabBarTextStyles();

  return <Text style={active ? styles.active : styles.inactive}>{label}</Text>;
};

export default TabBarText;
