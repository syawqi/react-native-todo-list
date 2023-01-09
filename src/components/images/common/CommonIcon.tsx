import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import {CommonIconPropTypes} from '../../../types/image';
import CommonIconStyles from './CommonIcon.styles';

const CommonIcon = ({source, style, resizeMode}: CommonIconPropTypes) => {
  const commonStyle = CommonIconStyles();
  const styles: StyleProp<ImageStyle>[] = [];
  styles.push(commonStyle.container);

  if (style) {
    styles.push(style);
  }

  return <Image source={source} style={styles} resizeMode={resizeMode} />;
};

export default CommonIcon;
