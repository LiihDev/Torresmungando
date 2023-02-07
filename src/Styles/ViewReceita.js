import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function ViewReceita() {
    return(
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Image
            source={null}
            style={styles.imagem}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagem: {
        backgroundColor: 'red',
        width: 100,
        height: 80,
    },
});