import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import ViewReceitas from '../../Styles/ViewReceita';

export default function Entrada({ navigation }) {

  const [items] = useState([
    {
        id: 1,
        tituloReceita: 'Pudim',
        image: require('../../../assets/favicon.png'),
    },
    {
        id: 2,
        tituloReceita: 'Bolo de ameixa',
        image: require('../../../assets/splash.png'),
    },
]);

function goToReceitas() {
  navigation.navigate("Veganos");
}

  return (
    <ScrollView style={styles.container}>
            <View
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                    {items.map((item) => {
                        return (
                            <ViewReceitas
                                key={item.id}
                                id={item.id}
                                titulo={item.tituloReceita}
                                image={item.image}
                                receita={goToReceitas}
                            />
                        );
                    })}
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  scrollContainer: {
      flex: 1,
  },
  itemsContainer: {
      flex: 1,
      marginTop: 10,
      padding: 20,
      borderRadius: 20,
  },
});