
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GaolItem';
import GoalInput from './components/GaolInput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goalList, setGoalList] = useState([])

  const goalChangeHandler = (enteredText) => {
      setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setGoalList(prevState => [
      ...prevState,
      {text: enteredGoalText, key: Math.random().toString()}
    ])
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput />
      <GoalItem goalList={goalList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
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
});
