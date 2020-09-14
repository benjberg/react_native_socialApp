import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGBxabXBvAc7KisbzY3LzZHauNTLOCxMQ",
  authDomain: "socialapp-6dbb9.firebaseapp.com",
  databaseURL: "https://socialapp-6dbb9.firebaseio.com",
  projectId: "socialapp-6dbb9",
  storageBucket: "socialapp-6dbb9.appspot.com",
  messagingSenderId: "430930192632",
  appId: "1:430930192632:web:cd50c11ae3e563b6a5b30d",
  measurementId: "G-T1S1J0ESRM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
