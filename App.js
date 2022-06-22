
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { RestuarantDetailScreen } from './src/screens/RestuarantDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home />
       */}
      <RestuarantDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
