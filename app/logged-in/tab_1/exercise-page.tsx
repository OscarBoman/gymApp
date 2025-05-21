import { View, Text, StyleSheet, ScrollView } from "react-native";
import TestView from '../../Components/choose-exercise'; 


export default function App(){

    return(
        <View style = {styles.container}>
            <TestView />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#232A54',
        alignItems: 'center', 
      
    },
})