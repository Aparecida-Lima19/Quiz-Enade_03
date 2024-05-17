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
        width: "80%",
    },
    topoTitle: {
        color: '#FFFFFF',
        fontSize: 50,
        fontFamily: 'FasterOne_400Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    innerContainer: {
        flex: 2,
        width: "80%",
        justifyContent: 'center',
        
    },
    input: {
        width: "100%",
        backgroundColor: "#FFF",
        borderColor: '#CCCCCC',
        borderWidth: 1,
        height: '8%',
        marginBottom:'15%',
        borderRadius: 10,
    },
    pickerContainer: {
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: '#CCCCCC', 
        overflow: 'hidden', 
        
    },
    picker:{
        width: '100%',
        height: '8%',
        backgroundColor:'#FFF',
    },
    label: {
        jjustifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft:'5%',
    },
    button:{
        
        backgroundColor: '#054BFF',
        borderColor: '#CCCCCC',
        borderRadius: 30,
        borderWidth: 1,
        paddingVertical: 10,
        marginTop:'20%',
        marginLeft:'30%',
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

