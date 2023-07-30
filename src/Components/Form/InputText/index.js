import React from "react";
import { View, Text, Image, TextInput } from "react-native";

//Styles
import styles from "./Styles/InputTextStyles";

export default function SInputText(props) {
  const { comment, setComment } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={(text) => setComment(text)}
        placeholder="Please write your comment"
        placeholderTextColor={"#FFF"}
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
}
