import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../Styles/ViewReceita';

const receitaImagem = {
  manjar: require('../../../assets/img/manjar_coco.jpg'),
  tortaLimao: require('../../../assets/img/torta_limao.jpg'),
  boloCenoura: require('../../../assets/img/bolodecenoura.jpg'),
  mousse: require('../../../assets/img/mousse_chocolate.jpg'),
  pudim: require('../../../assets/img/pudim_leite.jpg'),
}

export default function Sobremesa({ navigation }) {
  function goToReceitas() {
    navigation.navigate("Veganos");
  }

  return (
    <ScrollView>
      {receitas.sobremesa.map((sobremesas) => {
        return (
          <ViewReceita 
            titulo={sobremesas.nome}
            image={receitaImagem[sobremesas.img]}
            receita={goToReceitas}
          />
        );
      })}
    </ScrollView>
  );
}
