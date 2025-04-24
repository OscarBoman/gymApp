import { View, Text, StyleSheet, Pressable } from "react-native";

const övningar = {
  Ben: ["Knäböj", "Benpress", "Benspark"],
  Bröst: ["Bänkpress", "Hantelpress", "Flyes"],
  Rygg: ["Marklyft", "Latsdrag", "Skivstångsrodd"],
  Axlar: ["Militärpress", "Sidolyft", "Omvända flyes"],
  Armar: ["Bicepscurl", "Triceps pushdown", "Chins"],
  Mage: ["Planka", "Sit-ups", "Hängande benlyft"],
};

export default function TestView() {
  return (
    <View style = {styles.container}>
        {Object.keys(övningar).map((key) => (
      <Pressable style = {styles.innerContainer}>
          <Text style = {styles.bread} key={key}>{key}</Text>
      </Pressable>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#232A54",
        width:'95%',
        gap:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        padding: 10,
        borderRadius:5, 
    },
    innerContainer:{
        backgroundColor:"#1a1d2c",
        width:'95%',
        height: 70,
        justifyContent:'center', 
        borderRadius:5, 
       
    },
    bread:{
        color:'#fff',
        padding: 10, 
        fontWeight:'bold',
        fontSize:30,
    }
})

