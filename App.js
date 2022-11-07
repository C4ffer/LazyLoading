import React, { useState, Component } from 'react';
import {
  Text, View, TouchableOpacity, Alert,
  TextInput, Keyboard, ScrollView, Image, Animated
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
  const [pokemonEscolhido, setPokemonEscolhido] = useState(null);
  const [nomePokemon, setNomePokemon] = useState();
  const [placeholder, setPlaceHolder] = useState();

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

  function mostrarImagem(nomePokemon) {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}/`;

    console.log(endpoint)

    fetch(endpoint)
      .then(resposta => resposta.json())
      .then(json => {
        const pokemon = {
          nome: json.name,
          img: json.sprites.other["official-artwork"].front_default,
          peso: json.weight,
        };

        setPokemonEscolhido(pokemon);
        console.log(pokemonEscolhido)
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(texto) => setNomePokemon(texto)}
        style={styles.inputPokemon}
        placeholder='Nome Pokémon'
        value={nomePokemon} />
      <TouchableOpacity style={styles.botao}
        onPress={() => mostrarImagem(nomePokemon)}>
        <Text style={styles.textoBotoes}>Mostrar</Text>
      </TouchableOpacity>
      {pokemonEscolhido != null && (
        <View style={styles.pokemonBox}>
          <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido.nome}</Text>
          <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido.peso}</Text>

          <ImageLoader source={{ uri: pokemonEscolhido.img }} style={styles.pokemonImg} />
          {/* <Animated.Image
            onLoad={this.onLoad}
          /> */}
        </View>
      )}
    </View>
  );
}