import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href="./Login" asChild>
      <Button title="Login" />
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})