import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../util/styles/colors";
import { RoundedButton } from "../components/ui-elements/buttons/RoundedButton";

class Entry extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/home_logo.jpg")} style={styles.logo} />
          <Text style={styles.welcomeText}>
            Welcome to The Expanse App Experience
          </Text>
          <RoundedButton text="Continue with Facebook" color={colors.aqua} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.aqua
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});

export default Entry;
