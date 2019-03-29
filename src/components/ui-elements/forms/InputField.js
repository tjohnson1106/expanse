import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import colors from "../../../util/styles/colors";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        props.inputType === "text" || props.inputType === "email" ? false : true
    };
  }

  toggleShowPassword() {
    this.setState({
      secureInput: !this.state.secureInput
    });
  }

  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle
    } = this.props;
    const { secureInput } = this.state;

    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";

    return (
      <View style={[customStyle, styles.root]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity>
            <Text>{secureInput ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[{ color: inputColor, borderBottomColor: borderBottom }, styles.input]}
          secureTextEntry={inputType === "password"}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object
};

const styles = StyleSheet.create({
  root: {
    display: "flex"
  },
  label: {
    fontWeight: "700",
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 10
  }
});

export default InputField;
