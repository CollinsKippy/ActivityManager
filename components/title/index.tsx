import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Activity Manager</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  titleContainer: {
    margin: 16,
    marginTop: 32
  },
  title: {
    color: 'orange',
    fontSize: 24,
    fontWeight: '500'
  },
})