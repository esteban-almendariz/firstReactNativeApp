import { View, TextInput, StyleSheet, Button } from "react-native"

const GoalInput = () => {

    const goalChangeHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalChangeHandler}
        />
        <Button 
          title='Add Goal'
        //   onPress={addGoalHandler}
        />
      </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: .2,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textInput: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        padding: 10,
      },
})

