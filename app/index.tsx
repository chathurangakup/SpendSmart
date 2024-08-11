import { router } from 'expo-router';
import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const App = () => {
  return (
    <View style={{marginTop:20}}>
       <Onboarding
     
  pages={[
    {
      backgroundColor: '#fff',
      image:(<View>
            <Text>hello</Text>
      </View>),
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#fff',
        image:(<View>
              <Text>hello</Text>
        </View>),
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image:(<View>
              <Text>hello</Text>
        </View>),
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
});

export default App;