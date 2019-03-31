import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";

import InputField from "../components/ui-elements/forms/InputField";
import NextArrowButton from "../components/ui-elements/buttons/NextArrowButton";
import Notification from "../components/Notification";
import colors from "../util/styles/colors";

class Login extends Component {
  state = {
    formValid: false
  };

  handleNextButton() {
    alert("handle next button");
  }

  handleCloseNotification() {
    alert("handle close notification");
  }

  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;

    return (
      <KeyboardAvoidingView style={styles.root} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyles={{ marginBottom: 30 }}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyles={{ marginBottom: 10 }}
            />
          </ScrollView>
          <View style={styles.nextButtonWrapper}>
            <NextArrowButton handleNextButton={this.handleNextButton} />
          </View>
          <View style={showNotification ? { marginTop: 10 } : {}}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials are incorrect."
              secondLine="Please try again."
            />
          </View>
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
    fontWeight: "300",
    marginBottom: 40
  },
  nextButtonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 10
  }
});

export default Login;
