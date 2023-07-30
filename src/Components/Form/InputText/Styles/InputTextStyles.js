import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: Metrics.measure(15),
    width: Metrics.measure(330),
    height: Metrics.measure(130),
    margin: Metrics.measure(12),
    padding: Metrics.measure(10),
    backgroundColor: "#b3175e",
    borderRadius: Metrics.measure(5),
    fontSize: Metrics.measure(12),
    color: "#FFF",
    paddingTop: Metrics.measure(15),
  },
});
