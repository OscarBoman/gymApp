import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from 'expo-router';
  

export default function Test() {
    const router = useRouter(); 
  return (
    <Pressable style={styles.container} onPressIn={() => router.navigate('/exercise-page')}>
      <Text style={styles.bread}>Lägg till övning 2</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
