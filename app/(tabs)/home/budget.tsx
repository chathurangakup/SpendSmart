import { View, Text, FlatList, Animated } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

import { AppBar } from '@/components/AppBar';
import Dot from '@/components/Dot';
import Entypo from '@expo/vector-icons/build/Entypo';
import { expenses } from '@/app/utils/utils';



const Budget = () => {
  const { styles } = useStyles(stylesheet);
  const data = [{ value: 54, color: '#177AD5', text: '54%' },
  { value: 30, color: '#79D2DE', text: '30%' },
  { value: 26, color: '#ED6665', text: '26%' },]

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, 10],
    outputRange: ['0%', '100%'],
  });


  const dataList = [
    { "id": "1", "category": "Housing", "color": "#FF6347", "date": "10 jan 2010", "price": '$5656', "status": 'cash' },          // Tomato
    { "id": "2", "category": "Utilities", "color": "#4682B4", "date": "10 jan 2010", "price": '$5656', "status": 'cash' },        // Steel Blue
    { "id": "3", "category": "Food", "color": "#FFD700", "date": "10 jan 2010", "price": '$5656', "status": 'cash' },             // Gold
    { "id": "4", "category": "Transportation", "color": "#32CD32", "date": "10 jan 2010", "price": '$5656', "status": 'cash' },   // Lime Green
    { "id": "5", "category": "Health and Insurance", "color": "#8A2BE2", "date": "10 jan 2010", "price": '$5656', "status": 'cash' }, // Blue Violet
    { "id": "6", "category": "Personal Care and Household Supplies", "color": "#FF69B4", "date": "10 jan 2010", "price": '$5656', "status": 'cash' }, // Hot Pink
    { "id": "7", "category": "Savings and Debt Payments", "color": "#20B2AA", "date": "10 jan 2010", "price": '$5656', "status": 'cash' }, // Light Sea Green
    { "id": "8", "category": "Entertainment and Miscellaneous", "color": "#FF4500", "date": "10 jan 2010", "price": '$5656', "status": 'cash' }, // Orange Red
    { "id": "9", "category": "Others", "color": "#FF0000", "date": "10 jan 2010", "price": '$5656', "status": 'cash' }
  ];


  const renderProgressBar = () => {
    return (
      <View>
        <View style={styles.InprogressAnimated}>
          <Animated.View
            style={[styles.animatedbarStyle, { width: progressAnim }]}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        isShowBack={true}
        title={'Budget'}
      />
      <View style={styles.pieChartContainer}>
        <View style={{ flex: 1.2, height: 200 }}>
          <View style={styles.item}>
            <Text style={styles.textBudget}>{'Your Budget'}</Text>
            <View style={{ flex: 1 }}>
              <Dot backgroundColor={'#177AD5'} />
            </View>
          </View>
          <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.category}</Text>
                <View style={{ flex: 1 }}>
                  <Dot backgroundColor={item.color} />
                </View>

              </View>
            )}
          />
        </View>
        <View style={{ flex: 2, padding: 10 }}>
          <PieChart data={data} donut
            showGradient
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
      <View style={styles.secondMainComp}>
        <View style={styles.progressBartext}>
          <Text style={styles.budgetForMonth}>Budget for Octomber</Text>
          <Text style={styles.budgetForMoney}>$2457</Text>
        </View>
        <View style={styles.progressbarStyle}>
          {renderProgressBar()}
        </View>
        <View style={styles.flatlistStyles}>
          <FlatList
            data={dataList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemBudget}>
                <View style={{ width: 60, height:60,backgroundColor:'red', padding:10,borderRadius:10, alignItems:'center', margin:10, justifyContent:'center' }}>
                  <Entypo name="home" size={24} color="black" />
                </View>
                <View style={{ flex: 1, paddingTop: 20 }}>
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </View>
                <View style={{ flex: 0.5,paddingTop: 20 }}>
                  <Text>{item.price}</Text>
                  <Text>{item.status}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  mainContainer: {
    flex: 1, backgroundColor: theme.colors.white,
  },
  pieChart: {
    color: theme.colors.black
  },
  pieChartInnerCircle: {
    fontSize: 22,
    color: theme.colors.white
  },
  pieChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: runtime.screen.height / 13,
    paddingLeft: runtime.screen.height / 25,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    paddingRight: 10,
    flex: 3,
    color: theme.colors.black,
    fontFamily: 'Montserrat-Italic',
  },
  textBudget: {
    paddingRight: 10,
    flex: 3,
    fontSize: 13,
    color: theme.colors.black,
    fontFamily: 'Montserrat-SemiBold',
  },
  secondMainComp: {
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: theme.colors.dark_brown_grey,
    height: runtime.screen.height
  },
  progressBartext: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  budgetForMonth: {
    fontSize: 13,
    color: theme.colors.white,
    fontFamily: 'Montserrat-Bold',
    paddingTop: runtime.screen.height / 25,
    paddingLeft: runtime.screen.height / 30,

  },
  budgetForMoney: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: 'Montserrat-Bold',
    paddingTop: runtime.screen.height / 40,
    paddingRight: runtime.screen.height / 30,
    paddingBottom: runtime.screen.height / 50,
  },
  InprogressAnimated: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: theme.colors.yellow,

  },
  animatedbarStyle: {
    height: 6,
    borderRadius: 20,
    backgroundColor: theme.colors.dark_grey,
  },
  progressbarStyle: {
    paddingLeft: runtime.screen.width / 15,
    paddingRight: runtime.screen.width / 15,
  },
  flatlistStyles: {
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: theme.colors.off_white,
    height: runtime.screen.height,
    marginTop: runtime.screen.height / 30,
    marginBottom:runtime.screen.height/5,
    flex:1,

  },
  itemBudget: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    alignSelf:'center',
    height: 80,
    margin:10,
    borderRadius:20,
    
  }

}))

export default Budget