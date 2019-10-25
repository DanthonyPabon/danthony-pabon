import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Dimensions } from "react-native";
import { COLOR_PRIMARY, COLOR_GRADIENT } from "../../style/common";
import { Transition } from "react-navigation-fluid-transitions";
import chunk from "lodash.chunk";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import style from "../../style/style";

class PhotoItem extends Component {
  constructor(props) {
    super(props);
    this._colCount = 3;
    const { width: windowWidth } = Dimensions.get("window");
    this._margin = 2;
    this._photoSize =
      (windowWidth - this._margin * this._colCount * 2) / this._colCount;
    this.state = {
      photo: ({ urls, likes, description } = this.props.photo),
      index: this.props.index,
      chunkedImages: chunk(props.images, this._colCount)
    };
  }

  _colCount;

  _photoSize;

  _margin;

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      chunkedImages: chunk(nextProps.images, this._colCount)
    });
  }

  Detail() {
    this.props.imageSelected(this.props.photo);
  }

  keyExtractor(index) {
    return `key_${index}`;
  }

  gradient() {
    let top = this.parImpar() ? (
      <View style={style.spaceEven} />
    ) : (
      <View style={style.spaceOdd} />
    );
    let bottom = this.parImpar() ? (
      <View style={style.spaceOdd} />
    ) : (
      <View style={style.spaceEven} />
    );
    return (
      <View>
        {top}
        <LinearGradient colors={COLOR_GRADIENT} style={style.boxGradientItem} />
        {bottom}
      </View>
    );
  }

  parImpar() {
    if (this.state.index % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  itemRender() {
    let top = this.parImpar() ? (
      <View style={style.spaceEven} />
    ) : (
      <View style={style.spaceOdd} />
    );
    let bottom = this.parImpar() ? (
      <View style={style.spaceOdd} />
    ) : (
      <View style={style.spaceEven} />
    );
    return (
      <View>
        {top}
        <TouchableWithoutFeedback onPress={() => this.Detail()}>
          <View style={style.boxImageItem}>
            <Transition shared={this.state.photo.urls.regular}>
              <FastImage
                style={style.imageItem}
                source={{
                  uri: this.state.photo.urls.regular,
                  width: this._photoSize,
                  height: this._photoSize
                }}
                activityIndicatorProps={{
                  color: COLOR_PRIMARY
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Transition>
            {this.gradient()}
            <View style={style.boxInfoPhoto}>
              <Text style={style.txtTitlePhoto}>{this.state.photo.description}</Text>
              <View style={style.space} />
              <Text style={style.txtLikes}>
                {this.state.photo.likes}
                {" Votos"}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {bottom}
      </View>
    );
  }

  render() {
    return <View>{this.itemRender()}</View>;
  }
}

export default PhotoItem;
