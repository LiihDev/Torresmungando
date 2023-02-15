import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from "react-native";;

export default function ViewReceita( props ) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.receita}>
                <ImageBackground source={props.image} resizeMode="cover" style={styles.image} />
                <Text style={styles.text}>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        margin: 15,
      },
      image: {
        width: 340,
        height: 145,
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        borderBottomStartRadius: 0,
      },
      text: {
        color: '#fff',
        backgroundColor: '#339989',
        width: 220,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }
});