import {useCallback, useState} from 'react';
import {TodoPriorityType, TodoPropsType, TodoSortType} from './../types/todo';
import {getSharedData, storeSharedData} from './../utils/shared';

export const useTodoList = () => {
  const [allData, setAllData] = useState<TodoPropsType[]>([]);

  const [todo, setTodo] = useState<TodoPropsType[]>([]);

  const [sortBy, setSortBy] = useState<TodoSortType>(TodoSortType.AZ);

  const [history, setHistory] = useState<TodoPropsType[]>([]);

  const getDataFromStorage = async () => {
    const shareData = await getSharedData('TODO');

    if (shareData) {
      return JSON.parse(shareData);
    }
  };

  const sortTodos = useCallback(
    async (sort: TodoSortType) => {
      let todos: TodoPropsType[] = [];
      todos.push(...todo);

      var high = todos.filter(element => {
        return element.priorityType === TodoPriorityType.HIGH;
      });

      var medium = todos.filter(element => {
        return element.priorityType === TodoPriorityType.MEDIUM;
      });

      var low = todos.filter(element => {
        return element.priorityType === TodoPriorityType.LOW;
      });

      if (sort === TodoSortType.AZ) {
        todos.sort(function (a: TodoPropsType, b: TodoPropsType) {
          if (a && b) {
            if (a.title! < b?.title!) {
              return -1;
            }
            if (a.title! > b.title!) {
              return 1;
            }
          }
          return 0;
        });
      }

      if (sort === TodoSortType.ZA) {
        todos.sort(function (a: TodoPropsType, b: TodoPropsType) {
          if (a && b) {
            if (b.title! < a?.title!) {
              return -1;
            }
            if (b.title! > a.title!) {
              return 1;
            }
          }
          return 0;
        });
      }

      if (sort === TodoSortType.HIGH) {
        todos = [];

        todos.push(...high, ...medium, ...low);
      }

      if (sort === TodoSortType.MEDIUM) {
        todos = [];

        todos.push(...medium, ...high, ...low);
      }

      if (sort === TodoSortType.LOW) {
        todos = [];

        todos.push(...low, ...high, ...medium);
      }

      setTodo(todos);
      setSortBy(sort);
    },
    [todo],
  );

  const getAllData = useCallback(async () => {
    var datas: TodoPropsType[] = await getDataFromStorage();

    if (datas) {
      setAllData(datas);

      var newTodo = datas
        .filter(element => {
          return element.status === false;
        })
        .sort(function (a: TodoPropsType, b: TodoPropsType) {
          if (a && b) {
            if (a.title! < b?.title!) {
              return -1;
            }
            if (a.title! > b.title!) {
              return 1;
            }
          }
          return 0;
        });

      var newHistory = datas
        .filter(element => {
          return element.status === true;
        })
        .sort(function (a: TodoPropsType, b: TodoPropsType) {
          if (a && b) {
            if (a.title! < b?.title!) {
              return -1;
            }
            if (a.title! > b.title!) {
              return 1;
            }
          }
          return 0;
        });

      setTodo(newTodo);
      setHistory(newHistory);
    }
  }, []);

  const createTodo = async ({
    title,
    description,
    priorityType,
  }: TodoPropsType) => {
    const id = new Date().toJSON();
    const todos: TodoPropsType[] = [];
    todos.push(...allData);

    const newData: TodoPropsType = {
      id,
      title,
      description,
      status: false,
      priorityType,
    };

    todos.push(newData);

    await storeSharedData('TODO', JSON.stringify(todos));

    setSortBy(TodoSortType.AZ);

    getAllData();
  };

  const updateTodo = async ({
    id,
    title,
    description,
    priorityType,
    status,
  }: TodoPropsType) => {
    const todos: TodoPropsType[] = [];
    todos.push(...allData);

    var index = todos.findIndex(element => element.title === title);

    if (id) {
      index = todos.findIndex(element => element.id === id);
    }

    const newData: TodoPropsType = {
      id,
      title,
      description,
      status: status,
      priorityType,
    };

    todos[index] = newData;

    await storeSharedData('TODO', JSON.stringify(todos));
    setSortBy(TodoSortType.AZ);
    getAllData();
  };

  const deleteTodo = async ({title, id}: TodoPropsType) => {
    const todos: TodoPropsType[] = [];
    todos.push(...allData);
    var index = todos.findIndex(element => element.title === title);

    if (id) {
      index = todos.findIndex(element => element.id === id);
    }

    if (todos.length > 1) {
      todos.splice(index, 1);
    } else {
      todos.pop();
    }

    await storeSharedData('TODO', JSON.stringify(todos));

    setSortBy(TodoSortType.AZ);
    getAllData();
  };

  return {
    todo,
    history,
    getAllData,
    createTodo,
    deleteTodo,
    updateTodo,
    sortBy,
    sortTodos,
  };
};
