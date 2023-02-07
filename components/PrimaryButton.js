import { View, Text, StyleSheet, Pressable } from "react-native"
function PrimaryButton({ children, onPress }) {
//   function pressHandler() {
//     console.log("Pressed..!")
//   }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed? [styles.buttonInnerContainer , styles.pressed]: styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#f152a7" }}
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
    borderRadius: 8,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: "#8a104d",
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  pressed:{
    opacity:0.75,
  },
})
