import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const GoalItem = ({onDeleteItem, id, text}) => {
    return (
            <View style={styles.goalItem}>
                <Pressable 
                    onPress={onDeleteItem.bind(this, id)}
                    style={({pressed}) => pressed && styles.pressedItem}    
                >
                    <Text style={styles.goalText}>{text}</Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
      goalItem: {
        backgroundColor:'#5e0acc',
        borderRadius: 6,
        marginBottom: 10
      },
      goalText: {
        color:'white',
        padding: 8
      },
      pressedItem: {
        opacity: .5
      }
})

export default GoalItem