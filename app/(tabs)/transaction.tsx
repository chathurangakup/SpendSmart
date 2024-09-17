import Calendar from '@/components/Calender';
import Header from '@/components/Header';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Images from '@/constants/images.d'

const AnimatedTabs = () => {
  const { styles,theme } = useStyles(stylesheet);
  const [activeTab, setActiveTab] = useState(0);
  const translateX = new Animated.Value(0);
  const {width, height} = Dimensions.get('window');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    Animated.spring(translateX, {
      toValue: index === 0 ? 0 : width/2, // Adjust this value based on your layout
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
       <Stack.Screen
        options={{ header: () => <View style={{ height: 0, justifyContent: 'center', marginTop: 40 }}><Header source={Images.Profile} title='Hi Uditha' /></View> }}
      />
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabPress(0)} style={styles.tab}>
          <Text style={activeTab === 0 ? styles.activeTabText : styles.tabText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(1)} style={styles.tab}>
          <Text style={activeTab === 1 ? styles.activeTabText : styles.tabText}>Expenses</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.activeTabIndicator, { transform: [{ translateX }] }]} />
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 0 ? (
          <Text style={styles.contentText}>Income Content</Text>
        ) : (
          <Text style={styles.contentText}>Expenses Content</Text>
        )}
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    paddingTop: runtime.screen.width/20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingVertical: runtime.screen.width/40,
    paddingHorizontal: runtime.screen.width/20,
  },
  tab: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    flex:1,
    position: 'absolute',
    bottom: 0,
    width: runtime.screen.width/2,
    height: 4,
    backgroundColor: '#4CAF50', // Color for the active tab underline
    borderRadius: 2,

  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
}));

export default AnimatedTabs;
