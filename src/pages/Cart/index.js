import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import ArrowIcon from '../../Components/arrowIcon'

import { useCart } from '../../context/addCart'

export default function Cart() {
  const { del, cart, subtotal, frete, total } = useCart()

  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function confirm() {
    if(cart == 0) {
      alert('Não há produtos no carrinho')
    }else{
      alert('Compra confirmada')
    }
  }

  if(cart == 0) {
    alert('não há nada aqui')
  }

  return(
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.statusBar}>
          <Text style={styles.title}>E-commerce Games</Text>
        </View>

        <TouchableOpacity style={styles.back} onPress={navigateToHome}>
          <ArrowIcon />
        </TouchableOpacity>

        <Text style={styles.cartText}>CARRINHO</Text>

        <FlatList 
        data={cart} 
        style={styles.gameList} 
        keyExtractor={Product => String(Product.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: Product }) => (
            <View style={styles.product}>
              <View>
              <Text style={styles.productName}>{Product.name}</Text>
              <Text style={styles.productName}>R$ {Product.price}</Text>
              </View>
              <TouchableOpacity style={styles.delete} onPress={() => del(Product)}>
                <Text style={styles.textDelete}>X</Text>
              </TouchableOpacity>
            </View>
        )}/>

        <View style={styles.subtotal}>
          <Text style={styles.subtotalText}>Subtotal:</Text>
          <Text style={styles.subtotalValue}>R$ {subtotal}</Text>
        </View>

        <View style={styles.frete}>
          <Text style={styles.freteText}>Frete:</Text>
          <Text style={styles.freteValue}>R$ {frete}</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalValue}>R$ {total}</Text>
        </View>

        <TouchableOpacity style={styles.buyButton} onPress={confirm}>
          <Text style={styles.buy}>Confirmar</Text>
        </TouchableOpacity>
    </View>
  )
}