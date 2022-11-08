import React, { useState, Component, useEffect, useRef } from 'react';
import {
  Text, View, TouchableOpacity, Alert, FlatList,
  Animated
} from 'react-native';
import styles from './Styles';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default function App() {
  var [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    console.log('executando useEffect');
    mostrarImagem(); //necessário método pois aqui não pode utilizar await...
  },[]);


  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true,
    }).start();
  }

  function mostrarImagem() {
    var startPage = page;

    for(let i = startPage; i < startPage + 8; i++){
      
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  
      console.log(endpoint)
  
      fetch(endpoint)
        .then(resposta => resposta.json())
        .then(json => {
          const pokemon = {
            nome: json.name,
            img: json.sprites.other["official-artwork"].front_default,
            peso: json.weight,
          };
  
          data.push(pokemon);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
    }
    setPage(startPage + 8);
    // console.log(data);
    // console.log("");
  }

  function ListItem({ data }) {
    return (
      <View style={styles.pokemonBox}>
        <Text style={styles.pokemonNome}>Nome: {data.nome}</Text>
        <Text style={styles.pokemonPeso}>Peso: {data.peso}</Text>

        <ImageLoader source={{ uri: data.img }} style={styles.pokemonImg} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Pokemon's</Text>
      </View>
      
      <FlatList
        data={data}
        renderItem={ ({item}) => <ListItem data={item}/>}
        onEndReached={mostrarImagem}
        onEndReachedThreshold={0.1}
      />
    </View>


  );
}