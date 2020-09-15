import "react-native-gesture-handler";
import * as React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./screens/LoadingScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import MessageScreen from "./screens/MessageScreen.js";
import NotificationScreen from "./screens/NotificationScreen.js";
import PostScreen from "./screens/PostScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
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

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={24} color={tintColor} />
        ),
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
        ),
      },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-add-circle"
            size={48}
            color="#e9446a"
            style={{
              shadowColor: "#e9446a",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
          />
        ),
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#161f3d",
      incativeTintColor: "#b8bbc4",
      showLabel: false,
    },
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
