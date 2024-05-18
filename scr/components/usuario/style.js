import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    topoTitle: {
        color: '#FFFFFF',
        fontSize: 70,
        fontFamily: 'FasterOne_400Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subTitle:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    innerContainer: {
        flex: 3,
        width: "100%",
        alignItems: 'center'
    },
    input: {
        width: "80%",
        backgroundColor: "#FFF",
        borderColor: '#CCCCCC',
        borderWidth: 1,
        height: '10%',
        marginBottom:'15%',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    pickerContainer: {
        width: '80%',
        height: '10%',
        borderWidth: 1, 
        borderRadius: 30, 
        borderColor: '#CCCCCC', 
        overflow: 'hidden',
        backgroundColor: '#FFF',
        marginBottom: 15, 
        
    },
    picker:{
        height:'100%',
        backgroundColor:'#FFF',
    },
    label: {
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft:'5%',
    },
    imgAluno:{
        opacity: 0.3,
        marginTop: 15,
    },
    button:{
        
        backgroundColor: '#054BFF',
        borderColor: '#CCCCCC',
        borderRadius: 30,
        borderWidth: 1,
        paddingVertical: 10,

        width: '40%',
        borderRadius: 30,
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
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }    
});

export default styles;

