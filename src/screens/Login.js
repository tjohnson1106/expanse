import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import PropTypes from "prop-types";

import InputField from "../components/ui-elements/forms/InputField";
import colors from "../util/styles/colors";

class Login extends Component {
  state = {};
  render() {
    return (
      <KeyboardAvoidingView style={styles.root}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.aqua
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scroll: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300"
  }
});

export default Login;
