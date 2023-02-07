import { StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});