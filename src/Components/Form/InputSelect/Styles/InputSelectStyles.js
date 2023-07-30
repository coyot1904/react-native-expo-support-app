import { StyleSheet } from "react-native";
import Metrics from "../../../../Assets/Constants/Metrics";

export default StyleSheet.create({
  container: {
    width: Metrics.measure(220),
    height: Metrics.measure(150),
    backgroundColor: "#b3175e",
    marginLeft: Metrics.measure(10),
    borderRadius: Metrics.measure(5),
    paddingTop: Metrics.measure(10),
  },
  itemContainer: {
    marginLeft: Metrics.measure(15),
    marginTop: Metrics.measure(20),
    flexDirection: "row",
  },
  selectInputText: {
    fontSize: Metrics.measure(14),
    color: "#FFF",
  },
  approveIcon: {
    width: Metrics.measure(14),
    height: Metrics.measure(14),
    marginLeft: Metrics.measure(14),
  },
});
