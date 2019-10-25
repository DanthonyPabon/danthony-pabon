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
  iconBack: {
    width: 50,
    height: 50,
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    top: "10%",
    left: "8%"
  },
  photosList: {
    flex: 1,
    width: "100%",
    paddingTop: 3
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: Platform.OS === "ios" ? 50 : 50
  },
  imageItem: {
    flex: 1,
    width: "100%",
    height: 218,
    borderRadius: 10,
    backgroundColor: COLOR_TERTIARY
  },
  imageDetail: {
    width: Dimensions.get("window").width,
    height: "100%"
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
  txtTitlePhotoDetail: {
    fontFamily: "MuseoSans-500",
    color: COLOR_FOURTH,
    fontSize: 42
  },
  txtName: {
    fontFamily: "MuseoSans-300",
    color: COLOR_FOURTH,
    fontSize: 20
  },
  txtNameProfile: {
    fontFamily: "MuseoSans-700",
    color: "#333",
    fontSize: 20
  },
  mainBar: {
    //Review MAIN
  txtView: {
    fontFamily: "MuseoSans-100",
    color: COLOR_FOURTH,
    fontSize: 18
  },
  txtLikes: {
    color: COLOR_FOURTH,
    fontSize: 10
  },
  txtLikesDetail: {
    fontFamily: "MuseoSans-100",
    color: COLOR_FOURTH,
    fontSize: 22
  },
  boxLoading: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  boxInfo: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    marginBottom: 10
  },
    flexDirection: "row",
  boxInfoDetail: {
    padding: 35,
    width: "100%",
    flex: 1
  },
  boxInfoUserName: {
    width: "100%",
    justifyContent: "flex-start"
  },
  boxInfoUser: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
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
  boxInfoPhotoDetail: {
    marginBottom: 2.5,
    flexDirection: "column",
    position: "absolute",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    bottom: 0
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
  boxGradientDetail: {
    flex: 1,
    width: "100%",
    height: "100%",
    bottom: "-2%",
    position: "absolute",
    backgroundColor: "transparent"
  },
  spaceMain: {
    margin: 5
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
  imageContainer: {
    flexDirection: "row"
  }
});
