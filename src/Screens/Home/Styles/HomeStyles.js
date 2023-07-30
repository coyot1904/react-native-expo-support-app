import { StyleSheet } from "react-native";
import Metrics from "../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingLeft: Metrics.measure(15),
    paddingRight: Metrics.measure(15),
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: Metrics.measure(15),
  },
});
