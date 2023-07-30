import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  modal: {
    width: "100%",
    padding: Metrics.measure(15),
    alignItems: "center",
    justifyContent: "center",
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
  modalContainer: {
    backgroundColor: "#FFF",
    width: Metrics.measure(320),
    borderRadius: Metrics.measure(10),
    minHeight: Metrics.measure(115),
    marginTop: Metrics.measure(20),
    overflow: "hidden",
  },
});
