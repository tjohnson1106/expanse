import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from "react-native";
// import Animated, { Easing } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import colors from "../util/styles/colors";

// 03312019 reanimated library wasn't working, no variation in code

class Notification extends Component {
  state = {
    positionValue: new Animated.Value(60)
  };

  animateShowNotification = (value) => {
    const { positionValue } = this.state;
    Animated.timing(positionValue, {
      toValue: value,
      duration: 400,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack
    }).start();
  };

  // method triggered in Login -> handleCloseNotification
  closeNotification = () => {
    this.props.handleCloseNotification();
  };

  render() {
    const { type, firstLine, secondLine, showNotification } = this.props;
    // conditional implementation in props
    showNotification ? this.animateShowNotification(0) : this.animateShowNotification(60);
    const { positionValue } = this.state;

    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: positionValue
              }
            ]
          },
          styles.root
        ]}
      >
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMessage}>{firstLine}</Text>
          <Text style={styles.errorMessage}>{secondLine}</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={this.closeNotification}>
          <MaterialCommunityIcons name="close" size={20} color={colors.lightGray} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func
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
  },
  closeButton: {
    position: "absolute",
    right: 10
  }
});

export default Notification;
