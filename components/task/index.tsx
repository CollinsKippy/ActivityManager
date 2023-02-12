import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circular from './Circular'
import TaskCompleted from './TaskCompleted'
import { Task } from '../../entities/Task'

type TaskProps = {
  task: Task
}

const TaskItem = ({ task }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      <Circular />
      <Text>{task.name}</Text>
      <TaskCompleted isCompleted={task.isCompleted} />
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  taskContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16
  }
})