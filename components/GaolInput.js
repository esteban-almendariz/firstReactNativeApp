

const GoalInput = () => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalChangeHandler}
        />
        <Button 
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
    )
}

export default GoalInput