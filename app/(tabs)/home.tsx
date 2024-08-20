import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import Images from '@/constants/images.d'

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{ header: () => <Header source={Images.Profile} title='Hi Uditha'/> }
        }

      />

      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home