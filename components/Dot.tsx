import { View, Text } from 'react-native'
import React from 'react'
import { createStyleSheet, useStyles } from 'react-native-unistyles';


interface DotProps {
    backgroundColor: string
}

const Dot : React.FC<DotProps> = ({backgroundColor}) => {
    const { styles } = useStyles(stylesheet);
  return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
        
    </View>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
    container:{
        width: runtime.screen.width/25,
        height: runtime.screen.width/25,
        borderRadius:runtime.screen.width/25,


    }
}))

export default Dot