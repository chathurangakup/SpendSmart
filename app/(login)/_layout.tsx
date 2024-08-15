import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LoginLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="sign-in" options={{headerShown:false}} />
      <Stack.Screen name="sign-up" options={{headerShown:false}} />
    </Stack>
  ) 
}

export default LoginLayout