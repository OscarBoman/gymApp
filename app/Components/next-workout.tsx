import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from 'expo-router';

const NextWorkOut = () => {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nästa Pass</Text>
      <Pressable onPressIn={() => router.navigate('/logged-in/workout-page')} >
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/images/weightlifting.png")}
          ></Image>
          </View>
          <Text style = {styles.cardBread}>Bicep, tricep, underarmar</Text>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:5,
    paddingBottom:15,
    backgroundColor: "rgba(17, 17, 41, 0.7)",
    borderRadius: 20,
    width: "96%",
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  imgContainer: {
    backgroundColor: "rgba(27, 31, 62, 0.69)",
    padding: 7,
    borderRadius: "50%",
  },
  img: {
    height: 35,
    width: 35,
  },
  card: {
    flexDirection: "row",
    backgroundColor: 'rgba(255,255,255,0.17)',
    padding: 5,
    gap:10,
    borderRadius: 10,
    alignItems:'center',
  },
  cardBread: {
    color: '#fff', 
    fontWeight:'bold',
    fontSize: 12,

  }
});

export default NextWorkOut;
