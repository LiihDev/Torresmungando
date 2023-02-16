import React from 'react';
import { ScrollView } from 'react-native';

import ViewReceita from '../../components/ViewReceita';
import { receitas } from '../../Receitas/receitas';

export default function Entrada({ navigation }) {   


  return (
    <ScrollView>
            {receitas.entrada.map((entradas, index) => {
                return(
                    <ViewReceita 
                    key={index}
                    data={entradas}
                    navigation={navigation}
                    />
                );
            })}
    </ScrollView>
  );
}