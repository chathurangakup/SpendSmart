import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface BudgetForMonthProps {
    budget: string;
    month: string
    onPressBtn: Function
}

const BudgetForMonth : React.FC<BudgetForMonthProps> = ({budget,month,onPressBtn}) => {
  const { styles } = useStyles(stylesheet);
  return (
    <TouchableOpacity onPress={()=>onPressBtn()}>
  <View  style={styles.container}>
     
     <View>
           <Text style={styles.text1Style}>
               Budget for <Text style={styles.text12Style}>{month}</Text>
              
           </Text>
           <Text style={styles.text2Style}>Money Available</Text>
     </View>
     <View>
       <Text style={styles.budgetStyle}>{budget}</Text>
     </View>
   </View>
    </TouchableOpacity>
  
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.light_blue,
        borderRadius: 20,
        paddingLeft: runtime.screen.width / 22,
        alignItems: 'center',
        justifyContent:'space-between',
        padding:15
        
    },
    budgetStyle:{
        fontSize: 20,
        color:  theme.colors.white,
        fontFamily: 'Montserrat-SemiBold',
    },
    text1Style:{
        fontSize: 13,
        color:  theme.colors.white,
        fontFamily: 'Montserrat-SemiBold',
    },
    text12Style:{
        fontSize: 13,
        color:  theme.colors.white,
        fontFamily: 'Montserrat-SemiBold',
    },
    text2Style:{
        fontSize: 13,
        color:  theme.colors.white,
        fontFamily: 'Montserrat-Italic',
    }
}))

export default BudgetForMonth;