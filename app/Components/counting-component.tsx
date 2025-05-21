import { View, Text, StyleSheet, Pressable,Image } from "react-native";
import { useRouter } from "expo-router";
import {useState,useEffect,useRef} from 'react'

export default function CountingComponent() {
    const router = useRouter(); 
    const interval = useRef<number | null>(null);
    const [repCount,setRepCount] = useState(0);
    const testData = 0; 

function handleGoBack() {
    setRepCount(0);
    
    router.push('/logged-in/tab_1/workout-page')

    fetch("http://192.168.50.3:3000/submit-rep", {
      method: "POST",
      body: JSON.stringify({
        repCount:0
      }),
      headers: {
        "Content-type": "application/json"
      }
    });
}




    const handleCounting = async () =>{
      try{
        const response = await fetch('http://192.168.50.3:3000/get-rep');
        const data = await response.json(); 
        setRepCount(data);
        
      }
      catch(e){
        console.log(e); 
      }
    }; 

    function handleTestCounting () {
      
      const stringTestData = testData.toString(); 
     
      router.push(`/logged-in/tab_1/workout-page?stringTestData=${stringTestData}`);
    }
 


  return (
    <View style={styles.container}>
      <Text style={ testData > 0 ? styles.none : styles.header} >Övning pågår</Text>
      <Text style={ testData > 0 ? styles.none : styles.bread1}>Räknar antalet repetitioner</Text>
      
      <View style={styles.innerContainer}>
        <Pressable style={styles.button} onPress={() => handleGoBack()}>
          <Text style={styles.bread}>X</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleTestCounting()}>
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
    none:{
      display:'none', 
    },
})
