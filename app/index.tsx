import { router } from 'expo-router';
import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, Animated, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Lottie from '../constants/Lottie';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const { styles } = useStyles(stylesheet);
  const { width } = Dimensions.get('window');

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // Handle the 'Done' button press here (e.g., navigate to home screen)
      console.log('Done');
      router.push('/(login)/sign-in')
    }
  };


  const images = [
    { lottie: Lottie.Step1, text1: 'Calculate Income', subText: 'Money manage successfully' },
    { lottie: Lottie.Step7, text1: 'money Manager', subText: 'Money manage successfully' },
    { lottie: Lottie.Step8, text1: 'money Manager', subText: 'Money manage successfully' }
  ];




  const renderItem = ({ item }: any) => (
    <View style={styles.lottieStyle}>
      <LottieView source={item.lottie} style={{ flex: 1 }} autoPlay loop />
      <View >
        <Text style={styles.text1} >{item.text1}</Text>
        <Text style={styles.subText}>{item.subText}</Text>
      </View>

    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Budget <Text style={styles.mainSubText}>Buddy</Text> </Text>
      </View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        ref={flatListRef}
      />

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {currentIndex !== images.length - 1 ? (
            <TouchableOpacity onPress={() => flatListRef.current?.scrollToEnd()} style={styles.skipbtnColor}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>

        ) : <View>

        </View>}
        {
          currentIndex === images.length - 1 ?
              <TouchableOpacity onPress={handleNext} style={styles.donebtnColor}>
                <Text style={styles.buttonText}>
                  {'Done'}
                </Text>
              </TouchableOpacity>

            :

              <TouchableOpacity onPress={handleNext} style={styles.nextbtnColor}>
                <Text style={styles.buttonText}>
                  {'Next'}
                </Text>
              </TouchableOpacity>
      
        }


      </View>


    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme, rt) => ({
  text: {
    flex: 1
  },
  lottieStyle: {
    width: rt.screen.width,
    height: rt.screen.width,

  },
  doneButtonmStyles: {
    paddingLeft: rt.screen.width * 0.1,
    paddingTop: rt.screen.width * 0.05,
    paddingBottom: rt.screen.width * 0.05,
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
    paddingLeft: rt.screen.width * 0.1,
    paddingTop: rt.screen.width * 0.05,
    paddingBottom: rt.screen.width * 0.05,
    backgroundColor: 'white',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',

  },
  mainText: {
    fontSize: 22,
    color: theme.colors.black,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  mainSubText: {
    fontSize: 23,
    color: theme.colors.purple,
    fontFamily: 'Montserrat-Bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    alignSelf: 'center',

  },
  text1: {
    fontSize: 23,
    color: theme.colors.purple,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  subText: {
    fontSize: 14,
    color: theme.colors.purple,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  skipbtnColor: {
    backgroundColor: theme.colors.purple,
    width: rt.screen.width * 0.3,
    height: rt.screen.height * 0.07,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 30,
    borderTopEndRadius: 80
  },
  nextbtnColor: {
    backgroundColor: theme.colors.purple,
    width: rt.screen.width * 0.3,
    height: rt.screen.height * 0.07,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 30,
    borderTopLeftRadius: 80
  },
  donebtnColor: {
    backgroundColor: theme.colors.purple,
    width: rt.screen.width * 0.6,
    height: rt.screen.height * 0.07,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 30,
   borderTopLeftRadius: 30,
   borderBottomLeftRadius:30,

  }

}))



export default App;