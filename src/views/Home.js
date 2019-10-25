import React, { Component } from "react"; 
import { View, Text } from "react-native"; 
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
 
export default Home; 
