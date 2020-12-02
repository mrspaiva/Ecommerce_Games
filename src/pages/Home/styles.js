import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: '#c4c4c4'
  },

  header: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    borderRadius: 14
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  }
})