import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import Images from '@/constants/images.d'
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import IncomeBlock from '@/components/IncomeBlock'
import IncomeList from '../../data/Income.json'
import ExpenceBlock from '@/components/ExpenceBlock'
import FloatingActionButton from '@/components/FloatingActionButton'

const Home = () => {
  const { styles } = useStyles(stylesheet);
  const data = [{value: 54, color: '#177AD5', text: '54%'},
    {value: 30, color: '#79D2DE', text: '30%'},
    {value: 26, color: '#ED6665', text: '26%'},]
  return (
    <SafeAreaView style={{flex:1,}}>
      <Stack.Screen
        options={{ header: () => <Header source={Images.Profile} title='Hi Uditha' /> }
        }
      />
      <View style={styles.container}>
        <View>
          <View style={styles.subContainer}>
            <View style={styles.incomes}>
              <Text style={styles.incomeText}>My <Text style={{ fontWeight: 700 }}>Income</Text></Text>
              <Text style={styles.incomeAmount}>
                Rs.1200 <Text style={styles.incomeSubAmount}>.00</Text>
              </Text>
            </View>
            <View style={{marginRight: 20}}>
              <PieChart data={data} donut
                showGradient
                semiCircle
                sectionAutoFocus
                focusOnPress
                radius={90}
                innerRadius={60}
                innerCircleColor={'#232850'}
                centerLabelComponent={() => {
                  return (
                    <View>
                      <Text style={styles.pieChartInnerCircle}>
                        74%
                      </Text>
                    </View>
                  )

                }} />
            </View>
          </View>
          <View style={styles.incomeBlock}>
            <IncomeBlock incomeList={IncomeList} />
          </View>
          <View style={styles.incomeBlock}>
          <Text style={styles.incomeText}>My <Text style={{ fontWeight: 700 }}>Expence</Text></Text>
             <ExpenceBlock/>
          </View>
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