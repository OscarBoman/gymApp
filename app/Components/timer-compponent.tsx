import { Text, StyleSheet } from "react-native";
import  {useState, useEffect} from 'react'; 

export default function Timer() {
    const [seconds, setSeconds] = useState(0); 
    const [minutes, setMinutes] = useState(0); 
    const [hours, setHours] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)       
        },1000); 
        return () => clearInterval(interval)
    }, []);  

    useEffect(() => {
        if(seconds === 60){
            setSeconds(0)
            setMinutes(prev => prev + 1)
        }
    },[seconds]);

    useEffect(() => {
        if(minutes === 60){
            setMinutes(0)
            setHours(prev => prev + 1)
        }
    },[minutes]);




    return(
        
      <Text style={styles.text}>
        {hours === 0 ? `${hours}${hours}:`: `0${hours}:`}
        {minutes < 10 ? `0${minutes}:` : `${minutes}:` }
        {seconds < 10 ? `0${seconds}` : `${seconds}`}
      </Text>
    
    )

  

   
}

const styles = StyleSheet.create({
    text:{
        color:'#fff',
        marginTop:60,
        fontSize:18,
        fontWeight:'bold',
    },
})