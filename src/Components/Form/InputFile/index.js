import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";

//Const
import {
  BUCKET_NAME,
  REGION,
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY,
} from "../../../Assets/Constants/Environment";

// Images
import { Camera } from "../../../Assets/Images/index";

//Styles
import styles from "./Styles/InputFileStyles";

export default function SInputFile(props) {
  const { setFile } = props;

  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const options = {
        keyPrefix: "uploads/",
        bucket: BUCKET_NAME,
        region: REGION,
        accessKey: ACCESS_KEY_ID,
        secretKey: SECRET_ACCESS_KEY,
        successActionStatus: 201,
      };
      const file = {
        uri: result.assets[0].uri,
        name: "upload.jpg",
        type: "image/jpg",
      };
      console.log("inja");
      RNS3.put(file, options)
        .then((response) => {
          console.log(response);
          if (response.status !== 201)
            throw new Error("Failed to upload image to S3");
          else {
            setFile(response.body.postResponse.location);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pickImage}>
      {image ? (
        <Image source={{ uri: image }} style={styles.cameraIcon} />
      ) : (
        <Image style={styles.cameraIcon} source={Camera} resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
}
