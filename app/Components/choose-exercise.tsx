import { View, Text, StyleSheet, Pressable, Modal,Image } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';

const övningar: { [key: string]: string[] } = {
  Ben: ["Knäböj", "Benpress", "Benspark"],
  Bröst: ["Bänkpress", "Uppåtlutad hantelpress", "Maskin flyes"],
  Rygg: ["Marklyft", "Latsdrag", "Kabelrodd"],
  Axlar: ["Axelpress", "Skivstångsrodd", "Omvända hantelflyes"],
  Armar: ["Bicepscurl", "Triceps pushdown", "Curl med EZbar"],
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
          <Image style={styles.img} source={require('../../assets/images/add (2).png')}/>
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
          router.push(`/logged-in/tab_1/workout-page?chosenExercise=${chosenExercise}`);
          setDropdownVisible(false);
          
        }}>
            
          <Text style={styles.optionText}>{chosenExercise}</Text>
        </Pressable>
      ))}
      <Pressable style={styles.closeButton} onPress={() =>  setDropdownVisible(false)}>
        <Text style={styles.closeText}>Stäng</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232A54",
    width: "95%",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 10,
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: "rgba(17, 17, 41,1)",
    width: "95%",
    height: 70,
    borderRadius:20,
    justifyContent: "center",
    alignItems:'center',
    flexDirection:'row',
    position:'relative',
    
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
    fontSize: 22,
    position:'absolute',
    left: 170,
    
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#232A54",
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 5,
  },
  optionText: {
    fontSize: 18,
    color:'#fff',
    backgroundColor: "rgba(17, 17, 41,1)",
    padding:15,
    borderRadius:10,

    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  closeButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "rgba(17, 17, 41,1)",
    borderRadius: 5,

    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  closeText: {
    color: "white",
    textAlign: "center",
  },
  img: {
    height: 35,
    width: 35,
    position:'absolute',
    left:100,
  },
});
