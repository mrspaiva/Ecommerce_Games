import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

import ArrowIcon from '../../Components/arrowIcon'

export default function Cart() {
  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
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

        <View style={styles.product}>
          <Text style={styles.productName}>PRODUTO</Text>
          <Text style={styles.productDelete}>X</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productName}>PRODUTO</Text>
          <Text style={styles.productDelete}>X</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productName}>PRODUTO</Text>
          <Text style={styles.productDelete}>X</Text>
        </View>

        <View style={styles.subtotal}>
          <Text style={styles.subtotalText}>Subtotal:</Text>
          <Text style={styles.subtotalValue}>R$ 120</Text>
        </View>

        <View style={styles.frete}>
          <Text style={styles.freteText}>Frete:</Text>
          <Text style={styles.freteValue}>R$ 30</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalValue}>R$ 150</Text>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buy}>Comprar</Text>
        </TouchableOpacity>
    </View>
  )
}