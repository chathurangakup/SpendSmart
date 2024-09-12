import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Entypo from '@expo/vector-icons/build/Entypo';

const Transaction = () => {
    const { styles } = useStyles(stylesheet);
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

    return (
        <View>
            <View style={{ flex:0.5}}>
                <Calendar
                    // Customize the appearance of the calendar
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        height: 350
                    }}
                    // Specify the current date
                    current={'2012-03-01'}
                    // Callback that gets called when the user selects a day
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    // Mark specific dates as marked
                    markedDates={{
                        '2012-03-01': { selected: true, marked: true, selectedColor: 'blue' },
                        '2012-03-02': { marked: true },
                        '2012-03-03': { selected: true, marked: true, selectedColor: 'blue' }
                    }}
                />
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
    )
}


const stylesheet = createStyleSheet((theme, runtime) => ({
    itemBudget: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        alignSelf:'center',
        height: 80,
        margin:10,
        borderRadius:20,
        
      },
      flatlistStyles: {
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: theme.colors.off_white,
        height: runtime.screen.height,
        marginTop: runtime.screen.height /2.4,
        marginBottom:runtime.screen.height/5,

    
      },
}))

export default Transaction;