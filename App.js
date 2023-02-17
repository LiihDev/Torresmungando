import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import TabNavigation from './src/Routes/top.routes';
import MyStack from './src/Routes/stack.routes';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyStack/>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});