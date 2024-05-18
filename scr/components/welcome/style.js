import { StyleSheet } from 'react-native';
//Função para definir o container
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //Estilização para o container do titulo...
    containerTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'red',
    },
    //Estilização para o container do Logo...
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },

    //Estilização do text do titulo...
    title: {
        marginTop:'10%',
        color: '#FFFFFF',
        fontSize: 80,
        fontFamily: 'FasterOne_400Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },

    subTitle:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    //Estilização da logo...
    image: {
        resizeMode: 'contain', 
    },
    imgAluno:{
        opacity: 0.3,
    },
});
export default styles;