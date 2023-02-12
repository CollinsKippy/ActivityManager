import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circular from './circular'
import TaskButton from './TaskButton'

const TaskItem = () => {
  return (
    <View>
      <Circular />
      <Text>Task</Text>
      <TaskButton />
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({})