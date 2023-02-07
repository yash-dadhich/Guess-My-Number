import { useState } from "react"
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("")

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
    console.log(enteredNumber)
  }

  function resetInputHandler() {
    setEnteredNumber("")
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show alert...
      Alert.alert(
        "Invalid Number !",
        "Number must be a number between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      )
      return
    }
    console.log(chosenNumber + " is a Valid Number")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: "#410121",
    borderRadius: 12,
    elevation: 12,
    shadowRadius: 6,
    shadowColor: "#310219",
    shadowOpacity: 0.35,
    shadowOffset: { width: 4, height: 6 },
  },
  numberInput: {
    height: 50,
    width: 56,
    fontSize: 28,
    color: "#d5d843",
    borderBottomColor: "#d5d843",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})
