import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

type PropsDefenition = {
    
    isFinishButtonPressed: React.Dispatch<React.SetStateAction<boolean>>;
    finishButtonPressed:boolean;
}; 

export default function FinishWorkout (props:PropsDefenition) {
    return(
         
                <View style={styles.modalContent}>
                    <Text style={styles.header}>Är du klar?</Text>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.header}>Ja</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => props.isFinishButtonPressed(false)}>
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
      },
      header: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
      },
      buttonContainer:{
        flexDirection:'row',
        gap:20,
      },
      button:{
        backgroundColor: 'rgba(255,255,255,0.08)',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
        height: 50,
        width: 150,
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth:1,
        borderRadius:20,
      },
})