export enum TodoPriorityType {
  'HIGH' = 'High Priority',
  'MEDIUM' = 'Medium Priority',
  'LOW' = 'Low Priority',
}

export type TodoPropsType = {
  id?: string;
  title: string | null | undefined;
  description: string | null | undefined;
  priorityType: TodoPriorityType;
  status: boolean;
  onCheck?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

export type TodoItemPropsType = {
  item: TodoPropsType;
  index: number;
};

export type TodoDatas = {
  todo: TodoPropsType[];
  history: TodoPropsType[];
  getAllData: () => void;
  createTodo: ({title, description, priorityType}: TodoPropsType) => void;
  updateTodo: ({title, description, priorityType, id}: TodoPropsType) => void;
  deleteTodo: ({title, id}: TodoPropsType) => void;
};
