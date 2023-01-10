import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useTodoList} from './src/hooks/todoHooks';
import {StackNavigation} from './src/navigation/StackNavigation';
import {TodoDatas, TodoSortType} from './src/types/todo';

export const TodoListContext = React.createContext<TodoDatas>({
  todo: [],
  history: [],
  sortBy: TodoSortType.AZ,
  getAllData: () => {},
  createTodo: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
  sortTodo: async () => {},
});

const App = () => {
  const {
    todo,
    history,
    getAllData,
    createTodo,
    updateTodo,
    deleteTodo,
    sortBy,
    sortTodos,
  } = useTodoList();

  return (
    <TodoListContext.Provider
      value={{
        history,
        todo,
        getAllData,
        createTodo,
        deleteTodo,
        updateTodo,
        sortBy,
        sortTodo: sortTodos,
      }}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <StackNavigation />
      </NavigationContainer>
    </TodoListContext.Provider>
  );
};

export default App;
