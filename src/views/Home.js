import React, { Component } from "react"; 
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getPhotos } from "../actions"
import style from "../style/style"; 
 
class Home extends Component { 
  constructor(props) { 
    super(props); 
    this.state = {}; 
  } 
 
  render() { 
    return ( 
      <View style={style.all}> 
        <View style={style.containerProfile}> 
          <View style={style.mainBar}> 
            <Text style={style.txtTitle}>Discover</Text> 
          </View> 
        </View> 
      </View> 
    ); 
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
