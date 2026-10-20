// ==========================================================
// index. js - Qual é a boa?
// ==========================================================

// ETAPA 1 - TRAZER A FERRAMENTA (import)
import { useState, useEffect } from "react";
// View -> uma caixa, serve para agrupar e organizar as coisas
// Text -> Todo texto precisa estar dentro de um <text>
// TextInput -> um campo para digitar
// pressable -> qualquer coisa que da para tocar: nosso botao
// StyleSheet -> ferramenta para escrever os estilos 
import {View, Text, TextInput, Pressable, ScrollView, styleSheet } from "react-native";
import { cores } from "../data/tema"
import { Accelerometer } from "expo-sensors";
import * as Haptics from "expo-haptics";

const LIMITE_DE_FORCA = 1.8;
const TEMPO_ENTRE_SORTEIOS = 1000; //milissegundos: 1000 = 1 segundo

// ETAPA 01 - CRIAR A TELA

export default function Home(){
    //começa com 3 opcoes para ja ter o que sortear
    const [opcoes, setOpcoes] = useState(["Pipoca", "Paçoca", "Milho"]);
    //A opcao que foi sorteada. Comeca vazia ("") porque ainda nao sorteou
    const [resultado, setResultado] = useState("");
    // o que a pessoa esta digitando no campo, neste caso comeca vazio
    const [textoDigitado, setTextoDigitado] = useState("")

    // FUNCAO SORTEAR
    

}