import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TextInput, TouchableOpacity, FlatList, Platform } from 'react-native';
import BottomSheet, { BottomSheetModal, BottomSheetView, useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from './CustomButton';
import { RootState } from '@/app/store';
import { changeSlideUpObj } from '@/app/slices/CommonSlice';
import { cardCashData, expenses, incomes } from '@/app/utils/utils';
import TextInputCustom from './TextInputField';




const { width, height } = Dimensions.get('window');

const SideUpPanel = (props: any) => {
  const { slideUpPanelConfig } = useSelector((state: RootState) => state.common);
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '90%', '100%'], [])


  const { styles } = useStyles(stylesheet);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch<any>();

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // State to track the selected id
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Function to handle item selection
  const handleSelect = (id: number) => {
    setSelectedId(id); // Set the clicked item's id as the selected id
  };




  useEffect(() => {
    // Update the document title using the browser API
    if (slideUpPanelConfig?.payload?.visible == true) {
      bottomSheetModalRef.current?.present();
    }

  }, [slideUpPanelConfig]);


  //date picker
  const [date, setDate] = useState(new Date());  // Store selected date
  const [show, setShow] = useState(false);  // Control visibility of DatePicker

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');  // Close the picker on Android after selection
    if (selectedDate) {
      setDate(selectedDate);  // Update the selected date
    }
  };

  const showDatePicker = () => {
    setShow(true);  // Show the DatePicker when the button is pressed
  };
  //date picker end


  // const onPressRight = () => {
  //   if (bottomSheetRef.current) {
  //     bottomSheetRef.current.close();
  //   }

  //   if (slideUpPanelConfig?.payload?.isShowTextInput) {
  //     if (usernameText !== '') {
  //      // dispatch(chnageUsername(usernameText));
  //     }
  //   }

  //   // props.hideSlidUpPanel();
  //   slideUpPanelConfig?.payload?.onPressRight();
  // };

  const okPress = () => {

    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.close();
    }
    dispatch(changeSlideUpObj({
      type: 'HIDE_BOTTOM_ALERT',
    }));

    slideUpPanelConfig?.payload?.okPress();

  };

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const renderItem = ({ item }: { item: { id: string; category: string; color: string } }) => {
    const isSelected = selectedCategory === item.id;

    return (
      <TouchableOpacity
        onPress={() => handleSelectCategory(item.id)}
        style={[styles.item, isSelected && { backgroundColor: item.color }]}  // Highlight if selected
      >
        <View style={[styles.categoryColor, { backgroundColor: item.color }]} />
        <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemCardCash = ({ item }: { item: { id: number; type: string } }) => (
    <TouchableOpacity
      style={[
        styles.itemCardCash,
        selectedId === item.id ? styles.selectedItem : null, // Apply selected style if the item is selected
      ]}
      onPress={() => handleSelect(item.id)}
    >
      <Text style={styles.text}>{item.type}</Text>
    </TouchableOpacity>
  );


  // renders
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={slideUpPanelConfig?.payload?.snapToIndexValue}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <BottomSheetView>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.titleSetle, { color: slideUpPanelConfig?.payload?.titleColor == '' ? '#000' : slideUpPanelConfig?.payload?.titleColor }]}>
            {slideUpPanelConfig?.payload?.title}
          </Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.textName}>Expences Type</Text>
            <FlatList
              data={ slideUpPanelConfig?.payload?.type=='in' ?incomes:expenses}
              renderItem={renderItem}
              numColumns={3}  // Show 3 items per row 
              keyExtractor={(item) => item.id}
              extraData={selectedCategory}
              showsVerticalScrollIndicator={false}  // Re-render when selection changes
            />
          </View>
          <View style={styles.subComponent}>
            <Text style={styles.textName}>Amount</Text>
            <TextInputCustom
              value={'Enter Amount'}
              onChangeText={(value) => { }}
              placeholder="Enter Username"
            />
          </View>


          <View style={styles.subComponent}>
            <Text style={styles.textName}>Select Date</Text>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingRight: 30, paddingLeft: 10, paddingTop: 5, paddingBottom: 10 }}>
              <TouchableOpacity onPress={showDatePicker} style={styles.button}>
                <Text style={styles.buttonText}>Select Date</Text>
              </TouchableOpacity>

              {show && (
                <DateTimePicker
                  value={date}
                  mode="date"  // Date picker mode
                  display="default"
                  onChange={onChange}
                />
              )}

              {/* Display the selected date */}
              <Text>
                {date.toLocaleDateString()}
              </Text>
            </View>
          </View>

          <View style={styles.subComponent}>
            <Text style={styles.textName}>Description</Text>
            <TextInputCustom
              value={'description'}
              onChangeText={(value) => { }}
              placeholder="Enter Username"
            />
          </View>

          <View style={styles.subComponent}>
            <Text style={styles.textName}>Expence method</Text>
            <FlatList
              data={cardCashData}
              renderItem={renderItemCardCash}
              numColumns={2}  // Sh
              keyExtractor={(item) => item.id.toString()}
              extraData={selectedId} // Make FlatList re-render when selectedId changes
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={{ width: 200, padding:10, alignSelf:'center'}}>
            <CustomButton title="Add" onPress={() => { }} buttonStyle={[{ backgroundColor: 'black' }]} disabled={false} />
          </View>

        </View>


      </BottomSheetView>
    </BottomSheetModal>


  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  titleSetle: { fontWeight: 'bold', fontSize: 22, fontFamily: 'Quicksand-Medium' },
  container: {
    marginTop: (runtime.screen.height / 90),
    margin: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: (runtime.screen.width / 100),
    marginVertical: 8,
    marginHorizontal: (runtime.screen.width / 190),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',

  },
  categoryColor: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#fff',  // Highlight the text in white when selected
  },
  button: {
    backgroundColor: '#6200EE',  // Beautiful purple color for the button
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,  // Rounded corners
    elevation: 3,  // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',  // White text color
    fontSize: 12,
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 13,
    color: theme.colors.black,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: runtime.screen.height / 60,
    paddingTop: runtime.screen.height / 150,

  },
  itemCardCash: {
    padding: runtime.screen.width / 60,
    marginVertical: runtime.screen.width / 110,
    marginHorizontal: runtime.screen.width / 110,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: (runtime.screen.width) * 20 / 100,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#add8e6', // Light blue background for selected item
    borderColor: '#007bff', // Blue border for selected item
  },
  text: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
  },
  mainContainer: {
    marginLeft: runtime.screen.height / 60,
  },
  subComponent: {
    marginRight: runtime.screen.height / 60,
  }
}));


export default SideUpPanel;

