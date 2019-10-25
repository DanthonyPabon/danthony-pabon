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
  mainBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_FOURTH,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15
  },
  photosList: {
    flex: 1,
    width: "100%",
    paddingTop: 3
  },
  imageItem: {
    flex: 1,
    width: "100%",
    height: 218,
    borderRadius: 10,
    backgroundColor: COLOR_TERTIARY
  },
  txtTitle: {
    fontFamily: "MuseoSans-900",
    color: "#000000",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 34
  },
  txtTitlePhoto: {
    color: COLOR_FOURTH,
    fontSize: 14,
    fontWeight: "bold"
  },
  txtNameProfile: {
    fontFamily: "MuseoSans-700",
    color: "#333",
    fontSize: 20
  },
  mainBar: {
    //Review MAIN
  txtLikes: {
    color: COLOR_FOURTH,
    fontSize: 10
  },
  boxLoading: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
    flexDirection: "row",
  boxInfoPhoto: {
    marginBottom: 2.5,
    flexDirection: "column",
    position: "absolute",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    left: 0,
    bottom: 0,
    padding: 10
  },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  boxGradientItem: {
    flex: 1,
    width: "100%",
    height: 80,
    bottom: 0,
    position: "absolute",
    backgroundColor: "transparent",
    borderRadius: 10
  },
  space: {
    margin: 2
  },
  spaceOdd: {
    width: "100%",
    marginTop: 10
  },
  spaceEven: {
    width: "100%",
    marginTop: -10
  },
  }
});
