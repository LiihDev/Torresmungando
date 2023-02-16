import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../components/ViewReceita';

const receitaImagem = {

}

export default function Vegano({ navigation }) {
  
  return (
    <ScrollView>
        {receitas.vegano.map((vegano, index) => {
                return(
                    <ViewReceita 
                    key={index}
                    data={vegano}
                    navigation={navigation}
                    />
                );
            })}
    </ScrollView>
  );
}
