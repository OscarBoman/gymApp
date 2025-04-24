import { View, Text, StyleSheet, Pressable } from "react-native";

const BottomStats = () => {
    return (
      <View style={styles.bottomStatsContainer}>
        <Text style={styles.bottomStats}>Pass: 45</Text>
        <Text style={styles.bottomStats}>Km: 105</Text>
        <Text style={styles.bottomStats}>Vikt: 5000kg</Text>
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

  export default BottomStats; 