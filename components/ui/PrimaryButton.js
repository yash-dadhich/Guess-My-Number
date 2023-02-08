import { View, Text, StyleSheet, Pressable } from "react-native"
import Colors from "../../constants/colors"

function PrimaryButton({ children, onPress }) {
  //   function pressHandler() {
  //     console.log("Pressed..!")
  //   }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 16,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary600,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
})
