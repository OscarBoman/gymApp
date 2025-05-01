import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';

const övningar: { [key: string]: string[] } = {
  Ben: ["Knäböj", "Benpress", "Benspark"],
  Bröst: ["Bänkpress", "Hantelpress", "Flyes"],
  Rygg: ["Marklyft", "Latsdrag", "Skivstångsrodd"],
  Axlar: ["Militärpress", "Skivstångsrodd", "Omvända flyes"],
  Armar: ["Bicepscurl", "Triceps pushdown", "Chins"],
  Mage: ["Planka", "Sit-ups", "Hängande benlyft"],
};

export default function TestView() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>
      {Object.keys(övningar).map((bodyPart) => (
        <Pressable
          key={bodyPart}
          style={styles.innerContainer}
          onPress={() => {
            setDropdownVisible(!isDropdownVisible);
            setSelectedValue(bodyPart);
          }}
        >
          <Text style={styles.bread}>{bodyPart}</Text>
        </Pressable>
      ))}

      <Modal visible={isDropdownVisible} transparent>
        <View style = {styles.modalBackground}>
        <ViewbodyPart selectedValue={selectedValue} setDropdownVisible = {setDropdownVisible} />
        </View>
        
      </Modal>
    </View>
  );
}

const ViewbodyPart = ({ selectedValue, setDropdownVisible}: { selectedValue: string; setDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  const router = useRouter(); 
  
  return (
    <View style={styles.modalContent}>
      {övningar[selectedValue].map((chosenExercise) => (
        <Pressable key={chosenExercise} style={styles.option} onPress= {() => { 
          router.push(`/logged-in/workout-page?chosenExercise=${chosenExercise}`);
          setDropdownVisible(false);
          
        }}>
          <Text style={styles.optionText}>{chosenExercise}</Text>
        </Pressable>
      ))}
      <Pressable style={styles.closeButton} onPressIn={() =>  setDropdownVisible(false)}>
        <Text style={styles.closeText}>Stäng</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232A54",
    width: "95%",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 10,
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: "#1a1d2c",
    width: "95%",
    height: 70,
    justifyContent: "center",
    borderRadius: 5,
  },
  bread: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#e74c3c",
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    textAlign: "center",
  },
});
