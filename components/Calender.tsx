import { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment, {Moment} from 'moment'
import Date from './DatePicker'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

const Calendar = ({ onSelectDate, selected }) => {
  const { styles } = useStyles(stylesheet);
  const [dates, setDates] = useState<Moment[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState<string | undefined>(undefined);
  const scrollViewRef = useRef<ScrollView>(null);

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates: Moment[] = []
    for (let i = -10; i < 1; i++) {
      const date: Moment = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  const getCurrentMonth = () => {
    const month = moment(dates[0]).add(scrollPosition / 60, 'days').format('MMMM')
    setCurrentMonth(month)
  }

  useEffect(() => {
    getCurrentMonth()
    console.log(scrollPosition)
  }, [scrollPosition])


  useEffect(() => {
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ animated: true });  // Scroll to the first item
      }
    getDates()
  }, [])

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            ref={scrollViewRef} // Attach the ref to ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
          >
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Calendar

const stylesheet = createStyleSheet((theme, runtime) => ({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: runtime.screen.width/12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',

  },
  scroll: {
    height: runtime.screen.width/3.5,
  },
}));