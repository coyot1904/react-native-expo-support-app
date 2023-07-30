import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

// Images
import { Menu } from "../../../Assets/Images/index";

//Styles
import styles from "./Styles/MenuStyles";

export default function SMenu(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.menuIcon} source={Menu} resizeMode="contain" />
      <Text style={styles.menuText}>Support</Text>
    </TouchableOpacity>
  );
}
