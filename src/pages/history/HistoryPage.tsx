import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TodoListContext} from '../../../App';
import TodoAppBar from '../../components/appBar/todo/TodoAppBar';
import ResumeCard from '../../components/cards/resume/ResumeCard';
import ToDoCardItem from '../../components/cards/todo/ToDoCardItem';
import {TodoPageNavigationProp} from '../../types/pages';
import {TodoItemPropsType} from '../../types/todo';

const HistoryPage = () => {
  const navigation = useNavigation<TodoPageNavigationProp>();
  const {deleteTodo, updateTodo, todo, history} =
    React.useContext(TodoListContext);
  return (
    <View style={styles.container}>
      <TodoAppBar
        label={'History'}
        onCreate={() => {
          navigation.navigate('Form', {});
        }}
      />
      <FlatList
        data={history}
        ListHeaderComponent={() => (
          <ResumeCard todos={todo.length} histories={history.length} />
        )}
        renderItem={({item, index}: TodoItemPropsType) => (
          <ToDoCardItem
            id={item.id}
            status={item.status}
            description={item.description}
            priorityType={item.priorityType}
            title={item.title}
            key={index}
            onCheck={() => {
              updateTodo({...item, status: !item.status});
            }}
            onEdit={() => {
              navigation.navigate('Form', {
                task: item,
              });
            }}
            onDelete={() => {
              deleteTodo(item);
            }}
          />
        )}
      />
    </View>
  );
};

export default HistoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
