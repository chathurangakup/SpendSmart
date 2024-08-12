import { Stack } from 'expo-router/stack';

export default function Layout() {
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