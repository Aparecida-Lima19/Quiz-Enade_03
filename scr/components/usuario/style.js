import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: "80%",
        alignItems: 'center',
    },
    input: {
        width: "70%",
        backgroundColor: "#DCDCDC",
        height: 35,
        marginVertical: 15,
        paddingLeft: 10,
        borderRadius: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button:{
        
        backgroundColor: '#054BFF',
        borderRadius: 30,
        paddingVertical: 8,
        width: '30%',
        margin:'20%',
        borderRadius: 30,
        marginBottom: 20,
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

