import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe"

export default function Receita({route}){

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const receita = route.params

    return(
        <ScrollView styles={styles.container}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={receita.id_video}
              onChangeState={onStateChange}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{receita.nome}</Text>
                <Text style={styles.creditos}>Por: {receita.por}</Text>
                <View style={styles.containerFilters}>
                <Text style={styles.filters}>Preparo: {receita.tempo}</Text>
                <Text style={styles.filters}>Rendimento: {receita.porcao} porções</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 22,
    },
    creditos: {
        fontSize: 15,
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
    }
})