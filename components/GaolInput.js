import { View, TextInput, StyleSheet, Button, ScrollView } from "react-native"
import { useState } from "react"

const GoalInput = ({addGoal}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')
    
  
    const goalChangeHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        addGoal(enteredGoalText)
        setEnteredGoalText('')
    }
  

    return (
        <ScrollView>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalChangeHandler}
                    value={enteredGoalText}
                />
                <Button 
                title='Add Goal'
                onPress={addGoalHandler}
                />
            </View>
        </ScrollView>
        
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

