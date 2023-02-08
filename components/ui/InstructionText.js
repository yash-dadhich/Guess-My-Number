import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function InstructionText({ children, style }) {
  return <Text style={[styles.textInstruction, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  textInstruction: {
    fontFamily:'open-sans',
    color: Colors.secondary500,
    fontSize: 20,
  },
})
