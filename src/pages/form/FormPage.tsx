import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TodoListContext} from '../../../App';
import {imagePath} from '../../assets/assets';
import CommonAppBar from '../../components/appBar/commons/CommonAppBar';
import CommonIcon from '../../components/images/common/CommonIcon';
import {FormPageNavigationProp, FormPageRouteProp} from '../../types/pages';
import {TodoPriorityType} from '../../types/todo';
import {callAlert} from '../../utils/alert';
import FormPageStyles from './FormPage.styles';

const FormPage = () => {
  const navigation = useNavigation<FormPageNavigationProp>();
  const route = useRoute<FormPageRouteProp>();
  const styles = FormPageStyles();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectionMode, setSelectionMode] = useState<boolean>(false);
  const [priorityType, setPriorityType] = useState<TodoPriorityType>(
    TodoPriorityType.MEDIUM,
  );
  const {task} = route.params;

  const {createTodo, updateTodo} = React.useContext(TodoListContext);

  useEffect(() => {
    if (task?.title) {
      setTitle(task.title);
    }
    if (task?.description) {
      setDescription(task.description);
    }
    if (task?.priorityType) {
      setPriorityType(task.priorityType);
    }
  }, [task]);

  const onSave = async () => {
    if (!selectionMode) {
      if (!title) {
        callAlert(
          'Warning!',
          'Title Cannot Empty',
          () => {},
          () => {},
        );
      } else {
        if (task) {
          updateTodo({
            id: task?.id,
            title: title,
            description,
            priorityType,
            status: task.status,
          });
        } else {
          createTodo({
            title: title,
            description,
            priorityType,
            status: false,
          });
        }

        navigation.goBack();
      }
    }
  };

  const prioritySelection = () => {
    return (
      <View style={styles.input}>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => setPriorityType(TodoPriorityType.HIGH)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.HIGH_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>
              {TodoPriorityType.HIGH}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => setPriorityType(TodoPriorityType.MEDIUM)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.NORMAL_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>
              {TodoPriorityType.MEDIUM}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mb}
          onPressIn={() => setPriorityType(TodoPriorityType.LOW)}
          onPressOut={() => setSelectionMode(false)}>
          <View style={styles.centerRow}>
            <CommonIcon
              source={imagePath.LOW_PRIORITY}
              resizeMode={'center'}
              style={styles.priorityIcon}
            />
            <Text style={styles.normalPriorityStatus}>
              {TodoPriorityType.LOW}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <CommonAppBar label={'To Do'} canBack={navigation.canGoBack()} />
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        keyboardType="default"
      />
      {selectionMode ? (
        prioritySelection()
      ) : (
        <TouchableOpacity
          style={styles.input}
          onPress={() => setSelectionMode(true)}>
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
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.button} onPress={() => onSave()}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FormPage;
