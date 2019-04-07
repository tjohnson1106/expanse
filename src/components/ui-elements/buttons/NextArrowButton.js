import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

import colors from "../../../util/styles/colors";

class NextArrowButton extends Component {
  state = {};
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.2 : 0.6;

    return (
      <View>
        <TouchableHighlight
          style={[{ opacity: opacityStyle }, styles.button]}
          onPress={handleNextButton}
          // disabled={}
        >
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

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

export default NextArrowButton;
