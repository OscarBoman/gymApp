import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import React, { useState, useRef, useEffect } from "react";
import styles from "../styles";
import { router } from "expo-router";



type ExerciseProps = {
  name: string;
  id:number; 
  deleteExercise:(exerciseId:string) => void; 
  isPressed: React.Dispatch<React.SetStateAction<boolean>>;
  pressed:boolean; 
  countedNumber:string; 
  setCountedNumber: (countedNumber:string ) => void; 
};

export default function Exersicse(props: ExerciseProps) {
    const [cards, setCards] = useState([1,2,3]);
    

    const addCard = () => {
        const cardId = cards.length + 1; 
        setCards((prev) => [...prev, cardId]); 
    }; 

    const removeCard = (id:number) => {
        const updatedCards = cards.filter((cardId) => cardId !== id );
        const updateId = updatedCards.map((_,index) => index + 1);
        setCards(updateId); 
    }; 

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.headerContainer}>
        <Text style={containerStyles.headerText}>{props.name}</Text>
        <Pressable style={containerStyles.deletExerciseContainer} onPress={() => props.deleteExercise(props.name)}>
          <Image
            style={containerStyles.deleteImg}
            source={require("../../assets/images/bin.png")}
          />
        </Pressable>
      </View>

      <View style={containerStyles.line}></View>
      <Pressable>
        <Text style={containerStyles.bread}>+ Uppvärmning</Text>
      </Pressable>
      <View style={containerStyles.exerciseContainer}>
        {cards.map((id) => (
            <ExerciseCard key={id} id={id} name={props.name} removeCard={removeCard} pressed={props.pressed} isPressed={props.isPressed} countedNumber = {props.countedNumber} setCountedNumber={props.setCountedNumber} />
        ))}
      </View>

      <Pressable onPress={() => addCard()}>
        <Text style={containerStyles.bread}>+ Set</Text>
      </Pressable>
    </View>
  );
}

type ExerciseCardProps = {
    id:number;
    removeCard:(id: number) => void; 
    isPressed: React.Dispatch<React.SetStateAction<boolean>>;
    pressed:boolean;
    name: string;
    countedNumber: string;
    setCountedNumber: (countedNumber: string) => void;
}; 

const ExerciseCard = (props: ExerciseCardProps) => {
 
  const [pressedId, setPressedId] = useState(0);
  const [pressed2,setPressed2] = useState(false); 

  function handleKlick () {
    
    !props.pressed ? props.isPressed(true) : props.isPressed(false); 
    !pressed2 ? setPressed2(true): setPressed2(false); 
    
  }
  
  function handleCountingRoute () {
    setPressedId(props.id); 
    console.log(pressedId);
    router.push('/logged-in/tab_1/counting-page'); 
  }

  const workoutImages: { [key: string]: any } = {
    Bicepscurl: require('../../assets/images/workout-images/Bicepscurl.png'),
    'Curl med EZbar': require('../../assets/images/workout-images/Curl med EZbar.png'),
    'Uppåtlutad hantelpress': require('../../assets/images/workout-images/Uppåtlutad hantelpress.png'),
    Knäböj: require('../../assets/images/workout-images/Knäböj.png'),
    Benpress: require('../../assets/images/workout-images/Benpress.png'),
    Bänkpress: require('../../assets/images/workout-images/Bänkpress.png'),
    'Maskin flyes': require('../../assets/images/workout-images/Maskin flyes.png'),
    Marklyft: require('../../assets/images/workout-images/Marklyft.png'),
    Latsdrag: require('../../assets/images/workout-images/Latsdrag.png'),
    Kabelrodd: require('../../assets/images/workout-images/Kabelrodd.png'),
    Axelpress: require('../../assets/images/workout-images/Axelpress.png'),
    'Omvända hantelflyes': require('../../assets/images/workout-images/Omvända hantelflyes.png'),
    'Triceps pushdown': require('../../assets/images/workout-images/Triceps pushdown.png'),
    Planka: require('../../assets/images/workout-images/Planka.png'),
    'Sit-ups': require('../../assets/images/workout-images/Sit-ups.png'),
  };

  

  const renderRightActions = () => {
    return (
      <Pressable onPress={() => props.removeCard(props.id)}>
        <View style={cardStyles.deleteImgContainer}>
          <Image
            style={containerStyles.deleteImg}
            source={require("../../assets/images/bin.png")}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={pressed2 ? cardStyles.pressedCardContainer : cardStyles.cardContainer }>
      
        <Pressable onPress={() => handleKlick()}>
          <View style={cardStyles.cardImgContainer}>
            <Image
              style={cardStyles.cardImg}
              source={require("../../assets/images/check (1).png")}
            />
          </View>
        </Pressable>
        <View>
          <Text style={cardStyles.inputHeader}>Kg</Text>
          <TextInput
            style={cardStyles.input}
            placeholder="Vikt"
            placeholderTextColor="#999"
            selectTextOnFocus={true}
            keyboardType="numeric"
            returnKeyType="done"
            maxLength={3}
          ></TextInput>
        </View>
        <View style={cardStyles.line}></View>
        <View>
          <Text style={cardStyles.inputHeader}>Reps</Text>
          <TextInput
            style={cardStyles.input}
            placeholder="St"
            placeholderTextColor="#999"
            selectTextOnFocus={true}
            keyboardType="numeric"
            returnKeyType="done"
            maxLength={3}
           
            
          ></TextInput>
        </View>
        <Pressable onPress={() => handleCountingRoute()}>
          <View style={cardStyles.cardImgContainer}>
            <Image
              style={cardStyles.cardImg}
              source={workoutImages[props.name] ? workoutImages[props.name] : require('../../assets/images/weightlifting.png')}
            />
            
          </View>
        </Pressable>
      </View>
    </Swipeable>
  );
};

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 5,
    width: "95%",
    gap: 5,
  },
  line: {
    borderWidth: 0.7,
    borderColor: "rgba(255,255,255,0.17)",
    width: "95%",
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems:'center',
    position:'relative',
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
  },
  deleteImg: {
    height: 25,
    width: 25,
  },
  bread: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 7,
  },
  exerciseContainer: {
    alignItems: "center",
    gap: 5,
  },
  deletExerciseContainer:{
    backgroundColor: "rgba(17, 17, 41,1)",
    padding: 7,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    position:'absolute',
    right: 20,
  },
});

const cardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: 75,
    backgroundColor: "#1a1d2c",
    position: "relative",
    borderRadius: 5,
  },
  pressedCardContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: 75,
    backgroundColor: "#194F0F",
    position: "relative",
    borderRadius: 5,
  },
  cardImgContainer: {
    backgroundColor: "rgb(66, 66, 66)",
    padding: 7,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },

  cardImg: {
    height: 30,
    width: 30,
  },
  inputHeader: {
    color: "#999999",
    fontWeight: "600",
    fontSize: 14,
    position: "absolute",
    bottom: 25,
    width: 40,
  },
  input: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    width: 40,
  },
  line: {
    borderWidth: 0.7,
    borderColor: "rgba(255,255,255,0.17)",
    height: "70%",
  },
  deleteImgContainer: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: '100%',
    borderRadius: 5,
  },
  idText:{
    position:'absolute',
    left: 6,
    color:'#fff',
  }
});
