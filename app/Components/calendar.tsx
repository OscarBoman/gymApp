import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import BottomStats from '../Components/bottom-stats'
const Calendar = () => {

  const date = new Date();
  let day = date.getDate();
 let [currentMonth, setCurrentMonth] = useState(date.getMonth()); 
 let monthIndex= date.getMonth(); 
  let year = date.getFullYear();
  
  
 
  const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    numberOfDaysInMonth[1] = 29;
  }

  const daysInMonth = [];
  for (let i = 1; i <= numberOfDaysInMonth[currentMonth]; i++) {
    daysInMonth.push(i);
  }

  const changeToPrevMont = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1))
  }
  const changeToNextMont = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1))
  }

  return (
    <View style={styles.container}>
      <View style = {styles.headerContainer}>
        <Pressable style = {styles.otherMonth} onPressIn={changeToPrevMont}>
         <Image  style={styles.img}
                        source={require("../../assets/images/next (3).png")} />
        </Pressable>
        <Text style={styles.header}>{months[currentMonth]}</Text>
        <Pressable style = {styles.otherMonth} onPressIn={changeToNextMont}>
        <Image  style={styles.img1}
                        source={require("../../assets/images/next (3).png")} />
        </Pressable>
      </View>
      <View style={styles.calendarContainer}>
        {daysInMonth.map((d, index) => (
          <View key={index} style={styles.day}>
            <Text style={d === day && currentMonth === monthIndex ? styles.today : styles.dayText}>{d}</Text>
          </View>
        ))}
      </View>
      <BottomStats />
    </View>
  );
};




    


const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'rgba(17, 17, 41, 0.7)',
    borderRadius: 20,
    width: '96%'
  },
  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  otherMonth: {
    backgroundColor: 'rgba(255,255,255,0.17)',
 
    borderRadius: 5,
    width: 45,
    alignItems:'center',
    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  day: {
    width: "14.28%",
    justifyContent: "center",
    alignItems: "center",
  },
  today: {
    color: "#fff",
    backgroundColor: "#4167FF",
    marginTop: 7,
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    borderRadius: 5,
  },
  dayText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    marginTop: 7,
  },
  img:{
    height: 30,
    width: 30,
    transform: 'rotate(180deg)',
  },
  img1: {
    height: 30,
    width: 30,
  },
});

export default Calendar;