import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/build/AntDesign';

interface CashComponentProps {
    backgroundColor: string,
    ComponentIcon: any,
    money: string,
    moneyStatus: string,
    iconBgRoundedColor: string,
    onPressContainer: Function,
    onPressPlus: Function
}

const CashComponent: React.FC<CashComponentProps> = ({ backgroundColor, ComponentIcon, money,moneyStatus,iconBgRoundedColor, onPressContainer,onPressPlus }) => {
    const { styles } = useStyles(stylesheet);
    return (
        <TouchableOpacity onPress={()=>onPressContainer()}>
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.headerContainer}>
                <View style={[styles.iconBgRounded, {backgroundColor: iconBgRoundedColor}]}>
                    {ComponentIcon}
                </View>
                <View style={styles.iconRight}>
                    <TouchableOpacity onPress={()=>onPressPlus()}>
                    <AntDesign name="pluscircle" size={30} color="black"  />
                    </TouchableOpacity>
                 
                </View>
            </View>

            <View>
                <Text style={styles.moneyStyle}>{money}</Text>
                <Text style={styles.moneyStatusStyle}>{moneyStatus}</Text>
            </View>

        </View>
        </TouchableOpacity>
    )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
    container: {
        borderRadius: 20,
        paddingLeft: runtime.screen.width / 22,
        padding: 15,
        width: runtime.screen.width/2.7,
        height: runtime.screen.height/5.5,

    },
    iconBgRounded: {
        borderRadius: 30,
        width: runtime.screen.width/10,
        height: runtime.screen.width/10,
        padding: runtime.screen.width/55,
    },
    iconRight:{
        padding:runtime.screen.width/55,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        flex:1
    },
    moneyStyle:{
        fontSize: 15,
        color:  theme.colors.black,
        fontFamily: 'Montserrat-SemiBold',
    },
    moneyStatusStyle:{
        fontSize: 13,
        color:  theme.colors.black,
        fontFamily: 'Montserrat-Italic',
    }
}))

export default CashComponent