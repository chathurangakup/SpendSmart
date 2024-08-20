import { View, Text, Image, ImageSourcePropType,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStyleSheet, useStyles } from 'react-native-unistyles'


interface CustomHeader {
  source: ImageSourcePropType;
  title: string;
}


const Header: React.FC<CustomHeader> = ({ source, title }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <SafeAreaView style={styles.mainComponanet}>
      <View style={styles.subComponent}>
        <View style={styles.profileStyle}>
          <Image
            source={source}
            style={styles.imageStyle}
          />
          <View style={styles.profileTitles}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.headerSubTitle}>Your Budget</Text>
          </View>
        </View>

        <TouchableOpacity onPress={()=>{}} style={styles.btnWrapper}>
            <Text style={styles.btnText}>My Transaction</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  mainComponanet: {
    flex: 1,
    backgroundColor: theme.colors.headercolor
  },
  subComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: runtime.screen.height / 15
  },
  imageStyle: {
    width: runtime.screen.width / 12,
    height: runtime.screen.width / 12,
  },
  headerTitle: {
    color: theme.colors.white,
    fontSize: 12
  },
  headerSubTitle: {
    color: theme.colors.white,
    fontSize: 12
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  profileTitles: {
    marginLeft: runtime.screen.width / 25,
  },
  btnWrapper:{
    borderColor:theme.colors.borderColors,
    borderWidth: 1,
    padding: runtime.screen.width / 80,
    borderRadius: 10
  },
  btnText:{
    color:theme.colors.white,
    fontSize:12
  }
}));

export default Header