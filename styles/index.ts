import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    fontWeight: "100",
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    marginTop: 10,
    height: 100,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    marginTop: 10,
    width: "40%",
    textAlign: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  card: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    borderRadius: 5,
    borderColor: "lightgray",
    padding: 10,
  },
});

export default styles;
