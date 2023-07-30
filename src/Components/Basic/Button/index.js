import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Styles
import styles from "./Styles/ButtonStyles";

export default function SButton(props) {
  const { onEvent, TextValue } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onEvent()}>
      <Text style={styles.btnText}>{TextValue}</Text>
    </TouchableOpacity>
  );
}
