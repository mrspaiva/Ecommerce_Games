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
    color: '#000'
  },

  buttonCart: {
    width: 56,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 50
  },

  filterBy: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10
  },

  filterList: {
    flexDirection: 'row'
  },

  filter: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    borderRadius: 10,
  },
  
  filterText: {
    flexDirection:'column',
    fontWeight: 'bold', 
    flexWrap: 'wrap',
  },

  filterTextAlfabetica: {
    marginHorizontal: '13%',
    fontWeight: 'bold', 
    marginBottom: 8,
  },

  gameList: {
    marginTop: 38,
  },

  game: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#fafafa',
    justifyContent: 'space-around'
  },

  gameImg: {
    width: 200,
    height: 200, 
    alignSelf: 'center',
  },

  gameName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },

  gamePrice: {
    fontSize: 20,
  },

  gameScore: {
    fontSize: 20,
  },

  buyButton: {
    backgroundColor: '#e02000',
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    width: '50%'
  },

  buy: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})