import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: Metrics.measure(15),
    paddingRight: Metrics.measure(15),
    marginTop: Metrics.measure(15),
    flexDirection: "row",
  },
  menuIcon: {
    width: Metrics.measure(24),
    height: Metrics.measure(24),
  },
  menuText: {
    color: "#FFF",
    fontSize: Metrics.measure(14),
    fontWeight: "700",
    marginLeft: Metrics.measure(10),
    marginTop: Metrics.measure(3),
  },
});
