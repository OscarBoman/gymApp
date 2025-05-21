import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Image,
} from "react-native";
import Exersicse from "../../Components/exercise-component";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import TopExerciseLayer from "../../Components/top-layer-component";
import CountDown from "../../Components/count-down-component";
import ExitWorkout from "../../Components/exit-workout-component";
import FinishWorkout from "../../Components/finish-workout-component";

export default function App() {
  const { chosenExercise } = useLocalSearchParams() as {
    chosenExercise: string;
  };
  const { stringTestData } = useLocalSearchParams() as {
    stringTestData: string;
  };
  
  const [countedNumber, setCountedNumber] = useState('');
  const [exersice, setExercise] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [created, isCreated] = useState(false);
  const [pressed, isPressed] = useState(false);
  const [exitButtonPressed, isExitButtonPressed] = useState(false);
  const [finishButtonPressed, isFinishButtonPressed] = useState(false);
  const [exitExercisePressed, isExitExercisePressed] = useState(false); 
  const [repCount,setRepCount] = useState(0)
  const router = useRouter();

  useEffect(() => {
    const loadExercise = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("savedExercise");
        if (jsonValue !== null) {
          const savedExercises = JSON.parse(jsonValue);
          setExercise(savedExercises);
        }
      } catch (e) {
        console.error("Failed to load exercise:", e);
      } finally {
        setLoading(false);
      }
    };
    loadExercise();
  }, []);

  useEffect(() => {
    if (loading === true) return;
    if (chosenExercise !== undefined) {
      addExercise();
    }
    isCreated(true);
  }, [chosenExercise, loading]);

  useEffect(() => {
    const saveExercise = async () => {
      try {
        const jsonValue = JSON.stringify(exersice);
        await AsyncStorage.setItem("savedExercise", jsonValue);
      } catch (e) {
        console.error("Failed to save exercise:", e);
      }
    };
    saveExercise();
  }, [created, exersice]);

  useEffect(() => {
    setCountedNumber(stringTestData); 
  },[stringTestData]); 

  const addExercise = () => {
    const exerciseId = chosenExercise;
    setExercise((prev) => [...prev, exerciseId]);
  };
  const deleteExercise = (exerciseId: string) => {
    setExercise(exersice.filter((exersiceId) => exersiceId !== exerciseId));
  };

  return (
    <KeyboardAvoidingView
      style={styles.bigContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GestureHandlerRootView>
        <TopExerciseLayer
          exitButtonPressed={exitButtonPressed}
          isExitButtonPressed={isExitButtonPressed}
          finishButtonPressed={finishButtonPressed}
          isFinishButtonPressed={isFinishButtonPressed}
          exitExercisePressed={exitExercisePressed}
          isExitExercisePressed={isExitExercisePressed}
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Modal visible={exitButtonPressed} transparent>
            <View style={styles.modalBackground}>
              <ExitWorkout
                exitButtonPressed={exitButtonPressed}
                isExitButtonPressed={isExitButtonPressed}
                exitExercisePressed={exitExercisePressed}
                isExitExercisePressed={isExitExercisePressed}
              />
            </View>
          </Modal>

          <Modal visible={finishButtonPressed} transparent>
            <View style={styles.modalBackground}>
              <FinishWorkout
                finishButtonPressed={finishButtonPressed}
                isFinishButtonPressed={isFinishButtonPressed}
              />
            </View>
          </Modal>

          <View style={styles.innerContainer}>
            {exersice.map((exerciseName, i) => (
              <Exersicse
                name={exerciseName}
                key={i}
                id={i}
                deleteExercise={deleteExercise}
                pressed={pressed}
                isPressed={isPressed}
                countedNumber = {countedNumber}
                setCountedNumber={setCountedNumber}
              />
            ))}
            <Pressable
              style={styles.buttonContainer}
              onPressIn={() => router.navigate("/logged-in/tab_1/exercise-page")}
            >
              <Image style={styles.img} source={require('../../../assets/images/add (2).png')}/>
              <Text style={styles.bread}>Lägg till övning</Text>
            </Pressable>
          </View>
        </ScrollView>
        <View style={styles.fixedBottom}>
          <CountDown pressed={pressed} isPressed={isPressed} />
        </View>
      </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: "#232A54",
  },
  container: {
    marginBottom: 50,
    marginTop: 10,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    position: "relative",
  },
  buttonContainer: {
    padding: 5,
    backgroundColor: "rgba(17, 17, 41,1)",
    borderRadius: 20,
    width: "96%",
    height:90,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    marginBottom:100,
    
    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  bread: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    position:'absolute',
    left: 140,
  },
  fixedBottom: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  
  img: {
    height: 35,
    width: 35,
    position:'absolute',
    left:80,
  },
});
