import { View, Text, StyleSheet, ScrollView,Pressable, KeyboardAvoidingView,Platform } from "react-native";
import Exersicse from "../Components/exercise-component";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import{useState, useEffect} from 'react'; 
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function App() {
  const { chosenExercise } = useLocalSearchParams() as { chosenExercise: string };
  const [exersice, setExercise] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [created, isCreated] = useState<boolean>(false);
  const router = useRouter(); 

    
    
  useEffect(() => {
    const loadExercise = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('savedExercise');
            if (jsonValue !== null) {
              const savedExercises = JSON.parse(jsonValue);
              setExercise(savedExercises);
            }
        } catch (e) {
            console.error('Failed to load exercise:', e);
        } finally{
          setLoading(false)
        }
    };
    loadExercise();
}, []);


useEffect(() => {
  if(loading === true) return; 
  if (chosenExercise !== undefined){
    addExercise(); 
  }  
  isCreated(true)
  
}, [chosenExercise, loading]);
   

    useEffect(() => {
      const saveExercise = async () => {
        
          try {
              const jsonValue = JSON.stringify(exersice);
              await AsyncStorage.setItem('savedExercise', jsonValue);
          } catch (e) {
              console.error('Failed to save exercise:', e);
          }
      };
      saveExercise(); 
  }, [created,exersice]);

   
    

   
    const addExercise = () => {
        const exerciseId = chosenExercise; 
        setExercise((prev) => [...prev, exerciseId]);
    }
    const deleteExercise = (exerciseId:string) => {
        console.log('pressed');
        setExercise(exersice.filter((exersiceId) => exersiceId !== exerciseId)); 
    }
 
 
 
  return (
     <KeyboardAvoidingView
          style={styles.bigContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
    <GestureHandlerRootView >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
            {exersice.map((exerciseName,i) => (
                <Exersicse name={exerciseName}key={i} id={i} deleteExercise={deleteExercise}/>
            ))}
         <Pressable style={styles.buttonContainer} onPressIn={() => router.navigate('/exercise-page')}>
              <Text style={styles.bread}>Lägg till övning 2</Text>
            </Pressable>
        </View>
      
      </ScrollView>
    </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bigContainer:{
    flex: 1,
      backgroundColor: "#232A54",
  },
  container: {
    marginTop: 100,
    marginBottom:50, 
  },
  innerContainer:{
    alignItems: "center",
    justifyContent: "center",
    gap:5,

  },
  buttonContainer: {
    width: "95%",
    height: 70,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  bread: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
});
