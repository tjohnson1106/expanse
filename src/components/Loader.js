import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import { PropTypes } from "prop-types";
import colors from "../util/styles/colors";

class Loader extends Component {
  render() {
    const { animationType, visible } = this.props;

    return (
      <Modal animationType={animationType} visible={visible} transparent={true}>
        <View style={styles.wrapper}>
          <Text>Loader Modal</Text>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }
});

export default Loader;
