import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLOR_BACKGROUND, COLOR_TERTIARY, COLOR_FOURTH } from "./common.js";

export default StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND
  },
  containerHome: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "flex-start"
  },
  containerProfile: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  containerDetail: {
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
  mainBarProfile: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: COLOR_FOURTH,
    width: "100%",
    left: "8%",
    marginTop: 38,
    marginBottom: 15
  },
  iconMenu: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    width: 25,
    height: 12,
    left: "5%"
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
  iconBackProfile: {
    width: 50,
    height: 50,
    alignItems: "center",
    top: "5%",
    left: "8%"
  },
  photosList: {
    flex: 1,
    width: "100%",
    paddingTop: 3
  },
  photosListProfile: {
    flex: 1,
    width: "100%",
    paddingTop: 3
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: Platform.OS === "ios" ? 50 : 50
  },
  avatarProfile: {
    width: 70,
    height: 70,
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
  txtTitleProfile: {
    fontFamily: "MuseoSans-900",
    color: "#000000",
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
  txtViewProfile: {
    fontFamily: "MuseoSans-100",
    color: "#333",
    fontSize: 10,
    textAlign: "justify",
    flexWrap: "wrap"
  },
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
  boxInfoContainer: {
    flex: 1,
    flexDirection: "column",
    top: "5%",
    paddingLeft: 32,
    paddingRight: 32
  },
  boxLoading: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  boxImageItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  boxInfo: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    marginBottom: 10
  },
  boxMy: { marginTop: 26, marginLeft: 26, marginBottom: 10 },
  boxInfoProfile: {
    flexDirection: "row",
    marginLeft: 26,
    marginRight: 26
  },
  boxInfoDetail: {
    padding: 35,
    width: "100%",
    flex: 1
  },
  boxInfoUserName: {
    width: "100%",
    justifyContent: "flex-start"
  },
  boxInfoUserNameProfile: {
    width: "100%",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: 6
  },
  boxInfoUserBio: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  boxInfoUser: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  boxInfoUserProfile: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: 10
  },
  boxAvatar: {
    flex: 0.32,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  boxAvatarProfile: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
