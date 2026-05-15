import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { estilos } from './src/styleSheet/estilos';
import Cabecalho from './src/componentes/Cabecalho';
import Conteudo from './src/componentes/Conteudo';
import Rodape from './src/componentes/Rodape';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
