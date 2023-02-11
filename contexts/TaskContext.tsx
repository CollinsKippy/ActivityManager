import React, { createContext, PropsWithChildren, useState } from 'react';
import { Task } from '../entities/task';

export type TaskProviderProps = PropsWithChildren<{}>

const TaskContext = createContext({});

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{
      tasks: tasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext