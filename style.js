import { StyleSheet } from "react-native";


export default StyleSheet.create({
  cointainer: { flex: 1 },
  Header_style: { flex: 1, backgroundColor: "red" },
  Text_style: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    alignSelf: "center",
    alignItems: "center"
  },
  AMB_style: { height: 50, width: 50, borderWidth: 1, margin: 10 },
  Signal_style: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 1,
    margin: 10
  },
  Signal_style_active: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 1,
    margin: 10,
    backgroundColor: "green",
    borderColor: "green"
  },
  Signal_style_block: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 1,
    margin: 10,
    backgroundColor: "red",
    borderColor: "red"
  },
  Timer_style: { margin: 10 }
});
