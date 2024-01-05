
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
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
      {text: enteredGoalText, key: Math.random().toString()}
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
          <FlatList data={goalList} renderItem={itemData => {
              return (
                  <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              )
              
            }}
          />
      </View>
      
      
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
  goalsContainer: {
    marginTop: 25,
    flex: 5
  },
  goalItem: {
    backgroundColor:'#5e0acc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10
  },
  goalText: {
    color:'white'
  }
});
