import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe"

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function Receita({route}){

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const receita = route.params

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#339989" barStyle="dark-content" />
            <YoutubePlayer
            height={270}
            play={playing}
            videoId={receita.id_video}
            onChangeState={onStateChange}
            />
            <ScrollView>
                <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{receita.nome}</Text>
                    <View style={styles.containerCreditos}>
                    <Text style={styles.creditos}>Por</Text>
                    <Text style={styles.creditosPessoa}>{receita.por}</Text>
                    </View>
                    <View style={styles.containerFilters}>
                    <Text style={styles.filters}>Preparo: {receita.tempo}</Text>
                    <Text style={styles.filters}>Rendimento: {receita.porcao} porções</Text>
                    </View>
                </View>
                <View style={styles.containerReceita}>
                    <Text style={styles.titleReceita}>Ingredientes</Text>
                    {receita.ingredientes.map((ingredientes, index) => <Text key={index} style={styles.textReceita}>{`\u25CF ${ingredientes}`}</Text>)}
                </View>
                <View style={styles.containerReceita}>
                    <Text style={styles.titleReceita}>Modo de Preparo</Text>
                    {receita.modo_preparo.map((modo_preparo, index) => <Text key={index} style={styles.textReceita}>{`\u25CF ${modo_preparo}`}</Text>)}
                </View>
                </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#339989',
    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        padding: 20,
        paddingTop: 25,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    titleContainer: {
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    title: {
        fontSize: 22,
        fontFamily: 'Roboto_700Bold'
    },
    containerCreditos: {
        display: 'flex',
        flexDirection: 'row'
    },
    creditos: {
        fontSize: 15,
        fontFamily: 'Roboto_400Regular'
    },
    creditosPessoa: {
        color: '#339989',
        marginLeft: 5,
        fontFamily: 'Roboto_400Regular'
    },
    containerFilters: {
        display: 'flex',
        flexDirection: 'row',
    },
    filters: {
        fontSize: 12,
        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
        height: 25,
        margin: 5,
        padding: 15,
        paddingTop: 2,
        paddingBottom: 2,
        borderColor: '#339989',
        color: '#339989',
        fontFamily: 'Roboto_400Regular'
    },
    containerReceita: {
        margin: 10,
    },
    titleReceita: {
        fontSize: 18,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#339989',
        width: 330,
        padding: 1,
        margin: 10,
        fontFamily: 'Roboto_700Bold'
    },
    textReceita: {
        fontSize: 16,
        color: '#339989',
        margin: 5,
        paddingLeft: 10,
        fontFamily: 'Roboto_400Regular'
    }
})