import { StyleSheet } from "react-native";
import Metrics from "../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: Metrics.measure(15),
    width: Metrics.measure(330),
    height: Metrics.measure(50),
    margin: Metrics.measure(12),
    padding: Metrics.measure(10),
    backgroundColor: "#b3175e",
    borderRadius: Metrics.measure(5),
    fontSize: Metrics.measure(12),
    color: "#FFF",
  },
  locationIcon: {
    width: Metrics.measure(50),
    height: Metrics.measure(50),
    position: "absolute",
    right: Metrics.measure(20),
    top: Metrics.measure(17),
  },
  map: {
    width: "100%",
    height: Metrics.measure(555),
  },
  mapContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeContainer: {
    position: "absolute",
    right: Metrics.measure(5),
    top: Metrics.measure(5),
  },
  close: {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    zIndex: 10000000,
  },
  submitContainer: {
    position: "absolute",
    bottom: Metrics.measure(5),
    width: "100%",
    height: Metrics.measure(60),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000000000,
  },
  submitContainerBtn: {
    height: Metrics.measure(50),
    width: "90%",
    backgroundColor: "#b3175e",
    borderRadius: Metrics.measure(5),
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "#FFF",
    fontSize: Metrics.measure(14),
    fontWeight: "700",
  },
  error: {
    borderColor: "red",
    borderWidth: 1,
  },
});
