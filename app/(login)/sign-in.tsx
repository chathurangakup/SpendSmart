import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title='Click me' onPress={()=> router.push('/(tabs)/home')}/>
    </View>
  )
}

export default SignIn