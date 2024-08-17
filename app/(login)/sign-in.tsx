import { View, Text, Button, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import { AppBar } from '@/components/AppBar'
import LottieView from 'lottie-react-native'
import Lottie from '@/constants/Lottie';
import { SafeAreaView } from 'react-native-safe-area-context'


import TextInputCustom from '@/components/TextInputField'
import CustomButton from '@/components/CustomButton'
import Images from '@/constants/images.d'
import { lightTheme } from '@/constants/thems'



const SignIn = (props: any) => {

  const [username, setUsername] = useState('');
  const [isErrorUserName, setIsErrorUserName] = useState(false);

  // const { loading, errorMessage } = useSelector((state: RootState) => state.login);
  //  dispatch(  changeLoadingState())

  const clickLogin = () => {
    if (username !== '' && isErrorUserName == false) {
      // dispatch(chnageUsername(username));
      // dispatch(changeIsLogin(true));
    }

    router.push('/(tabs)/home')
  };

  const changeUserName = (value: string) => {
    if (value == '') {
      setUsername(value)
      setIsErrorUserName(true)
    } else {
      setUsername(value)
      setIsErrorUserName(false);
    }
  }

  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        navigation={props.navigation}
        isShowBack={false}
        title={'Login'}
      />
      <ImageBackground source={Images.LoginBg} style={styles.bgImgStyle}>

        <View style={{ height: '100%', marginTop: '20%' }}>
          <LottieView source={Lottie.TeachingGirl} style={{ flex: 1 }} autoPlay loop />
          <Text style={{ color: 'black', textAlign: 'center', paddingTop: 10, fontFamily: 'Quicksand-Medium' }}>Please enter your username here.</Text>
          <View style={styles.textInputStyles}>
            <TextInputCustom
              value={username}
              onChangeText={(value) => changeUserName(value)}
              placeholder="Enter Username"
            />
            {/* {isErrorUserName ? null : <Text style={{ color: 'red', alignSelf: 'flex-start', paddingLeft: width / 6, paddingBottom: 20 }}>* Please enter username</Text>
                        } */}

            <View style={{ width: 200, paddingTop: 100 }}>
              <CustomButton title="Login" onPress={() => clickLogin()} buttonStyle={[{ backgroundColor: isErrorUserName ? '#777' : 'black' }]} disabled={isErrorUserName} />
            </View>
          </View>
        </View>
      </ImageBackground>

    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet(({colors}, rt) => ({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: rt.screen.width,
    height: (rt.screen.height) / 2,
    backgroundColor: lightTheme.colors.headercolor
  },
  textHeader: {
    fontSize: 40,
    color: 'black',

  },
  textOr: {
    fontSize: 20,
    color: 'black',

    paddingTop: 15
  },
  textInputStyles: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: (rt.screen.height * 2) / 100
  },
  bgImgStyle: { width: '100%', resizeMode: 'cover', backgroundColor: 'black', justifyContent: 'center', }

}))

export default SignIn