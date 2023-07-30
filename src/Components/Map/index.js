import React from "react";
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import MapView, { Marker } from "react-native-maps";

// Images
import { Location, Close } from "../../Assets/Images/index";

//Const
import { MAP_KEY } from "../../Assets/Constants/Environment";

// Components
import SModal from "../Basic/Modal";

//Styles
import styles from "./Styles/LocationStyles";

export default function SLocation(props) {
  const { onChangeLocation, location, setCordination, locationError } = props;

  const [visiable, setVisiable] = React.useState(false);

  const [draggableMarkerCoord, setDraggableMarkerCoord] = React.useState({
    longitude: 148.11,
    latitude: -26.85,
  });

  const onSelectMapLocation = () => {};

  const onShowModal = () => {
    setVisiable(!visiable);
  };

  const onRegionSubmit = async () => {
    let resp = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${draggableMarkerCoord.latitude}+${draggableMarkerCoord.longitude}&key=${MAP_KEY}`
    );
    let data = await resp.json();
    onChangeLocation(data.results[0].formatted);
    setCordination(draggableMarkerCoord);
    onShowModal();
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onShowModal}>
        <TextInput
          style={[styles.input, locationError === true ? styles.error : null]}
          value={location}
          placeholder="Your Location"
          placeholderTextColor={"#FFF"}
          editable={false}
        />
        <Image
          style={styles.locationIcon}
          source={Location}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <SModal
        visible={visiable}
        onShowModal={onShowModal}
        onEvent={onSelectMapLocation}
        content={
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              showsUserLocation={true}
              followsUserLocation={true}
              loadingEnabled={true}
              showsMyLocationButton={true}
              mapType="standard"
              initialRegion={{
                latitude: -26.852691607783505,
                latitudeDelta: 27.499085419977938,
                longitude: 148.1104129487327,
                longitudeDelta: 15.952148000000022,
              }}
            >
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={onShowModal}
              >
                <Image
                  style={styles.close}
                  source={Close}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Marker
                draggable
                pinColor="#b3175e"
                coordinate={draggableMarkerCoord}
                onDragEnd={(e) =>
                  setDraggableMarkerCoord(e.nativeEvent.coordinate)
                }
              />
            </MapView>
            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.submitContainerBtn}
                onPress={onRegionSubmit}
              >
                <Text style={styles.submitText}>Submit Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </>
  );
}
