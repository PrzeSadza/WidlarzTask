import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import Card from '../components/card';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
      <Link href="/search">Go to Search</Link>
      {/* <Card /> */}
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