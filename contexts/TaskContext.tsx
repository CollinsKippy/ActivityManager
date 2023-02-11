import React, { createContext, PropsWithChildren, useReducer, useState } from 'react';
import { Task } from '../entities/Task';
import taskReducer, { initialState, TaskState } from '../reducers/taskReducer';

export type TaskProviderProps = PropsWithChildren<{}>

const TaskContext = createContext<{ state: TaskState, dispatch: React.Dispatch<any> }>({ state: initialState, dispatch: () => null });

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
