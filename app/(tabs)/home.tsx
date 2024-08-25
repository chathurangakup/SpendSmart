import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import Images from '@/constants/images.d'
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AvailableBalance from '@/components/AvailableBalance'
import BudgetForMonth from '@/components/BudgetForMonth'

const Home = () => {
  const { styles } = useStyles(stylesheet);
  const data = [{value: 54, color: '#177AD5', text: '54%'},
    {value: 30, color: '#79D2DE', text: '30%'},
    {value: 26, color: '#ED6665', text: '26%'},]
  return (
    <SafeAreaView style={{flex:1,}}>
      <Stack.Screen
        options={{ header: () =>  <View style={{ height:0, justifyContent: 'center', marginTop: 40  }}><Header source={Images.Profile} title='Hi Uditha' /></View> }}
      />
      <View style={styles.container}>
        <View style={styles.containerWrap}>
        <AvailableBalance balance='$3,76800.00'/>
        </View>
        <View style={styles.containerWrap}>
          <BudgetForMonth budget={'$20345.00'} month='Octomber'/>
        </View>
      
       
      </View>

    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex:1,
    paddingTop: runtime.screen.height / 60,
    paddingBottom:  runtime.screen.height / 12,
    backgroundColor: theme.colors.white

  },
  containerWrap:{
    padding:20
  },
  incomes: {
    gap: 10
  },
  incomeText: {
    color: theme.colors.black,
    fontSize: 16
  },
  incomeAmount: {
    fontSize: 36,
    fontWeight: 700,
    color: theme.colors.black
  },
  incomeSubAmount: {
    fontSize: 22,
    fontWeight: 400,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  pieChart: {
    color: theme.colors.black
  },
  pieChartInnerCircle: {
    fontSize: 22,
    color: theme.colors.white
  },
  incomeBlock:{
    paddingTop:  runtime.screen.height / 60,
  }
}))

export default Home