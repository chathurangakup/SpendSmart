import { View, Text, ScrollView, Platform } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { router, Stack } from 'expo-router'
import Images from '@/constants/images.d'
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AvailableBalance from '@/components/AvailableBalance'
import BudgetForMonth from '@/components/BudgetForMonth'
import CashComponent from '@/components/CashComponent'
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'
import { showSlideUpPanelIncomeExpence } from '@/app/utils/utils'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'

const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const data = [{ value: 54, color: '#177AD5', text: '54%' },
  { value: 30, color: '#79D2DE', text: '30%' },
  { value: 26, color: '#ED6665', text: '26%' },]


  const incomeExpencesClick = (title: string, type:string) => {
    showSlideUpPanelIncomeExpence(
      title,
      '#000',
      type,
      'If you log out, all of your completed lesson data will be cleared as well.',
      true,
      'Cancel',
      () => {
        try {
          
        } catch (e) {
          console.log(`${Platform.OS} interstitial load error: ${e}`);
        }
      },
      'OK',
      () => {
      },
      'Images.Logout',
    )

  
  }

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Stack.Screen
        options={{ header: () => <View style={{ height: 0, justifyContent: 'center', marginTop: 40 }}><Header source={Images.Profile} title='Hi Uditha' /></View> }}
      />
      <View style={styles.container}>
        <View style={styles.container1Wrap}>
          <AvailableBalance balance='$3,76800.00' />
        </View>
        <View style={styles.container2Wrap}>
          <BudgetForMonth budget={'$20345.00'} month='Octomber' onPressBtn={()=>router.push('/(tabs)/home/budget')} />
        </View>
        <View style={styles.containerCash}>

          <Text style={styles.containerCashText}>Income and Expences for Octomber</Text>
          <View style={styles.cashContainer}>
            <CashComponent backgroundColor={theme.colors.light_green} ComponentIcon={<MaterialCommunityIcons name="home-analytics" size={24} color="white" />} money='$43555.00' moneyStatus='Income' iconBgRoundedColor='#008000' onPressContainer={() => router.push('/(tabs)/home/incomeexpences/1')} onPressPlus={() =>incomeExpencesClick('Income', 'in')} />
            <CashComponent backgroundColor={theme.colors.light_brown} ComponentIcon={<MaterialCommunityIcons name="purse" size={24} color="white" />} money='$43555.00' moneyStatus='Expences' iconBgRoundedColor='#C5705D' onPressContainer={() => router.push('/(tabs)/home/incomeexpences/2')} onPressPlus={() => incomeExpencesClick('Expences', 'ex')} />
          </View>
        </View>
      </View>
      <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>

    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  mainContainer: { flex: 1, backgroundColor: 'white' },
  container: {
    flex: 1,
    paddingTop: runtime.screen.height / 60,
    paddingBottom: runtime.screen.height / 12,
    backgroundColor: theme.colors.white

  },
  container1Wrap: {
    paddingTop: runtime.screen.height / 50,
    paddingLeft: runtime.screen.height / 40,
    paddingRight: runtime.screen.height / 40,
    paddingBottom: runtime.screen.height / 45
  },
  container2Wrap: {
    paddingLeft: runtime.screen.height / 40,
    paddingRight: runtime.screen.height / 40,
  },
  containerCash: {
    paddingTop: runtime.screen.height / 30,
    paddingLeft: runtime.screen.height / 60,
    paddingRight: runtime.screen.height / 40,
    paddingBottom: runtime.screen.height / 45,
    backgroundColor: '#F8EDE3',
    marginTop: runtime.screen.height / 30,
    marginLeft: runtime.screen.height / 30,
    marginRight: runtime.screen.height / 40,
    marginBottom: runtime.screen.height / 45,
    borderRadius: 20
  },
  cashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: runtime.screen.height / 30,

  },
  containerCashText: {
    fontSize: 13,
    color: theme.colors.black,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: runtime.screen.height / 60,
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
  incomeBlock: {
    paddingTop: runtime.screen.height / 60,
  }
}))

export default Home