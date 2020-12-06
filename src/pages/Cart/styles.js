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
    width: '16%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cartText: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: '14%',
    marginTop: '4%',
    fontWeight: 'bold'
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

  delete: {
    backgroundColor: '#999',
    borderRadius: 6,
    marginRight: 10,
    width: 50,
    height: 28,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  textDelete: {
    fontWeight: 'bold',
  },

  subtotal: {
    marginTop: 25,
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
    backgroundColor: '#300929',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '8%',
    width: '80%',
    marginTop: 22,
    borderRadius: 10,
    marginBottom: 10
  },

  buy: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})