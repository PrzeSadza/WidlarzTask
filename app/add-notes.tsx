import { View, Text, StyleSheet } from 'react-native';

export default function AddNotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddNotes Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});