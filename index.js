import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { AppContainer } from "./src/routes/nav";
import { Provider } from "react-redux";
import { store } from "./src/store";

class DanthonyPabon extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => DanthonyPabon);
