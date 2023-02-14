import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import TabNavigation from './src/Routes/tab.routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigation />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});