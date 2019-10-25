import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { SIZE_ICON_BACK, COLOR_GRADIENT } from "../style/common";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/Ionicons";
import style from "../style/style";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ({
        urls,
        likes,
        description
      } = this.props.navigation.state.params.photo),
      user: ({
        name,
        profile_image
      } = this.props.navigation.state.params.photo.user),
      from: this.props.navigation.state.params.from,
      show: false,
      animIn: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { from } = nextProps.navigation.state.params.from;
    this.setState({ from: from });
  }

  isBack() {
    if (this.state.from == "Home") {
      this.props.navigation.navigate("Profile", {
        user: this.state.user
      });
    } else {
      this.props.navigation.goBack();
    }
  }

  gradient() {
    return (
      <Animatable.View
        style={style.boxGradientDetail}
        animation={this.state.anim ? "fadeOutDown" : "fadeInUp"}
        delay={1000}
      >
        <LinearGradient colors={COLOR_GRADIENT} style={style.boxGradientDetail} />
      </Animatable.View>
    );
  }

  iconBack(navigation) {
    return (
      <Animatable.View
        style={style.iconBack}
        animation={this.state.anim ? "fadeOutUp" : "fadeInDown"}
        delay={1000}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon name="ios-close-circle-outline" size={SIZE_ICON_BACK} color="#fff" />
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }

  isFrom() {
    if (this.state.from == "Home") {
      return (
        <View style={style.boxInfoUserName}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Profile", {
                user: this.state.user
              });
            }}
          >
            <Text style={style.txtView}>View Profile</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  infoDetail(uri) {
    return (
      <Transition anchor={uri}>
        <Animatable.View
          animation={this.state.anim ? "fadeOutDown" : "fadeInUp"}
          delay={1000}
          style={style.boxInfoDetail}
        >
          <Text style={style.txtTitlePhotoDetail}>
            {this.state.photo.description}
          </Text>
          <View style={style.spaceMain} />
          <View>
            <Text style={style.txtLikesDetail}>
              {this.state.photo.likes}
              {" Votos"}
            </Text>
          </View>
          <View style={style.spaceMain} />
          <View style={style.boxInfo}>
            <View style={style.boxAvatar}>
              <FastImage
                style={style.avatar}
                source={{ uri: this.state.user.profile_image.medium }}
                activityIndicatorProps={{
                  resizeMode: "center"
                }}
              />
            </View>
            <View style={style.boxInfoUser}>
              <View style={style.boxInfoUserName}>
                <Text style={style.txtName}>{this.state.user.name}</Text>
              </View>
              {this.isFrom()}
            </View>
          </View>
        </Animatable.View>
      </Transition>
    );
  }

  toggle = () => {
    if (!this.state.show)
      this.setState({
        show: true,
        anim: true
      });
    else {
      this.setState({
        anim: false
      });
      setTimeout(
        () =>
          this.setState({
            show: false
          }),
        500
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam("url", "");
    return (
      <View style={style.all}>
        <View style={style.imageContainer}>
          <Transition shared={uri}>
            <TouchableWithoutFeedback
              style={style.imageDetail}
              onPress={() => {
                this.toggle();
              }}
            >
              <FastImage
                style={style.imageDetail}
                source={{ uri }}
                activityIndicatorProps={{
                  resizeMode: "center"
                }}
              />
            </TouchableWithoutFeedback>
          </Transition>
        </View>
        {this.iconBack(navigation)}
        <View style={style.boxInfoPhotoDetail}>
          {this.gradient()}
          {this.infoDetail(uri)}
        </View>
      </View>
    );
  }
}

export default Detail;
