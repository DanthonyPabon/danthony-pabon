import { StyleSheet } from "react-native";
import { COLOR_BACKGROUND } from "./common.js";

export default StyleSheet.create({
  all: {
    //Review MAIN
    flex: 1,
    backgroundColor: COLOR_BACKGROUND
  },
  containerProfile: {
    //Review MAIN
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  containerDetail: {
    //Review MAIN
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    alignItems: "center"
  },
  txtTitle: {
    //Review MAIN
    color: "#333",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 20
  },
  mainBar: {
    //Review MAIN
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    padding: 10
  }
});
