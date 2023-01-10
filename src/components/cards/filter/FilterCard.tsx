import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {imagePath} from '../../../assets/assets';
import {TodoSortType} from '../../../types/todo';
import CommonIcon from '../../images/common/CommonIcon';
import FilterCardStyles from './FilterCard.styles';

const FilterCard = ({
  type,
  onChange,
}: {
  type: TodoSortType;
  onChange: (value: TodoSortType) => void;
}) => {
  const styles = FilterCardStyles();

  const [selectionMode, setSelectionMode] = useState<boolean>(false);

  const sortSelection = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => onChange(TodoSortType.AZ)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.ATOZ}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>{TodoSortType.AZ}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => onChange(TodoSortType.ZA)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.ZTOA}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>{TodoSortType.ZA}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => onChange(TodoSortType.HIGH)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.HIGH_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>{TodoSortType.HIGH}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => onChange(TodoSortType.MEDIUM)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.NORMAL_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>
              {TodoSortType.MEDIUM}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => onChange(TodoSortType.LOW)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.LOW_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>{TodoSortType.LOW}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (selectionMode) {
    return sortSelection();
  }

  return (
    <TouchableOpacity
      testID="filter-card"
      style={styles.container}
      onPress={() => {
        setSelectionMode(true);
      }}>
      <View style={styles.centerRow}>
        <CommonIcon
          source={
            type === TodoSortType.AZ
              ? imagePath.ATOZ
              : type === TodoSortType.ZA
              ? imagePath.ZTOA
              : type === TodoSortType.HIGH
              ? imagePath.HIGH_PRIORITY
              : type === TodoSortType.MEDIUM
              ? imagePath.NORMAL_PRIORITY
              : imagePath.LOW_PRIORITY
          }
          resizeMode={'center'}
          style={styles.priorityIcon}
        />
        <Text style={styles.normalPriorityStatus}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterCard;
