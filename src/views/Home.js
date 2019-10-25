import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { getPhotos } from "../actions";
import { Photos } from "../api/request";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import { COLOR_PRIMARY } from "../style/common";
import Grid from "react-native-infinite-scroll-grid";
import PhotoItem from "../components/Photo/PhotoItem";
import Detail from "./Detail";
import Profile from "./Profile";
import style from "../style/style";

class ListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      refreshing: false,
      numColumns: 2
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ photos: nextProps.screenProps, loading: false });
  }

  async onRefresh() {
    try {
      console.log(await Photos());
    } catch (error) {}
  }

  isRender() {
    if (
      Object.keys(this.state.photos).length === 0 &&
      this.state.loading == true
    ) {
      return (
        <View style={style.boxLoading}>
          <ActivityIndicator
            color={COLOR_PRIMARY}
            size="large"
            animating={this.state.loading}
          />
          <Text style={style.txtNameProfile}>Cargando..</Text>
        </View>
      );
    } else {
      return (
        <Grid
          style={style.photosList}
          key={this.state.numColumns}
          numColumns={this.state.numColumns}
          data={this.state.photos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <PhotoItem
                key={item.id}
                imageSelected={image => {
                  this.props.navigation.navigate("Detail", {
                    url: image.urls.regular,
                    photo: image,
                    from: "Home"
                  });
                }}
                photo={item}
                index={index}
              />
            );
          }}
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          marginExternal={13}
          marginInternal={26}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={style.all}>
        <View style={style.mainBar}>
          <Text style={style.txtTitle}>Discover</Text>
        </View>
        {this.isRender()}
      </SafeAreaView>
    );
  }
}

const Navigator = FluidNavigator(
  {
    ListMain: { screen: ListMain },
    Detail: { screen: Detail },
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

class Home extends Component {
  static router = Navigator.router;

  async componentDidMount() {
    this.props.getPhotos(await Photos());
  }

  render() {
    const { navigation, photos } = this.props;
    return <Navigator navigation={navigation} screenProps={photos} />;
  }
}

const mapStateToProps = ({ gallery }) => {
  const { photos } = gallery;
  return { photos };
};

export default connect(
  mapStateToProps,
  { getPhotos }
)(Home);
