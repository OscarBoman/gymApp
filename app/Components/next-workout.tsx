import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

const NextWorkOut = () => {
  const router = useRouter();
  return (
    <Pressable style = {styles.container} onPressIn={() => router.navigate("/logged-in/workout-page")}>
      <Image style={styles.img} source={require('../../assets/images/play (4).png')}/>
      <Text style={styles.header}>Starta nytt pass</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "rgba(17, 17, 41,1)",
    borderRadius: 20,
    width: "96%",
    height:90,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    
    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    position:'absolute',
    left: 140,
  },
 
  img: {
    height: 35,
    width: 35,
    position:'absolute',
    left:80,
  },

});

export default NextWorkOut;
