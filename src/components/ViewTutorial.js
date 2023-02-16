import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, ScrollView, StyleSheet, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { receitas } from "../Receitas/receitas";

export default function ViewTutorial( props ) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
        <>
          <YoutubePlayer
              height={300}
              play={playing}
              videoId={"iee2TATGMyI"}
              onChangeState={onStateChange}
          />
        </>
      <View style={styles.card}>
        <>
            <Text style={styles.title}>Titulo</Text>
            <Text style={styles.creditos}>Por: Sei lá</Text>
            <Text style={styles.items}>Preparo: xx minutos</Text>
            <Text style={styles.items}>Rendimento: xx porções</Text>
        </>
        <>
        <Text style={styles.titleTutorial}>Ingredientes</Text>
        <Text>8 Ovos</Text>
        </>
        <>
        <Text>Modo de Preparo</Text>
        <Text>Quebre os ovos</Text>
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 30,
    },
    title: {
      fontSize: 22,
    },
    creditos: {
      fontSize: 15,
    }
    
  });