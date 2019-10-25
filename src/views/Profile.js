import React, { Component } from "react"; 
import { Text, View } from "react-native"; 
import style from "../style/style"; 
 
class Profile extends Component { 
  constructor(props) { 
    super(props); 
    this.state = {}; 
  } 
 
  render() { 
    return ( 
      <View style={style.all}> 
        <View style={style.containerProfile}> 
          <View style={style.mainBar}> 
            <Text style={style.txtTitle}>Perfil</Text> 
          </View> 
        </View> 
      </View> 
    ); 
  } 
} 
 
export default Profile; 
