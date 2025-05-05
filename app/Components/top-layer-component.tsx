import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Timer from '../Components/timer-compponent'; 

type PropsDefenition = {
    
    isExitButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
    exitButtonPressed:boolean;
    isFinishButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
    finishButtonPressed:boolean;
    isExitExercisePressed: React.Dispatch<React.SetStateAction<boolean>>;
    exitExercisePressed:boolean;
}; 

export default function TopExerciseLayer (props:PropsDefenition) {

    const handlePress = () => {
       props.isExitButtonPressed(true);
    };
    const handlePress2 = () => {
        props.isFinishButtonPressed(true);
        
     };
        
    return(
        <View style = {styles.container}>
            <Pressable style={styles.button} onPress={() => handlePress()}>
                <Text style = {styles.bread}>X</Text>
            </Pressable>
            <Timer   exitExercisePressed={props.exitExercisePressed}
                isExitExercisePressed={props.isExitExercisePressed}/>
            <Pressable style={styles.button} onPress={() => handlePress2() }>
                <Image  style={styles.img}
               source={require("../../assets/images/check (1).png")} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        backgroundColor:'rgba(255, 255, 255, 0)',
        height: 100,
        justifyContent:'space-around', 
        position:'relative',
    },
    bread:{
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold', 
    },
    button:{
        backgroundColor: "rgba(17, 17, 41,1)",
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        height: 40,
        width: 40,
        borderRadius:'50%',
        borderColor: "rgba(255, 255, 255, 0.26)",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    img: {
        height: 30,
        width: 30,
    },
})