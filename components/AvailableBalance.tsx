

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Images from '@/constants/images.d';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface AvailableBalanceProps {
    balance: string;
}

const AvailableBalance: React.FC<AvailableBalanceProps> = ({ balance }) => {
    const { styles } = useStyles(stylesheet);
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Text style={styles.textLarge}>Available Balance</Text>
                <Text style={styles.textMedium}>{balance}</Text>
                <Text style={styles.textSmall}>see details</Text>
            </View>
            <View style={styles.rightSide}>
                <Image source={Images.Visa} style={styles.image1} />
                <Image source={Images.AvailableBalance} style={styles.image2} />
            </View>
        </View>
    );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.dark_grey,
        borderRadius: 20,
        paddingLeft: runtime.screen.width / 22,
        alignItems: 'center',
    },
    leftSide: {
        flex: 1,
        justifyContent: 'center',
    },
    textLarge: {
        fontSize: 13,
        color: theme.colors.white,
        marginBottom: 4,
        fontFamily: 'Montserrat-Light'
    },
    textMedium: {
        fontSize: 28,
        color:  theme.colors.white,
        marginBottom: runtime.screen.width / 22,
        fontFamily: 'Montserrat-Bold'
    },
    textSmall: {
        fontSize: 12,
        color:  theme.colors.white,
        fontFamily: 'Montserrat-SemiBold',

    },
    rightSide: {

        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image1: {
        width: runtime.screen.width / 6,
        height: runtime.screen.height / 15,
        borderRadius: 20,

    },
    image2: {
        width: runtime.screen.width / 3.5,
        height: runtime.screen.height / 10.5,
    },
}));

export default AvailableBalance;
