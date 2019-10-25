import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, SafeAreaView } from "react-native";
import { SIZE_ICON_BACK } from "../style/common";
import Grid from "react-native-infinite-scroll-grid";
import Icon from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image";
import PhotoItem from "../components/Photo/PhotoItem";
import style from "../style/style";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      numColumns: 2,
      user: ({ name, profile_image, bio } = this.props.navigation.state.params.user)
    };
  }

  render() {
    const { navigation, screenProps } = this.props;
    return (
      <SafeAreaView style={style.all}>
        <View style={style.mainBarProfile}>
          <TouchableWithoutFeedback
            style={style.iconBack}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="ios-close-circle-outline"
              size={SIZE_ICON_BACK}
              color="#333"
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={style.boxInfoProfile}>
          <FastImage
            style={style.avatarProfile}
            source={{ uri: this.state.user.profile_image.medium }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={style.boxInfoUserProfile}>
            <View style={style.boxInfoUserNameProfile}>
              <Text style={style.txtNameProfile}>{this.state.user.name}</Text>
            </View>
            <View style={style.boxInfoUserBio}>
              <Text style={style.txtViewProfile}>{this.state.user.bio}</Text>
            </View>
          </View>
        </View>
        <View style={style.boxMy}>
          <Text style={style.txtTitleProfile}>My Photos</Text>
        </View>
        <Grid
          style={style.photosListProfile}
          key={this.state.numColumns}
          numColumns={this.state.numColumns}
          data={screenProps}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <PhotoItem
                key={item.id}
                imageSelected={image => {
                  this.props.navigation.navigate("Detail", {
                    url: image.urls.regular,
                    photo: image,
                    from: "Profile"
                  });
                }}
                photo={item}
                index={index}
              />
            );
          }}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          marginExternal={26}
          marginInternal={26}
        />
      </SafeAreaView>
    );
  }
}

export default Profile;
