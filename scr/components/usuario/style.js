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
    Button:{
        position :'absolute',
        width: '80%',
        height: 40,
        borderWidth: 8,
        borderRadius: 30,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '##0FB1CD',
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
    }


    
    
});

export default styles;

