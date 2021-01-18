import React from "react";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase';
import Home from "./screens/Home/";
import SignUp from "./screens/SignUp/";
import Send from "./screens/Send/";
import Login from "./screens/Login/";
import Receive from './screens/Receive/'
import {FIREBASE_CONFIG} from './Components/Constants/Constants';



// INTIALISATION DE FIREBASE
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
  
}

const LoginStack = createStackNavigator({
  Login:Login,
  SignUp:SignUp
},{
      initialRouteName:"Login"
});
// APPLICATION
const AppStack = createStackNavigator(
  {
    Home: { screen: Home },
    Send: { screen: Send },
    Receive: { screen: Receive },
  },
  {
    index: 0,
    initialRouteName: "Home"
  }
);
const App = createAppContainer(createSwitchNavigator(
  {
      Login:LoginStack,
      AppNavigator:AppStack,
  }
  ,{
      initialRouteName: 'Login',
  }
));

export default App;
