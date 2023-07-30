import React from "react";
import { View, Modal } from "react-native";

//Styles
import styles from "./Styles/ModalStyles";

export default function SModal(props) {
  const { onEvent, visible, content, onShowModal } = props;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {
        onShowModal();
      }}
      transparent={true}
    >
      <View style={styles.modal}>
        <View style={styles.modalContainer}>{content}</View>
      </View>
    </Modal>
  );
}
