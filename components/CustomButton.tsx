import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';


interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle: any,
  disabled: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle, disabled=false }) => {
  const { styles } = useStyles(stylesheet);
  return(
    <TouchableOpacity style={[styles.button,buttonStyle]} onPress={onPress} disabled={disabled}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}
  


const stylesheet = createStyleSheet(({colors},rt)=> ({
  button: {
    width: '100%',
    height: 40,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
}));



export default CustomButton;
