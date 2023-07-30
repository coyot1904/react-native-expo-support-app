import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Torch from "react-native-torch";

// Images
import { Qr, Close, Flash, Approve } from "../../Assets/Images/index";

// Components
import SModal from "../Basic/Modal";

//Styles
import styles from "./Styles/QrStyles";

export default function SQr(props) {
  const { qrData, setQtData } = props;

  const [visiable, setVisiable] = React.useState(false);

  const [hasPermission, setHasPermission] = React.useState(null);

  const [showBarCode, setShowBarCode] = React.useState(false);

  const [showBarManual, setShowBarManual] = React.useState(false);

  const [scanned, setScanned] = React.useState(false);

  const [flashState, setFlashState] = React.useState(false);

  const onShowModal = () => {
    setVisiable(!visiable);
  };

  const onSelectQrCode = () => {};

  const scan = () => {
    setShowBarCode(true);
  };

  const manual = () => {
    setShowBarManual(true);
  };

  const flash = () => {
    // barcode scaner dose not have property for flashlight
    Torch.switchState(!flashState);
    setFlashState(!flashState);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQtData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onShowModal}>
        <TextInput
          style={styles.input}
          value={qrData}
          placeholder="Select Qr Code"
          placeholderTextColor={"#FFF"}
          editable={false}
        />
        <Image style={styles.qrIcon} source={Qr} resizeMode="contain" />
      </TouchableOpacity>
      <SModal
        visible={visiable}
        onShowModal={onShowModal}
        onEvent={onSelectQrCode}
        content={
          <View style={styles.qrContainer}>
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={onShowModal}
            >
              <Image style={styles.close} source={Close} resizeMode="contain" />
            </TouchableOpacity>
            {showBarCode === false && showBarManual === false ? (
              <>
                <TouchableOpacity
                  style={styles.submitContainerBtn}
                  onPress={scan}
                >
                  <Text style={styles.submitText}>Scan Barcode</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.submitContainerBtn}
                  onPress={manual}
                >
                  <Text style={styles.submitText}>Enter Manually</Text>
                </TouchableOpacity>
              </>
            ) : null}
            {showBarCode === true ? (
              <>
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={styles.absoluteFillObject}
                />
                {scanned && (
                  <TouchableOpacity
                    style={styles.submitContainerBtnApprove}
                    onPress={onShowModal}
                  >
                    <Image
                      style={styles.approveIcon}
                      source={Approve}
                      resizeMode="contain"
                    />
                    <Text style={styles.qrTextApprove}>QR Code</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={styles.submitContainerBtnFlash}
                  onPress={flash}
                >
                  <Image
                    style={styles.flashIcon}
                    source={Flash}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </>
            ) : null}
            {showBarManual === true ? (
              <View>
                <TextInput
                  style={styles.inputManual}
                  value={qrData}
                  onChangeText={(text) => setQtData(text)}
                  placeholder="Put Qr Data Manuallly"
                  placeholderTextColor={"#000"}
                />
                <TouchableOpacity
                  style={styles.submitContainerBtnMan}
                  onPress={onShowModal}
                >
                  <Text style={styles.submitText}>Enter Manually</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        }
      />
    </>
  );
}
