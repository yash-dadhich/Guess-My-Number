import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: "#2b1313",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#2b1313",
    padding: 8,
  },
})
