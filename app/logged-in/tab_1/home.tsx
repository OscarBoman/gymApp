import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Calendar from '../../Components/calendar';
import Header from '../../Components/header-home-page';
import WeekleyWorkouts from "../../Components/weekley-workouts";
import NextWorkOut from "../../Components/next-workout";



export default function App () {

    return(
        
        <View style = {styles.container}>
            <Header/>
            <Calendar/>
            <WeekleyWorkouts/>
            <NextWorkOut/>
         <StatusBar style="light" />
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#232A54',
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 10,
    },
    bigText: {
        color:'#fff',
        fontSize:40,
    },
})




        