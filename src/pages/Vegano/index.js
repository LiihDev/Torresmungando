import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../Styles/ViewReceita';

const receitaImagem = {
  boloAbacaxi: require('../../../assets/img/bolo_abacaxi.jpg'),
  tortaMorango: require('../../../assets/img/torta_de_morango.jpg'),
  bolinhoArroz: require('../../../assets/img/bolinho_de_arroz_vegan.jpg'),
  croqueteMandioca: require('../../../assets/img/croquete_mandioca.jpg'),
  geleiaManga: require('../../../assets/img/geleia_manga_vegan.jpg'),
}

export default function Vegano({ navigation }) {
  
  function goToReceitas() {
    navigation.navigate("Entradas")
  }

  return (
    <ScrollView>
      {receitas.vegano.map((veganos)  => {
        return (
          <ViewReceita 
            titulo={veganos.nome}
            image={receitaImagem[veganos.img]}
            receita={goToReceitas}
          />
        );
      })}
    </ScrollView>
  );
}
