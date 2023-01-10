import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TodoListContext} from '../../../App';
import TodoAppBar from '../../components/appBar/todo/TodoAppBar';
import FilterCard from '../../components/cards/filter/FilterCard';
import ToDoCardItem from '../../components/cards/todo/ToDoCardItem';
import {TodoPageNavigationProp} from '../../types/pages';
import {TodoItemPropsType} from '../../types/todo';

const TodoPage = () => {
  const navigation = useNavigation<TodoPageNavigationProp>();
  const {todo, getAllData, deleteTodo, updateTodo, sortBy, sortTodo} =
    React.useContext(TodoListContext);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <View style={styles.container}>
      <TodoAppBar
        label={'To Do'}
        onCreate={() => {
          navigation.navigate('Form', {});
        }}
      />
      <FlatList
        testID="flatlist-todo"
        data={todo}
        ListHeaderComponent={() => {
          return (
            <FilterCard
              onChange={value => {
                sortTodo(value);
              }}
              type={sortBy}
            />
          );
        }}
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
            onDelete={() => {
              deleteTodo(item);
            }}
            onEdit={() => {
              navigation.navigate('Form', {
                task: item,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
