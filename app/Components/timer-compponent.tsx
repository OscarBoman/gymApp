import { Text, StyleSheet } from "react-native";
import  {useState, useEffect,useRef} from 'react'; 

type PropsDef = {
    isExitExercisePressed: React.Dispatch<React.SetStateAction<boolean>>;
    exitExercisePressed:boolean;
}

export default function Timer(props:PropsDef) {
    const [seconds, setSeconds] = useState(0); 
    const [minutes, setMinutes] = useState(0); 
    const [hours, setHours] = useState(0); 
    const interval = useRef<number | null>(null);
    const [startTimer, setStartTimer] = useState(true);

    useEffect(() => {
            interval.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)       
            },1000); 
        
        return () => {
            if (interval.current) clearInterval(interval.current);
          };
       
    }, []);  

    useEffect(() => {
        console.log(props.exitExercisePressed)
        if(props.exitExercisePressed){
            if(interval.current) clearInterval(interval.current);
            setSeconds(0);
            setMinutes(0);
        }
    },[props.exitExercisePressed])
          
      

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
        marginTop: 60,
        fontSize:18,
        fontWeight:'bold',
    },
})