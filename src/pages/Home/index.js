import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import CartIcon from '../../Components/cartIcon'
import styles from './styles'

import Product from '../../services/products[1447].json'

export default function Home() {
  let image = `../../assets/${Product.image}`
  const navigation = useNavigation()

  function navigateToCart() {
    navigation.navigate('Cart')
  }

  function sortFilter(){
    alert('sort')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.statusBar}>
        <Text style={styles.title}>E-commerce Games</Text>
      </View>

      <TouchableOpacity style={styles.buttonCart} onPress={navigateToCart}>
        <CartIcon style={styles.cart}/>
      </TouchableOpacity>

      <Text style={styles.filterBy}>Filtrar por:</Text>

        <View style={styles.filterList}>
          <TouchableOpacity style={styles.filter} onPress={sortFilter}>
            <Text style={styles.filterTextAlfabetica}>  Ordem Alfabética</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Score</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>Preço</Text>
          </TouchableOpacity>
        </View>


      <FlatList 
      data={Product} 
      style={styles.gameList} 
      keyExtractor={Product => String(Product.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: Product }) => (
      <View style={styles.game}>
        <Image style={styles.gameImg} source={image} />
        <Text style={styles.gameName}>{Product.name}</Text>

        <View style={styles.gameInfo}>
          <Text style={styles.gamePrice}>R$ {Product.price}</Text>
          <Text style={styles.gameScore}>Score: {Product.score}</Text>
        </View>
        
        <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
          <Text style={styles.buy}>Comprar</Text>
        </TouchableOpacity>
      </View>
      )}/>

    </View>
  )
}