import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../Styles/ViewReceita';

const receitaImagem = {
  panqueca: require('../../../assets/img/panqueca_carne.jpg'),
  camarao: require('../../../assets/img/camarao_moranga.jpg'),
  risoto: require('../../../assets/img/medalhao_file_risoto.jpg'),
  lasanha: require('../../../assets/img/lasanha.jpg'),
  frango: require('../../../assets/img/fricace_frango.jpg'),
}

export default function Principal({ navigation }) {

  function goToReceitas() {
    navigation.navigate("Veganos")
  }

  return (
    <ScrollView>
      {receitas.principal.map((principais) => {
        return(
          <ViewReceita 
          titulo={principais.nome}
          image={receitaImagem[principais.img]}
          receita={goToReceitas}
          />
        );
      })}
    </ScrollView>
  );
}