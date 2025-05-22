import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232A54",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "bold",
  },
  smallText: {
    color: "#fff",
    fontSize: 25,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#fff",
    width: 350,
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    fontSize: 25,
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
    color: "#fff",
  },
  pressableActive: {
    padding: 5,
    backgroundColor: "rgba(17, 17, 41,1)",
    borderRadius: 20,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    borderColor: "rgba(255, 255, 255, 0.26)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    marginTop: 50,
    minWidth: 349,
    
    alignItems: "center",
  },
  pressableNotActive: {
    padding: 5,
    backgroundColor: "gray",
    marginTop: 50,
    minWidth: 350,
    borderRadius: 20,
    alignItems: "center",
  },
});
