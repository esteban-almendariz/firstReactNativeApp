import { View, TextInput, StyleSheet, Button, Modal } from "react-native"
import { useState } from "react"

const GoalInput = ({addGoal, visible, endGoal}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')
    
  
    const goalChangeHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        addGoal(enteredGoalText)
        setEnteredGoalText('')
    }
  

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalChangeHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                    title='Add Goal'
                    onPress={addGoalHandler}
                    />
                    <Button title="Cancel" onPress={endGoal}/>
                </View>
            </View>
        </Modal>
        
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: .2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        padding: 10,
      },
      buttonContainer: {
        flexDirection: 'row'
      }
})

