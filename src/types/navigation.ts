import {TodoPropsType} from './todo';
export type NavigationParamList = {
  Todo: undefined;
  History: undefined;
  Form: {
    task?: TodoPropsType;
  };
};
