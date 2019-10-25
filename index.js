import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { AppContainer } from "./src/routes/nav";

class DanthonyPabon extends Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent(appName, () => DanthonyPabon);
