import { Text, View, StyleSheet,TextInput, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function App () {

    return(
       <View style = {styles.container}>
               <Text style = {styles.bigText}>Settings</Text>
               <StatusBar style="light" />
              </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#14182F',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    bigText: {
        color:'#fff',
        fontSize:40,
    }
})