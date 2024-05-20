import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerTopo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'yellow',
    width:'100%',
  },
  containerItens: {
    flex: 1.5,
    backgroundColor:'#FFF',
    width:'100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingStart:'5%',
    paddingEnd: '5%',
    alignItems: 'center'
  },
  textTop:{
    color: '#FFFFFF',
    fontSize: 50,
    fontFamily: 'FasterOne_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: '35%'
    
  },
  textPergunta:{ 
    fontFamily: 'Roboto_400Regular',
    fontSize:30,
    marginTop: '20%'
    
  },
  checkItens:{
    marginBottom: 15,
  },
  containerCheck:{
    backgroundColor: '#174BAF',
        margin: '5%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    
    
  },
  checkboxText: {
      fontSize: 16,
      color: 'white',
  },
  body: {
    marginTop: 20,
    alignItems: 'center',
},
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  playButton: {
    backgroundColor: '#2089DC',
    padding: 15,
    borderRadius: 5,
    fontFamily: 'Roboto_700Bold',
  },
  });
  export default styles;