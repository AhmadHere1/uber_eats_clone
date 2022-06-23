
import { NativeStackView } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavContainer } from './src/services/navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <NavContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
