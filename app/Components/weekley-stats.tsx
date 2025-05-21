import { View, Text, StyleSheet, Pressable } from "react-native";

const WeekleyStats = () => {
    return (
      <View style={styles.bottomStatsContainer}>
        <Text style={styles.bottomStats}>Pass: 3</Text>
        <Text style={styles.bottomStats}>Km: 45</Text>
        <Text style={styles.bottomStats}>Vikt: 200kg</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    bottomStatsContainer: {
        flexDirection: "row",
        padding: 10,
        gap: 20,
        justifyContent: "center",
      },
      bottomStats: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
      },
  })

  export default WeekleyStats; 