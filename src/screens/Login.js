import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";

import InputField from "../components/ui-elements/forms/InputField";
import NextArrowButton from "../components/ui-elements/buttons/NextArrowButton";
import Notification from "../components/Notification";
import Loader from "../components/Loader";

import colors from "../util/styles/colors";

// 04012019 look into performance issues -> arrow functions vs manual bind

class Login extends Component {
  state = {
    formValid: true,
    validEmail: false,
    emailAddress: "",
    validPassword: false,
    loadingVisible: false
  };

  handleNextButton = () => {
    // slow server simulation
    this.setState({ loadingVisible: true });

    setTimeout(() => {
      if (this.state.emailAddress === "ex@ex.com" && this.state.validPassword) {
        this.setState({
          formValid: true,
          loadingVisible: false
        });
      } else {
        this.setState({
          formValid: false,
          loadingVisible: false
        });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({
      formValid: true
    });
  };

  handleEmailChange = (email) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailAddress: email
    });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({
          validEmail: true
        });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({
          validEmail: false
        });
      }
    }
  };

  handlePasswordChange = (password) => {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        // password minimum 4 characters
        this.setState({
          validPassword: true
        });
      }
    } else if (password <= 4) {
      this.setState({
        validPassword: false
      });
    }
  };

  toggleNextButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if ((validEmail, validPassword)) {
      return false;
    }

    return true;
  };

  render() {
    const { formValid, loadingVisible, validEmail, validPassword } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.aqua : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.root]}
        behavior="padding"
      >
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
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus={true}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyles={{ marginBottom: 10 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
            />
          </ScrollView>
          <View style={styles.nextButtonWrapper}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState}
            />
          </View>
          <View
            style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}
          >
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials are incorrect."
              secondLine="Please try again."
            />
          </View>
        </View>
        <Loader modalVisible={loadingVisible} animationType="fade" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1
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
    bottom: 20
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0
  }
});

export default Login;
