import {StyleSheet} from 'react-native'; 

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14182F',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    bigText: {
      color: '#fff',
      fontSize: 45,
      fontWeight: 'bold',
    },
    smallText: {
      color: '#fff', 
      fontSize: 25,
    },
    textInput: {
      borderWidth: 2,
      borderColor: '#fff', 
      width: 350,
      height: 60,
      marginTop: 50, 
      borderRadius: 5,
      fontSize: 25,
      backgroundColor:'#fff',
    },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 15,
      color: '#fff',
     
    },
    pressableActive: {
      backgroundColor:'#4167FF',
      marginTop: 50, 
      minWidth: 350,
      borderRadius: 5,
      alignItems: 'center',
    },
    pressableNotActive: {
      backgroundColor:'gray', 
      marginTop: 50,
      minWidth: 350,
      borderRadius: 5,
      alignItems: 'center',
    }
  }); 