import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

//Images
import { Approve } from "../../../Assets/Images/index";

//Styles
import styles from "./Styles/InputSelectStyles";

export default function SInputSelect(props) {
  const { select, setSelect } = props;

  const DATA = [
    {
      id: 1,
      name: "Report Defective Vehicle",
    },
    {
      id: 2,
      name: "Report Wrong Parking",
    },
    {
      id: 3,
      name: "Report Other",
    },
  ];

  return (
    <View style={styles.container}>
      {DATA.map((item) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setSelect(item.id)}
          >
            <Text style={styles.selectInputText}>{item.name}</Text>
            {select === item.id ? (
              <Image
                style={styles.approveIcon}
                source={Approve}
                resizeMode="contain"
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
