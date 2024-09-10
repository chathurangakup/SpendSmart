import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeStack = () => {
  return (
    <Stack  screenOptions={{
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index"  />
      <Stack.Screen name="budget" options={{headerShown:false}} />

    </Stack>
  ) 
}

export default HomeStack