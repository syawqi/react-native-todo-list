import React from 'react';
import {TouchableOpacity} from 'react-native';
import {imagePath} from '../../../assets/assets';
import {TodoAppBarTypeProps} from '../../../types/appBar';
import AppBarIcon from '../../images/appBar/AppBarIcon';
import CommonAppBar from '../commons/CommonAppBar';

const TodoAppBar = ({label, onCreate}: TodoAppBarTypeProps) => {
  return (
    <CommonAppBar
      label={label}
      action={[
        <TouchableOpacity onPress={() => onCreate()} key={0}>
          <AppBarIcon source={imagePath.CREATE_TODO} />
        </TouchableOpacity>,
      ]}
    />
  );
};

export default TodoAppBar;
