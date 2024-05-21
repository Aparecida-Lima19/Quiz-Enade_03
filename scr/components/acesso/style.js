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

  textSub: {

  


  },
  textPergunta:{ 
    fontFamily: 'Roboto_400Regular',
    fontSize:30,
    marginTop: '20%'
    
  },
  checkItens:{
    //backgroundColor: 'green',
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '15%'
  },
  containerCheck:{
    //backgroundColor: '#174BAF',
        //margin: '5%',
        //borderRadius: 5,
        //padding: 10,
        //marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    
    
  },
  
  body: {
    backgroundColor: '#054BFF',
        borderColor: '#CCCCCC',
        borderRadius: 30,
        borderWidth: 1,
        paddingVertical: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
},
  buttonText: {
    fontSize: 25,
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    
  },
  playButton: {
    //backgroundColor: '#2089DC',
    padding: 1,
    borderRadius: 5,
    
  },
  });
  export default styles;