import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import Images from '@/constants/images.d';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';


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
            <MaterialIcons name="navigate-next" size={24} color="black" />
          </View>
        </View>

        <TouchableOpacity onPress={() => { }}>
          <Image style={styles.imageStyleNotification}
            source={Images.NotificationOn} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, runtime) => ({
  mainComponanet: {
    backgroundColor: theme.colors.white,

  },
  subComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: runtime.screen.height / 15,
    
  },
  imageStyle: {
    width: runtime.screen.width / 12,
    height: runtime.screen.width / 12,
  },
  imageStyleNotification: {
    width: runtime.screen.width / 17,
    height: runtime.screen.height / 35,
  },
  headerTitle: {
    color: theme.colors.black,
    fontSize: 15,
    fontFamily: 'Montserrat-MediumItalic'

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
    flexDirection: 'row',
    fontFamily: 'Montserrat-MediumItalic'
  },

  btnText: {
    color: theme.colors.white,
    fontSize: 12
  }
}));

export default Header