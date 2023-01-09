import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TodoListContext} from '../../../App';
import TodoAppBar from '../../components/appBar/todo/TodoAppBar';
import ToDoCardItem from '../../components/cards/ToDoCardItem';
import {TodoPageNavigationProp} from '../../types/pages';
import {TodoItemPropsType} from '../../types/todo';

const TodoPage = () => {
  const navigation = useNavigation<TodoPageNavigationProp>();
  const {getAllData, deleteTodo, updateTodo} =
    React.useContext(TodoListContext);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <TodoListContext.Consumer>
      {consumer => (
        <View style={styles.container}>
          <TodoAppBar
            label={'To Do'}
            onCreate={() => {
              navigation.navigate('Form', {});
            }}
          />
          <FlatList
            data={consumer.todo}
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
      )}
    </TodoListContext.Consumer>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
