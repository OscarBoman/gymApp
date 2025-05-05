import { View, Text, StyleSheet, Pressable} from "react-native";
import { useRouter } from "expo-router";


type PropsDefenition = {
    
    isExitButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
    exitButtonPressed:boolean;
    isExitExercisePressed: React.Dispatch<React.SetStateAction<boolean>>;
    exitExercisePressed:boolean;
}; 

export default function ExitWorkout (props:PropsDefenition) {
  const router = useRouter(); 
  const handlePress = () => {
    props.isExitExercisePressed(true);
    props.isExitButtonPressed(false);
    router.replace('/logged-in/home');
  };
    return(
         
                <View style={styles.modalContent}>
                    <Text style={styles.header}>Är du säker på att du vill avbryta?</Text>
                    <Text style={styles.bread}>Alla ändringar kommer att gå förlorade</Text>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => handlePress()}>
                        <Text style={styles.header}>Ja</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => props.isExitButtonPressed(false) }>
                        <Text style={styles.header}>Nej</Text>
                    </Pressable>
                    </View>
                </View>
              
                   
    )
}

const styles = StyleSheet.create({
      modalContent: {
        width: "80%",
        backgroundColor: "#232A54",
        borderRadius: 10,
        padding: 20,
        alignItems:'center',
        gap:5,
      },
      header: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
        
      },
      bread:{
        color:'#fff',
      },
      buttonContainer:{
        flexDirection:'row',
        gap:20,
      },
      button:{
        backgroundColor: 'rgba(255,255,255,0.08)',
        justifyContent:'center',
        alignItems:'center',
        height: 50,
        width: 150,
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth:1,
        borderRadius:20,
        marginTop:10,
      },
})