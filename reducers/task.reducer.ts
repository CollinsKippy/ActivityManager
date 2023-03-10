import {Task} from '../entities/Task';
import {TaskActionType} from './task.actions';

export interface TaskState {
  tasks: Task[] | undefined;
  isLoading: boolean;
  error: string | undefined;
}

export interface TaskAction {
  type: TaskActionType;
  payload?: any;
}

export const initialState: TaskState = {
  tasks: [
    {id: 1, name: 'Buy Milk', isCompleted: false},
    {id: 2, name: 'Exercise', isCompleted: false},
  ],
  isLoading: false,
  error: undefined,
};

const taskReducer = (
  state: TaskState = initialState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case TaskActionType.LoadTask:
      return {
        ...state,
        isLoading: true,
      };

    case TaskActionType.LoadTaskSuccess:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
      };

    case TaskActionType.LoadTaskFailed:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return {...state};
  }
};

export default taskReducer;
