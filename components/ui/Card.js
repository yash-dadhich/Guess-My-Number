import { View, StyleSheet } from "react-native"
import Colors from "../../constants/colors"
function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 12,
    elevation: 12,
    shadowRadius: 6,
    shadowColor: Colors.primary800,
    shadowOpacity: 0.35,
    shadowOffset: { width: 4, height: 6 },
  },
})
