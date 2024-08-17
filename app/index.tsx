import { router } from 'expo-router';
import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Lottie from '../constants/Lottie';
import { SafeAreaView } from 'react-native-safe-area-context';





const App = () => {
    const { styles } = useStyles(stylesheet);

    const handleDone = () => {
        router.push('/(login)/sign-in')
    }

    const doneButton = (props: any) => {
        return (
            <TouchableOpacity style={styles.doneButtonmStyles} {...props}>
                <Text style={styles.doneBtnTextStyles}>Done</Text>
            </TouchableOpacity>
        )
    }

    const skipButton = (props: any) => {
        return (
            <TouchableOpacity style={styles.skipButtonmStyles} {...props}>
                <Text style={styles.doneBtnTextStyles}>Skip</Text>
            </TouchableOpacity>
        )
    }

    const nextButton = (props: any) => {
        return (
            <TouchableOpacity style={styles.doneButtonmStyles} {...props}>
                <Text style={styles.doneBtnTextStyles}>Next</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            <Onboarding
                DoneButtonComponent={doneButton}
                SkipButtonComponent={skipButton}
                NextButtonComponent={nextButton}
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}
                titleStyles={{ fontSize: 44, fontWeight: "800" }}
                subTitleStyles={{ fontSize: 24 }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (<View style={styles.lottieStyle}>
                            <LottieView source={Lottie.Step1} style={{ flex: 1 }} autoPlay loop />
                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },

                    {
                        backgroundColor: '#fef3c7',
                        image: (<View style={styles.lottieStyle}>
                            <LottieView source={Lottie.Step7} style={{ flex: 1 }} autoPlay loop />
                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (<View style={styles.lottieStyle}>
                            <LottieView source={Lottie.Step8} style={{ flex: 1 }} autoPlay loop />
                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </SafeAreaView>
    )
}

const stylesheet = createStyleSheet((theme,rt)=> ({
    text: {
        flex: 1
    },
    lottieStyle: {
        width: rt.screen.width * 0.9 ,
        height: rt.screen.width,
    
    },
    doneButtonmStyles: {
        paddingLeft: rt.screen.width *0.1,
        paddingTop: rt.screen.width *0.05,
        paddingBottom: rt.screen.width *0.05,
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100

    },
    doneBtnTextStyles: {
        fontSize: 18,
        paddingRight: 30,
        fontFamily: 'Montserrat-BlackItalic'
    },
    skipButtonmStyles: {
        paddingLeft: rt.screen.width *0.1,
        paddingTop: rt.screen.width *0.05,
        paddingBottom: rt.screen.width *0.05,
        backgroundColor: 'white',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100
    }

}))



export default App;