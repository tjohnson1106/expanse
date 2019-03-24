import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../util/styles/colors";
import RoundedButton from "../components/ui-elements/buttons/RoundedButton";

class Entry extends Component {
  onFaceBookPress() {
    alert("Facebook button pressed");
  }

  onCreateAccountPress() {
    alert("Create account button pressed");
  }

  onMoreOptionsPress() {
    alert("More options button pressed");
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/home_logo.jpg")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to The Expanse App Experience</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.aqua}
            background={colors.white}
            icon={<MaterialCommunityIcons name="facebook" />}
            style={styles.facebookButtonIcon}
            handleOnPress={() => this.onFaceBookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={() => this.onCreateAccountPress}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={() => this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More Options</Text>
          </TouchableHighlight>

          <View style={styles.terms}>
            <Text style={styles.termsText}>
              By Tapping Continue, Create Account or More{" "}
            </Text>
            <Text style={styles.termsText}>options, </Text>
            <Text style={styles.termsText}>I agree to Expanse's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
          </View>
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
  },
  facebookButtonIcon: {
    color: colors.aqua,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 15
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  },
  terms: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});

export default Entry;
