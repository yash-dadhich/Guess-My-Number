import { StyleSheet, View, Text } from "react-native"
import Colors from "../../constants/colors"

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer  

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily:'open-sans-bold',
    color: Colors.primary600,
    fontSize: 36,
    
  },
})
