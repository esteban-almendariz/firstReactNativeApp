
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GaolItem';
import GoalInput from './components/GaolInput';

export default function App() {

  const [goalList, setGoalList] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (goal) => {
    setGoalList(prevState => [
      ...prevState,
      {text: goal, id: Math.random().toString()}
    ])
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    setGoalList(prevState => {
      return goalList.filter(goal => goal.id !== id )
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      <GoalInput 
          addGoal={addGoalHandler}  
          visible={modalIsVisible}
          endGoal={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={itemData => {
              return (
                <GoalItem 
                  onDeleteItem={deleteGoalHandler}    
                  id={itemData.item.id}
                  text={itemData.item.text}
                />  
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
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
  goalsContainer: {
    marginTop: 25,
    flex: 5
  },
});
