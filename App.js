
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your course goal!'
        />
        <Button 
          title='Add Goal'
        />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      <View>
        <Text>1</Text>
      </View>
      <View>
        <Text>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row'
  }
});
