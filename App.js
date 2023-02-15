import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import TabNavigation from './src/Routes/tab.routes';
import ViewTutorial from './src/Styles/ViewTutorial';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TabNavigation /> */}
      <ViewTutorial />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});