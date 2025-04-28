import { View, Text, StyleSheet, Pressable } from "react-native";



export default function NewExercise() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.bread}>Lägg till övning</Text>
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
