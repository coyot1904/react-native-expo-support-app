import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: Metrics.measure(330),
    backgroundColor: "#b3175e",
    height: Metrics.measure(50),
    borderRadius: Metrics.measure(5),
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: Metrics.measure(14),
  },
});
