import React, { Component } from "react"; 
import { Text, View, SafeAreaView } from "react-native"; 
import style from "../style/style"; 
 
class Detail extends Component { 
  constructor(props) { 
    super(props); 
    this.state = {}; 
  } 
 
  render() { 
    return ( 
      <SafeAreaView style={style.all}> 
        <View style={style.containerDetail}> 
          <View style={style.mainBar}> 
            <Text style={style.txtTitle}>Detalle</Text> 
          </View> 
        </View> 
      </SafeAreaView> 
    ); 
  } 
} 
 
export default Detail; 
