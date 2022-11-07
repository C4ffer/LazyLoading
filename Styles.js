import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginTop: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
    width: '100%',
    height:  '100%',
    },

    botao: {
        width: '30%',
          height: 50,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FD9A1B',
          marginBottom: 10
  
      },
      inputPokemon:{
        borderColor: "#FD9A1B",
        borderWidth: 3,
        height: 45,
        width: 222,
        borderRadius: 10,
        // fontFamily: 'Rosario',
        color: '#5f5f5f',
        fontSize: 20,
        margin: 5,
      },
  
    topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#e73e33' },
    topoTitulo: { fontSize: 22, marginBottom: 10, color: '#fff', textAlign: 'center'},
  
    cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
    cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },
  
    pokemonBox: { alignItems: 'center' },
    pokemonNome: { fontSize: 22 },
    pokemonPeso: { fontSize: 18 },
    pokemonImg:{ width: 150, height: 150,}
  });
  export default styles;