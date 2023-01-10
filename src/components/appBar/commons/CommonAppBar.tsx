import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {imagePath} from '../../../assets/assets';
import {CommonAppBarTypeProps} from '../../../types/appBar';
import CommonIcon from '../../images/common/CommonIcon';
import CommonAppBarStyles from './CommonAppBar.styles';

const CommonAppBar = ({label, action, canBack}: CommonAppBarTypeProps) => {
  const styles = CommonAppBarStyles();
  const navigation = useNavigation();
  return (
    <View style={styles.container} testID={'common-app-bar'}>
      {canBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          key={0}
          style={styles.mr10}>
          <CommonIcon
            source={imagePath.BACK}
            resizeMode={'cover'}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.label}>{label}</Text>
      {action?.map(res => res)}
    </View>
  );
};

export default CommonAppBar;
