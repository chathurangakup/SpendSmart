import React, { ReactNode, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



import { createStyleSheet, useStyles } from 'react-native-unistyles';



export const AppBar = (props: {
  title: ReactNode; navigation: { goBack: () => void; navigate: (arg0: string) => void; }; isShowBack: any;
}) => {

  const { styles } = useStyles(stylesheet);

  const [loaded, setLoaded] = useState(false);




  const _backHandler = () => {
    props.navigation.goBack();
  };


  return (
    <View style={styles.root}>
      <View
        style={[
          props.isShowBack
            ? [{ backgroundColor: 'transparent' }, styles.bckBtnStyles,]
            : { backgroundColor: 'transparent', flex: 1 },
        ]}>
        {props.isShowBack == false ? null : (
          <TouchableOpacity onPress={() => _backHandler()}>
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 5, alignItems: 'center' }}>
        <Text style={styles.titleStyles}>{props.title}</Text>
      </View>
      <View style={{ flex: 1 }}>

      </View>
    </View>
  );
};





const stylesheet = createStyleSheet((theme, rt) => ({
  profileStyle: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleStyles: {
    color: 'black',
    fontSize: 23,
    padding: 20,
    fontWeight: 'bold',
    fontFamily: 'Quicksand-Bold'
  },
  bckBtnStyles: {
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  root: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9999,
    paddingTop: 20
  },
  image: {
    color: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
  },

}))
