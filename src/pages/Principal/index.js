import React from 'react';
import { ScrollView } from 'react-native';

import { receitas } from '../../Receitas/receitas';
import ViewReceita from '../../components/ViewReceita';


export default function Principal({ navigation }) {


  return (
    <ScrollView>
       {receitas.principal.map((principais, index) => {
                return(
                    <ViewReceita 
                    key={index}
                    data={principais}
                    navigation={navigation}
                    />
                );
            })}
    </ScrollView>
  );
}