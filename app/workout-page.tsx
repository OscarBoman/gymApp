import { View, Text, StyleSheet, ScrollView } from "react-native";
import Exersicse from "../app/Components/exercise-component";
import NewExercise from '../app/Components/new-exercise'; 
import Test from '../app/Components/test'; 
import { GestureHandlerRootView } from "react-native-gesture-handler";
import{useState} from 'react'; 

export default function App() {
    const [exersice, setExercise] = useState<number[]>([]); 

    const addExercise = () => {
        const exerciseId = exersice.length + 1; 
        setExercise((prev) => [...prev, exerciseId]);
    }
    const deleteExercise = (id:number) => {
        console.log('pressed');
        const filterExercise = exersice.filter((exersiceId)=>exersiceId !== id); 
        const updatedExerciseId = filterExercise.map((_,index) => index + 1);
        setExercise(updatedExerciseId); 
    }
 
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#232A54" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
            {exersice.map((id) => (
                <Exersicse name='Tricep Mf' key={id} id={id} deleteExercise={deleteExercise}/>
            ))}
        <NewExercise addExercise = {addExercise}/>
        <Test />
        </View>
      
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232A54", 
  },
  innerContainer:{
    alignItems: "center",
    justifyContent: "center",
    gap:5,
    marginTop: 100,
    marginBottom:50, 
  },
});
