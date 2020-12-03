import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  function navigateToCart() {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.statusBar}>
        <Text style={styles.title}>E-commerce Games</Text>
      </View>

      <TouchableOpacity style={styles.buttonCart} onPress={navigateToCart}>
        <Text>CARRINHO</Text>
      </TouchableOpacity>

      <Text style={styles.filterBy}>Filtrar por:</Text>

        <View style={styles.filterList}>
          <View style={styles.filter}>
            <Text style={styles.filterTextAlfabetica}>  Ordem Alfabética</Text>
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Score</Text>
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Preço</Text>
          </View>
        </View>


      <FlatList 
      data={[1, 2, 3, 4, 5, 6]} 
      style={styles.gameList} 
      keyExtractor={game => String(game)}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <View style={styles.game}>
        <Image style={styles.gameImg} source={require('../../assets/call-of-duty-wwii.png')} />
        <Text style={styles.gameName}>Call Of Duty</Text>

        <View style={styles.gameInfo}>
          <Text style={styles.gamePrice}>R$ 80,00</Text>
          <Text style={styles.gameScore}>Score: 100</Text>
        </View>
        
        <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
          <Text style={styles.buy}>Comprar</Text>
        </TouchableOpacity>
      </View>
      )}/>

    </View>
  )
}