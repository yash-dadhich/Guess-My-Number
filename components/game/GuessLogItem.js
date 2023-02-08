import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 16,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
})
