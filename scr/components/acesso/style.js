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
    flex: 1,
    backgroundColor:'#FFF',
    width:'100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingStart:'5%',
    paddingEnd: '5%',
  },
  textTop:{
    fontFamily: 'Roboto_700Bold',
  },
  textPergunta:{ 
    fontFamily: 'Roboto_400Regular',
  },
  checkItens:{
    marginBottom: 15,
  },
  containerCheck:{
    backgroundColor: '#174BAF',
        margin: '5%',
        borderRadius: 5,
        padding: 10,
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