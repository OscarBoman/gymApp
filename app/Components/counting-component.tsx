import { View, Text, StyleSheet, Pressable,Image } from "react-native";
import { useRouter } from "expo-router";

export default function CountingComponent() {
    const router = useRouter(); 

function handleGoBack() {
    router.push('/logged-in/workout-page')
}

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Övning pågår</Text>
      <Text style={styles.bread1}>Räknar antalet repetitioner</Text>
      <View style={styles.innerContainer}>
        <Pressable style={styles.button} onPress={() => handleGoBack()}>
          <Text style={styles.bread}>X</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Image
            style={styles.img}
            source={require("../../assets/images/check (1).png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#232A54",
        alignItems:'center',
        justifyContent:'center',
    },
    innerContainer: {
        flexDirection:'row',
        gap: 100,
    },
    header:{
        color:'#fff',
        fontSize: 40,
        fontWeight:'bold',
    },
    bread1:{
      color:'rgba(255, 255, 255, 0.82)',
      fontWeight:'bold',
      fontSize:16,
      marginTop: 10,   
    },
    button:{
        backgroundColor: "rgba(17, 17, 41,1)",
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        height: 50,
        width: 50,
        borderRadius:'50%',
        borderColor: "rgba(255, 255, 255, 0.26)",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    img: {
        height: 25,
        width: 25,
    },
    bread:{
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold', 
    },
})
