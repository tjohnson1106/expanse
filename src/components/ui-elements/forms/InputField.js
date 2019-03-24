import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import colors from "../../../util/styles/colors";

class InputField extends Component {
  render() {
    const { labelText, labelTextSize, labelColor } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    return (
      <View style={styles.root}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelText: PropTypes.number,
  labelColor: PropTypes.string
};

const styles = StyleSheet.create({
  root: {
    display: "flex"
  },
  label: {
    fontWeight: "700",
    marginBottom: 10
  }
});

export default InputField;
