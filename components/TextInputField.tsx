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

TextInputCustom.defaultProps = {
  secureTextEntry: false
}
  

const stylesheet = createStyleSheet(theme=> ({
  input: {
        borderRadius: 100,
        color: 'black',
        paddingHorizontal: 20,
        width: width/1.5,
        backgroundColor: theme.colors.primary_light,
        marginVertical: 10,
        height: 40,
        
  },
}));

export default TextInputCustom;
