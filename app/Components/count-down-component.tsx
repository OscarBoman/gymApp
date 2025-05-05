import { Text, StyleSheet, Pressable,View,Image } from "react-native";
import  {useState, useEffect, useRef} from 'react'; 

type TimerProps = { 
  isPressed: React.Dispatch<React.SetStateAction<boolean>>;
  pressed:boolean; 
};

export default function CountDown (props:TimerProps) {
    const [seconds, setSeconds] = useState(0); 
    const [minutes, setMinutes] = useState(2);
    const [started, isStarted] = useState(false); 
    const [reset, isReseted] = useState(false)
    const interval = useRef<number | null>(null);
    
    useEffect (() => {
        if(props.pressed || started ){
            interval.current = setInterval (() => {
                setSeconds(prev => prev - 1); 
            },1000);
            isStarted(true);
        }
       else{
        isStarted(false);
        if (interval.current) clearInterval(interval.current);
       }
        
        return () => {
            if (interval.current) clearInterval(interval.current);
          };
    },[props.pressed,started]); 

       


    useEffect(() => {
        if (minutes === 0 && seconds < 0) {
          if (interval.current) {
            clearInterval(interval.current);
            setSeconds(0);
            setMinutes(2); 
          }
        }
      }, [minutes, seconds]);

      useEffect(() => {
        if(seconds < 0){
            setSeconds(59); 
            setMinutes(prev => prev - 1);
        }
      }, [minutes, seconds]);

      useEffect(() => {
        if(reset){
            setSeconds(0);
            setMinutes(2);
            isStarted(false);
            isReseted(false);
        }

      },[reset])

      

      const handleStart = () => {
        isStarted(true)
        props.isPressed(true)
        
      }; 
      const handlePause = () => {
        isStarted(false)
        props.isPressed(false)
      }

      const handleReset = () => {
        isReseted(true); 
        props.isPressed(false)
      }




    return (
        <View style= {styles.outerContainer}>

        
            <Pressable style={styles.btnContainer} onPress={() => handleReset()} >
                <Image style={styles.img}
               source={require("../../assets/images/history.png")} />
            </Pressable>
            <Text style={styles.bread}>0{minutes}:{seconds < 10 ? `0${seconds}`: `${seconds}`}</Text>
            <Pressable style={styles.btnContainer} onPress={!started ? () => handleStart(): () => handlePause()}>
                {!started ? <Image style={styles.img1}
               source={require("../../assets/images/play (3).png")}/> : <Image style={styles.img1}
               source={require("../../assets/images/pause.png")}/> }
            </Pressable>
        
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#232A54',
        width:'60%',
        height:70,
        flexDirection:'row',
        borderRadius:30,
        borderColor:'rgba(255,255,255,0.4)',
        borderWidth:1,
    },
 
    img:{
        height: 25,
        width: 25,
    },
    img1: {
        height:30,
        width:30, 
    },
    bread: {
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold', 
    },
    btnContainer: {
        backgroundColor: "rgba(17, 17, 41,1)",
        justifyContent:'center',
        alignItems:'center',
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
})