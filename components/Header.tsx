import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

const Header = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <SafeAreaView style={styles.mainComponanet}>
        <View style={styles.subComponent}>
            <Image
                source={{uri:''}}
            />
        <Text>Header</Text>
        </View>
     
    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet(theme=> ({
    mainComponanet: {
         flex:1,
         backgroundColor: theme.colors.disable_text_dark
          
    },
    subComponent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        height:70
    }
  }));

export default Header