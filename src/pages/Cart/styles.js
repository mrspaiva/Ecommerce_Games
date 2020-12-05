import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbcbc',
  },

  statusBar: {
    height: '12%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fafafa',
    marginBottom: 20
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },

  back: {
    marginTop: 15,
    marginLeft: 10
  },

  cartText: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: '20%',
    marginTop: '8%'
  },

  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },

  productName: {
    marginLeft: 20,
    fontWeight: 'bold'
  },

  productDelete: {
    marginRight: 20,
    fontWeight: 'bold'
  },

  subtotal: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  subtotalText: {
    fontSize: 18
  },

  frete: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#999'
  },

  freteText: {
    fontSize: 18
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },

  totalText: {
    fontWeight: 'bold',
    fontSize: 20
  },

  totalValue: {
    fontWeight: 'bold',
    fontSize: 20
  },

  buyButton: {
    backgroundColor: '#e04999',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '8%',
    width: '80%',
    marginTop: 30,
    borderRadius: 10
  },

  buy: {
    color: '#fff',
    fontSize: 20
  }
})