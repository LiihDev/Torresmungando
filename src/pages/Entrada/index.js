import React from 'react';
import { ScrollView } from 'react-native';

import ViewReceitas from '../../Styles/ViewReceita';
import { receitas } from '../../Receitas/receitas';

const receitaImagem = {
    batatinha: require('../../../assets/img/batatinha.jpg'),
    camarao: require('../../../assets/img/camarao_moranga.jpg'),
    cebola: require('../../../assets/img/cebola_bacon.jpeg'),
    tomate: require('../../../assets/img/compota_tomate.jpg'),
    salame: require('../../../assets/img/salame_queijo_azeitona.jpg'),
    sanduiche: require('../../../assets/img/damasco_creamchesse.jpg'),
};

export default function Entrada({ navigation }) {   

function goToReceitas() {
  navigation.navigate("Veganos");
}

  return (
    <ScrollView>
            {receitas.entrada.map((entradas) => {
                return(
                    <ViewReceitas 
                    titulo={entradas.nome}
                    image={receitaImagem[entradas.img]}
                    receita={goToReceitas}
                    />
                );
            })}
    </ScrollView>
  );
}