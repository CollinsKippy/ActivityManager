import {Task} from '../entities/task';

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

export interface TaskAction {
  type: string;
  payload?: Task;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskReducer = (state: TaskState = initialState, action: TaskAction) => {};

export default taskReducer;
