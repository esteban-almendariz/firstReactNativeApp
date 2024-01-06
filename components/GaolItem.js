import { View, Text, FlatList, StyleSheet } from "react-native";

const GoalItem = ({goalList}) => {
    return (
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
    )

}

const styles = StyleSheet.create({
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
})

export default GoalItem