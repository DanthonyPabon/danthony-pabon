import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../views/Home";

export const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home }
    },
    { headerMode: "none" }
  )
);
