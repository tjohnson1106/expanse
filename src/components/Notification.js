import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import colors from "../util/styles/colors";

class Notification extends Component {
  state = {};
  render() {
    const { type, firstLine, secondLine } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
      </View>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    height: 60,
    width: "100%",
    padding: 10
  },
  notificationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14
  }
});

export default Notification;
