import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../components/ViewReceita';

const receitaImagem = {
  
}

export default function Sobremesa({ navigation }) {
  return (
    <ScrollView>
        {receitas.sobremesa.map((sobremesas, index) => {
                return(
                    <ViewReceita 
                    key={index}
                    data={sobremesas}
                    navigation={navigation}
                    />
                );
            })}
    </ScrollView>
  );
}
