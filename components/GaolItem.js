import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const GoalItem = ({onDeleteItem, id, text}) => {
    return (
            <Pressable onPress={onDeleteItem.bind(this, id)}>
                <View style={styles.goalItem}>
                    <Text style={styles.goalText}>{text}</Text>
                </View>
            </Pressable>
    )
}

const styles = StyleSheet.create({
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