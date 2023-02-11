import {Task} from '../entities/Task';
import {TaskActionType} from './TaskActionType';

export interface TaskState {
  tasks: Task[] | undefined;
  isLoading: boolean;
  error: string | undefined;
}

export interface TaskAction {
  type: TaskActionType;
  payload?: Task[] | undefined;
  error: string | undefined;
}

const initialState: TaskState = {
  tasks: [],
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
        error: action.error,
        isLoading: false,
      };

    default:
      return {...state};
  }
};

export default taskReducer;
