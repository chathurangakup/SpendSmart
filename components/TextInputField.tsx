import React, { FC } from 'react';
import {View, TextInput,StyleSheet,Dimensions, KeyboardTypeOptions} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';


const {height, width} = Dimensions.get('window');

type TextInputCustomProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean,
  keyboardType?:  undefined | KeyboardTypeOptions 
}

const TextInputCustom: FC<TextInputCustomProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType= 'default'
}) => {

  const { styles } = useStyles(stylesheet);
  return (
    <TextInput
      style={styles.input}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'#777'}
      secureTextEntry={secureTextEntry}
    />
  );
};


const stylesheet = createStyleSheet(theme=> ({
  input: {
        borderRadius: 100,
        color: 'black',
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white,
        borderWidth: 0.5,
        borderColor: theme.colors.light_black,
        marginVertical: 10,
        height: 40,
        
  },
}));

export default TextInputCustom;
