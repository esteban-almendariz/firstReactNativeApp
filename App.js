
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goalList, setGoalList] = useState([])

  const goalChangeHandler = (enteredText) => {
      setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setGoalList(prevState => [
      ...prevState,
      enteredGoalText
    ])
  }

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.goalsContainer}>
        {goalList.map((goal,index) => <Text key={index} >{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    marginTop: 40
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 50,
    borderBottomWidth: .2,
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: "gray",
    width: "70%",
    borderWidth: 1,
    padding: 10,
  },
  goalsContainer: {
    marginTop: 25
  }
});
