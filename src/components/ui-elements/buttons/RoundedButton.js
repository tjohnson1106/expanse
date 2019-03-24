import React, { Component } from "react";
import { Text, StyleSheet, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../../util/styles/colors";

class RoundedButton extends Component {
  state = {};
  render() {
    const { text, textColor, background, icon, handleOnPress } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;

    return (
      // use RN Button component?
      <TouchableHighlight
        style={[{ backgroundColor }, styles.root]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  }
});

export default RoundedButton;
