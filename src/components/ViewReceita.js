import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from "react-native";


export default function ViewReceita({ navigation, data }) {
  const receitaImagem = {
    panqueca: require('../../assets/img/panqueca_carne.jpg'),
    camarao: require('../../assets/img/camarao_moranga.jpg'),
    baiao: require('../../assets/img/baiaoDois.jpeg'),
    lasanha: require('../../assets/img/lasanha.jpg'),
    frango: require('../../assets/img/fricace_frango.jpg'),
    batatinha: require('../../assets/img/batatinha.jpg'),
    camarao: require('../../assets/img/camarao_moranga.jpg'),
    cebola: require('../../assets/img/cebola_bacon.jpeg'),
    tomate: require('../../assets/img/compota_tomate.jpg'),
    salame: require('../../assets/img/salame_queijo_azeitona.jpg'),
    sanduiche: require('../../assets/img/damasco_creamchesse.jpg'),
    manjar: require('../../assets/img/manjar_coco.jpg'),
    tortaLimao: require('../../assets/img/torta_limao.jpg'),
    boloCenoura: require('../../assets/img/bolodecenoura.jpg'),
    mousse: require('../../assets/img/mousse_chocolate.jpg'),
    pudim: require('../../assets/img/pudim_leite.jpg'),
    boloAbacaxi: require('../../assets/img/bolo_abacaxi.jpg'),
    tortaMorango: require('../../assets/img/torta_de_morango.jpg'),
    bolinhoArroz: require('../../assets/img/bolinho_de_arroz_vegan.jpg'),
    croqueteMandioca: require('../../assets/img/croquete_mandioca.jpg'),
    geleiaManga: require('../../assets/img/geleia_manga_vegan.jpg'),
  }

  function goToReceitas() {
    navigation.navigate("Receita", data)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToReceitas}>
        <ImageBackground source={receitaImagem[data.img]} resizeMode="cover" style={styles.image} />
        <Text style={styles.text}>{data.nome}</Text>
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