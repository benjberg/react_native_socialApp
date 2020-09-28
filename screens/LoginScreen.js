import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
} from "react-native";
import * as firebase from "firebase";
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/red.png")}
            style={styles.authHeader}
          ></Image>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/red.png")}
            style={styles.authFooter}
          ></Image>
        </View>
        <Image
          source={require("../assets/icon.png")}
          style={{ top: -95, alignSelf: "center" }}
        ></Image>
        <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <Text style={styles.inputTitle2}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
          <Text
            style={{ color: "#414959", fontSize: 13 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            New to OnFleek?{" "}
            <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: -32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  inputTitle2: {
    marginTop: 31,
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "red",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  authHeader: {
    marginTop: 5,
    height: 125,
    width: 125,
    display: "flex",
  },
  authFooter: {
    position: "absolute",
    bottom: -630,
    right: 145,
    height: 125,
    width: 125,
  },
});
