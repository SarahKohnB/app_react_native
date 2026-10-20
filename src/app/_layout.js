// ==========================================================
// A "MOLDURA" que envolve todas as telas do app
// ==========================================================

//CONCEITO: import
//"Import" traz para ca uma ferramenta que outra pessoa já criou

//Stack: "pilha de telas". Quando o app tem várias telas, uma abre por cima da outra, como cartas empilhadas. Vem do pacote expo-router.
 import { Stack } from "expo-router";

//Statusbar = a barra la em cima do celular (relogio, bateria, sinal)
 import { StatusBar } from "expo-status-bar";

 //CONCEITO:
 //No react native, cada pedaço de tela é um componente
 //Um componente é so uma FUNCAO que devolve (return) e que aparece

 //essa função default é a funcao principal deste arquivo, é assim que o Expo Router encontra o layout

 export default function layout() {
    return (
        <>
            {/* StatusBar: style="light" deixa o relogio e bateria brancos */}
            <StatusBar style="light"/>
            {/* Stack: a pilha de telas */}        
            {/* ScreenOptions: opcoes que valem para todas telas */}        
            {/* headerShown: esconde a barra de titulo que o expo colocar no topo por
            padrao */}
            <Stack screenOptions={{ headerShown: false}}/>        
            </>
    );
 }