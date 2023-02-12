import React, { createContext, PropsWithChildren, useReducer, useState } from 'react';
import taskReducer, { initialState, TaskState } from '../reducers/task.reducer';

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
