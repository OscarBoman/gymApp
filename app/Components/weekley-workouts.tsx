import { View, Text, StyleSheet, Pressable, Image, ImageSourcePropType } from "react-native";
import WeekleyStats from "./weekley-stats";

export default function WeekleyWorkouts() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Denna vecka</Text>
      <View style={styles.cardContainer}>
        <WeekleyTrainingCard
          day="Måndag"
          moreInfo="Bicep, tricep, underarmar 00:51:28"
          image={require('../../assets/images/weightlifting.png')}
        />
        <WeekleyTrainingCard  image={require('../../assets/images/sport.png')}  day="Onsdag" moreInfo="45km 00:56:54" />
        <WeekleyTrainingCard  image={require('../../assets/images/weightlifting.png')}  day="Fredag" moreInfo="Rygg, bröst 00:48:56" />
        <WeekleyStats />
      </View>
    </View>
  );
}

const WeekleyTrainingCard = ({
  day,
  moreInfo,
  image,
}: {
  day: string;
  moreInfo: string;
  image: ImageSourcePropType;
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={image}        
          ></Image>
      </View>
      <View>
        <Text style={styles.cardHeader}>{day}</Text>
        <Text style={styles.cardBread}>{moreInfo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "rgba(17, 17, 41, 0.7)",
    borderRadius: 20,
    width: "96%",
  },
  cardContainer: {
    gap: 5,
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: 'rgba(255,255,255,0.17)',
    padding: 5,
    gap: 10,
    borderRadius: 10,
    alignItems: "center",
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
  cardHeader: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardBread: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 12,
  },
});
