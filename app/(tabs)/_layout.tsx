import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';


// const TabBarIcon = (icon:any, color:string,name: string, focus:boolean) =>{
//     return (
//         <View>
//             <Image

//             />


//         </View>
//     )
// }

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="transaction"
                    options={{
                        title: 'History',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout