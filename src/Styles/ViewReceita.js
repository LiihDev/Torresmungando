import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from "react-native";;

export default function ViewReceita( props ) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.receita}>
                <ImageBackground source={props.image} resizeMode="cover" style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>{props.titulo}</Text>
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
        backgroundColor: 'blue',
        borderRadius: 10,
        borderBottomStartRadius: 0,
      },
      text: {
        color: '#fff',
        backgroundColor: '#339989',
        width: 170,
        paddingTop: 2,
        paddingLeft: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }
});