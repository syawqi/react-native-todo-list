import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {TodoListContext} from '../../App';
import HistoryPage from '../../src/pages/history/HistoryPage';
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
        <HistoryPage />
      </NavigationContainer>
    </TodoListContext.Provider>
  );
};

describe('Testing History Page', () => {
  test('Test History Page Context', async () => {
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
        history: [
          {
            title: 'testing',
            description: 'testing',
            status: true,
            id: '1',
            priorityType: TodoPriorityType.HIGH,
          },
          {
            title: 'testing',
            description: 'testing',
            status: true,
            id: '2',
            priorityType: TodoPriorityType.HIGH,
          },
          {
            title: 'testing',
            description: 'testing',
            status: true,
            id: '3',
            priorityType: TodoPriorityType.HIGH,
          },
        ],
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

    const flatListTodo = getByTestId('flatlist-history');
    expect(flatListTodo).toBeTruthy();

    const resumeCard = getByTestId('resume-card');
    expect(resumeCard).toBeTruthy();
  });
});
