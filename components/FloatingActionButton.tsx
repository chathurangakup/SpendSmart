import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // You can change the icon set if needed
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface FloatingActionButtonProps {
    onPress: () => void;
  }

const FloatingActionButton : React.FC<FloatingActionButtonProps> = ({ onPress }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <MaterialIcons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  fab: {
    position: 'absolute', // This will position the FAB on the screen
    right: 16,  // Distance from the right edge
    bottom: 16, // Distance from the bottom edge
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6', // Change this color as per your theme
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
}));

export default FloatingActionButton;