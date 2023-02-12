import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

type IsCompletedProps = {
  isCompleted: boolean
}

const TaskButton = ({ isCompleted }: IsCompletedProps) => {
  const [isDone, selectIsDone] = useState<boolean>(isCompleted);

  return (
    <View>
      <BouncyCheckbox isChecked={isDone} onPress={(isChecked: boolean) => selectIsDone(isChecked)} />
    </View>
  )
}

export default TaskButton

const styles = StyleSheet.create({})