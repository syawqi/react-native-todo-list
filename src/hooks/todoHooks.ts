import {useCallback, useState} from 'react';
import {TodoPropsType} from './../types/todo';
import {getSharedData, storeSharedData} from './../utils/shared';

export const useTodoList = () => {
  const [allData, setAllData] = useState<TodoPropsType[]>([]);

  const [todo, setTodo] = useState<TodoPropsType[]>([]);

  const [history, setHistory] = useState<TodoPropsType[]>([]);

  const getDataFromStorage = async () => {
    const shareData = await getSharedData('TODO');

    if (shareData) {
      return JSON.parse(shareData);
    }
  };

  const getAllData = useCallback(async () => {
    var datas: TodoPropsType[] = await getDataFromStorage();

    if (datas) {
      var newTodo = datas.filter(element => {
        return element.status === false;
      });

      var newHistory = datas.filter(element => {
        return element.status === true;
      });

      setTodo(newTodo);
      setHistory(newHistory);
      setAllData(datas);
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

    getAllData();
  };

  return {
    todo,
    history,
    getAllData,
    createTodo,
    deleteTodo,
    updateTodo,
  };
};
