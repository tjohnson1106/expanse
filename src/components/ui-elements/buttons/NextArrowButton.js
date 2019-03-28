import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../../util/styles/colors";

class NextArrowButton extends Component {
  state = {};
  render() {
    const { disabled } = this.props;
    const opacityStyle = disabled
      ? {
          backgroundColor: "rgba(255, 255, 255, 0.2)"
        }
      : {
          backgroundColor: "rgba(255, 255, 255, 0.6)"
        };

    return (
      <View>
        <TouchableHighlight style={[opacityStyle, styles.button]}>
          <FontAwesome
            name="angle-right"
            color={colors.aqua}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

export default NextArrowButton;
