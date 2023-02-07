import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ViewReceita from '../../Styles/ViewReceita';

export default function Entrada() {
  return (
    <View style={styles.container} >
      <ViewReceita />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});