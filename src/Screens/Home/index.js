import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";

// Components
import SMenu from "../../Components/Basic/Menu";
import Location from "../../Components/Map/";
import SQr from "../../Components/Qr";
import SInputFile from "../../Components/Form/InputFile";
import SInputSelect from "../../Components/Form/InputSelect";
import SInputText from "../../Components/Form/InputText";
import SButton from "../../Components/Basic/Button";

//Styles
import styles from "./Styles/HomeStyles";

export default function Home(props) {
  const [location, setLocation] = useState(null);
  const [cordination, setCordination] = useState(null);
  const [qrData, setQtData] = useState(null);
  const [file, setFile] = useState(null);
  const [select, setSelect] = useState(0);
  const [comment, setComment] = useState("");

  const onEvent = () => {
    if (location?.length !== null) {
      if (qrData?.length !== null) {
        if (file?.length !== null) {
          if (select !== 0) {
            if (comment?.length !== null) {
              let options = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  phoneNumber: "5555555555",
                  authCode: "testCode",
                },
                body: JSON.stringify({
                  phone: "5555555555",
                  qrCode: qrData,
                  "userLocation.lat": cordination.latitude,
                  "userLocation.lon": cordination.longitude,
                  "userLocation.detail": location,
                  photo: file,
                  "type.broken": select === 1 ? true : null,
                  "type.parking": select === 2 ? true : null,
                  "type.other": select === 3 ? true : null,
                  message: comment,
                }),
              };
              fetch("api.hergele.co/testreport", options).then(function (res) {
                alert("Your support message has been sent!");
              });
            } else {
              alert("Please wite a comments first!");
            }
          } else {
            alert("Please choose one of condition first!");
          }
        } else {
          alert("Please take picture first!");
        }
      } else {
        alert("Please scan QR fisrt!");
      }
    } else {
      alert("Please set location first!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SMenu />
      <Location
        onChangeLocation={setLocation}
        location={location}
        setCordination={setCordination}
      />
      <SQr qrData={qrData} setQtData={setQtData} />
      <View style={styles.row}>
        <SInputFile setFile={setFile} />
        <SInputSelect select={select} setSelect={setSelect} />
      </View>
      <SInputText comment={comment} setComment={setComment} />
      <View style={styles.btnContainer}>
        <SButton onEvent={onEvent} TextValue={"Send"} />
      </View>
    </SafeAreaView>
  );
}
