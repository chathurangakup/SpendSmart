import { View, Text, ListRenderItem, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { IncomeTypes } from '@/types/incomeTypes'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import { Feather } from '@expo/vector-icons'

const IncomeBlock = ({ incomeList }: { incomeList: IncomeTypes[] }) => {
    const { styles } = useStyles(stylesheet);

    const renderItems: ListRenderItem<Partial<IncomeTypes>> = ({ item, index }: any) => {
        if (index == 0) {
            return (
                <TouchableOpacity>
                    <View style={{ flex: 1, borderWidth: 1, borderStyle: 'dashed', borderRadius: 10, marginRight:10,padding:20, alignContent:'center',alignItems:'center', justifyContent:'center' }}>
                        <Feather name="plus" size={22} />
                    </View>
                </TouchableOpacity>
            )
        }

        let amountData: string[] | undefined = item.amount.split('.');
        return (
            <View style={styles.expenceBlock}>
                <Text style={styles.expenceBoxText1}>{item.name}</Text>
                <Text style={styles.expenceBoxText1}>${amountData?.length ? amountData[0]: ''}.<Text style={styles.expenceBoxText2}>{amountData?.length ? amountData[1]: ''}</Text></Text>
                <Text>{item.name}</Text>
            </View>
        )
    }

    const staticItem = [{name: "Add Items"}]

    return (
        <View style={{paddingHorizontal:20}}>
            <FlatList data={staticItem.concat(incomeList)} renderItem={renderItems} horizontal />
        </View>
    )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
    expenceBlock: {
        gap: 8,
        backgroundColor: theme.colors.headercolor,
        width: 100,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        borderRadius: 15,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    expenceBoxText1: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    expenceBoxText2: {
        fontSize: 12,
        fontWeight: '400'
    }
}))

export default IncomeBlock