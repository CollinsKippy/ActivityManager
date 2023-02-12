import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Circular = () => {
  return (
    <View style={styles.circular} />
  )
}

export default Circular

const styles = StyleSheet.create({
  circular: {
    borderColor: 'lightblue',
    borderWidth: 2,
    height: 10,
    width: 10,
    borderRadius: 5
  }
})