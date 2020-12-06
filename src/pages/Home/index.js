import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import CartIcon from '../../Components/cartIcon'
import styles from './styles'
import Product from '../../services/products[1447].json'
import { useCart } from '../../context/addCart'

export default function Home() {
  const [product, setProduct] = useState(Product)

  const { add } = useCart()

  const navigation = useNavigation()
  function navigateToCart() {
    navigation.navigate('Cart')
  }

  function sortName() {
    let data = Product
    let byName = ((object) => {
      return object.name
    })
    let data1 = (data.map(byName));
    let data2 = data1.sort()
    alert(data2)
  }

  function sortScore() {
    let data = Product
    let byScore = ((object) => {
      return object.score
    })
    let data1 = (data.map(byScore));
    let data2 = data1.sort()
    alert(data2)
  }

  function sortPrice(){
    let data = Product
    let byPrice = ((object) => {
      return object.price
    })
    let data1 = (data.map(byPrice));
    let data2 = data1.sort()
    alert(data2)
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
          <TouchableOpacity style={styles.filter} onPress={sortName}>
            <Text style={styles.filterTextAlfabetica}>  Ordem Alfabética</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter} onPress={sortScore}>
            <Text style={styles.filterText}>Score</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter} onPress={sortPrice}>
            <Text style={styles.filterText}>Preço</Text>
          </TouchableOpacity>
        </View>

      <FlatList 
      data={product} 
      style={styles.gameList} 
      keyExtractor={Product => String(Product.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: Product }) => (
        <View style={styles.game}>
        <Image style={styles.gameImg} source={{uri: `${Product.image}`}} 
        />
        <Text style={styles.gameName}>{Product.name}</Text>

        <View style={styles.gameInfo}>
          <Text style={styles.gamePrice}>R$ {Product.price}</Text>
          <Text style={styles.gameScore}>Score: {Product.score}</Text>
        </View>
        
        <TouchableOpacity style={styles.buyButton} onPress={() => add(Product)}>
          <Text style={styles.buy}>Comprar</Text>
        </TouchableOpacity>
      </View>
      )}/>

    </View>
  )
}