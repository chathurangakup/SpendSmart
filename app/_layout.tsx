import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import '@/constants/unistyles';


export default function RootLayout() {


    SplashScreen.preventAutoHideAsync()

    const [fontsLoaded, error] = useFonts({
        'Montserrat-Black' : require('../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic' : require('../assets/fonts/Montserrat-BlackItalic.ttf'),
        'Montserrat-Bold' : require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Italic' : require('../assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light' : require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-LightItalic' : require('../assets/fonts/Montserrat-LightItalic.ttf'),
        'Montserrat-Medium' : require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic' : require('../assets/fonts/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular' : require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold' : require('../assets/fonts/Montserrat-SemiBold.ttf'),
    })


    useEffect(()=>{
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    },[fontsLoaded, error])


    if(!fontsLoaded && !error) return null;

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name='index'
                options={{
                    headerShown: false
                }}></Stack.Screen>
            <Stack.Screen name='(login)'
                options={{
                    headerShown: false
                }}></Stack.Screen>
            <Stack.Screen name='(tabs)'
                options={{
                    headerShown: false
                }}>

            </Stack.Screen>

        </Stack>

    )

}