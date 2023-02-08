import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"

function StartGameScreen({ onPickNumber }) {
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
    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 56,
    fontSize: 28,
    color: Colors.secondary500,
    borderBottomColor: Colors.secondary500,
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
