import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: Metrics.measure(100),
    height: Metrics.measure(150),
    backgroundColor: "#b3175e",
    marginLeft: Metrics.measure(3),
    borderRadius: Metrics.measure(5),
    justifyContent: "center",
    alignItems: "center",
  },
  sample: {
    padding: Metrics.measure(15),
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    width: Metrics.measure(90),
    height: Metrics.measure(90),
  },
});
