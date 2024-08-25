import { View, Text } from 'react-native'
import React from 'react'
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/build/AntDesign';

interface CashComponentProps {
    backgroundColor: string,
    ComponentIcon: any,
    money: string,
    moneyStatus: string
}

const CashComponent: React.FC<CashComponentProps> = ({ backgroundColor, ComponentIcon, money,moneyStatus }) => {
    const { styles } = useStyles(stylesheet);
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View style={styles.headerContainer}>
                <View style={styles.iconBgRounded}>
                    {ComponentIcon}
                </View>
                <View style={styles.iconRight}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                </View>
            </View>

            <View>
                <Text>{money}</Text>
                <Text>{moneyStatus}</Text>
            </View>

        </View>
    )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
    container: {
        borderRadius: 20,
        paddingLeft: runtime.screen.width / 22,
        padding: 15,
        width: runtime.screen.width/2.5,
        height: runtime.screen.height/5.5,
    },
    iconBgRounded: {
        borderRadius: 30,
        width: 40,
        height: 40,
        backgroundColor: '#008000',
        padding: 8
    },
    iconRight:{
        padding:8
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        flex:1
    }
}))

export default CashComponent