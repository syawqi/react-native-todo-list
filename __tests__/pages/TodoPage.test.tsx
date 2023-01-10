import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {TodoListContext} from '../../App';
import TodoPage from '../../src/pages/todo/TodoPage';
import {TodoDatas, TodoPriorityType, TodoSortType} from '../../src/types/todo';

jest.fn();

const component = ({todo, history, sortBy}: TodoDatas) => {
  return (
    <TodoListContext.Provider
      value={{
        todo,
        history,
        getAllData: () => null,
        createTodo: () => null,
        updateTodo: () => null,
        deleteTodo: () => null,
        sortTodo: () => null,
        sortBy,
      }}>
      <NavigationContainer>
        <TodoPage />
      </NavigationContainer>
    </TodoListContext.Provider>
  );
};

describe('Testing Todo Page', () => {
  test('Test Todo Page Context', async () => {
    const {getByTestId, queryByTestId} = render(
      component({
        todo: [
          {
            title: 'testing',
            description: 'testing',
            status: false,
            id: '1',
            priorityType: TodoPriorityType.HIGH,
          },
        ],
        history: [],
        sortBy: TodoSortType.AZ,
        getAllData: () => null,
        createTodo: () => null,
        updateTodo: () => null,
        deleteTodo: () => null,
        sortTodo: () => null,
      }),
    );

    const commonAppBar = getByTestId('common-app-bar');
    expect(commonAppBar).toBeTruthy();

    fireEvent.press(commonAppBar);

    const flatListTodo = getByTestId('flatlist-todo');
    expect(flatListTodo).toBeTruthy();

    const filterCard = getByTestId('filter-card');
    expect(filterCard).toBeTruthy();

    const cardTodo = getByTestId('card-todo');
    expect(cardTodo).toBeTruthy();

    const cardExpand = queryByTestId('card-expand');
    expect(cardExpand).toBeFalsy();

    const cardNormal = getByTestId('card-normal');
    expect(cardNormal).toBeTruthy();

    fireEvent.press(cardTodo);

    const cardNewExpand = queryByTestId('card-expand');
    expect(cardNewExpand).toBeTruthy();

    const cardNewNormal = queryByTestId('card-normal');
    expect(cardNewNormal).toBeFalsy();
  });
});
