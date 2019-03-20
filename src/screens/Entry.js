import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../util/styles/colors";

class Entry extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Image source={require("../img/home_logo.jpg")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.aqua
  }
});

export default Entry;
