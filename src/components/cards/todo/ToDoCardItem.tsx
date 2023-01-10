import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {imagePath} from '../../../assets/assets';
import {TodoPriorityType, TodoPropsType} from '../../../types/todo';
import CommonIcon from '../../images/common/CommonIcon';
import ToDoCardItemStyles from './ToDoCardItem.styles';

const ToDoCardItem = ({
  title,
  status = false,
  description,
  priorityType,
  onCheck,
  onDelete,
  onEdit,
}: TodoPropsType) => {
  const styles = ToDoCardItemStyles(priorityType);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [expanded, setExpanded] = useState(false);
  const [check, setCheck] = useState(status);

  const [visible, setVisible] = useState(true);

  const setView = () => {
    setExpanded(!expanded);
  };

  const setStatus = () => {
    setCheck(!check);
  };

  const deleteTask = () => {
    if (onDelete) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onDelete();
      });
      // setCheck(!check);
    }
  };

  useEffect(() => {
    if (check !== status) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        if (onCheck) {
          onCheck();
        }
      });
    }
  }, [check, fadeAnim, onCheck, status]);

  const expandedView = () => {
    return (
      <View testID="card-expand">
        <View style={[styles.centerTopRow, styles.p40]}>
          <View style={styles.childNormalContainer}>
            <Text style={styles.normalPriorityTitle}>{title}</Text>
            <View style={styles.centerRow}>
              <CommonIcon
                source={
                  priorityType === TodoPriorityType.HIGH
                    ? imagePath.HIGH_PRIORITY
                    : priorityType === TodoPriorityType.MEDIUM
                    ? imagePath.NORMAL_PRIORITY
                    : imagePath.LOW_PRIORITY
                }
                resizeMode={'center'}
                style={styles.priorityIcon}
              />
              <Text style={styles.normalPriorityStatus}>{priorityType}</Text>
            </View>
            <Text style={styles.descriptionText}>
              {description || 'No Description'}
            </Text>
            {!status && (
              <View style={styles.centerRow}>
                <TouchableOpacity
                  onPress={() => {
                    if (onCheck) {
                      onCheck();
                    }
                  }}>
                  <Text style={styles.doneText}>Mark as Done</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => deleteTask()} style={styles.mr10}>
            <CommonIcon
              source={imagePath.DELETE}
              resizeMode={'center'}
              style={styles.editorIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (onEdit) {
                onEdit();
              }
            }}>
            <CommonIcon
              source={imagePath.EDIT}
              resizeMode={'center'}
              style={styles.editorIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    );
  };

  const normalView = () => {
    return (
      <View style={styles.normalContainer} testID="card-normal">
        <View style={styles.verticalLine} />
        <View style={[styles.centerRow, styles.p40]}>
          <View style={styles.childNormalContainer}>
            <Text style={styles.normalPriorityTitle}>{title}</Text>
            <View style={styles.centerRow}>
              <CommonIcon
                source={
                  priorityType === TodoPriorityType.HIGH
                    ? imagePath.HIGH_PRIORITY
                    : priorityType === TodoPriorityType.MEDIUM
                    ? imagePath.NORMAL_PRIORITY
                    : imagePath.LOW_PRIORITY
                }
                resizeMode={'center'}
                style={styles.priorityIcon}
              />
              <Text style={styles.normalPriorityStatus}>{priorityType}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setStatus()}>
            <CommonIcon
              source={check ? imagePath.CHECK : imagePath.UNCHECK}
              resizeMode={'center'}
              style={styles.checkStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setView()}
        testID="card-todo">
        {expanded ? expandedView() : normalView()}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ToDoCardItem;
