import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayContainer: {
        flex: 1,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    topo: {
        flex: 1,
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
    subTitle: {
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
        alignItems: 'center',
        paddingHorizontal: '10%',
        justifyContent: 'center',
    },
    input: {
        width: "80%",
        backgroundColor: "#FFF",
        borderColor: '#CCCCCC',
        borderWidth: 1,
        height: 50,
        marginBottom: 15,
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    pickerContainer: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#CCCCCC',
        overflow: 'hidden',
        backgroundColor: '#FFF',
        marginBottom: 15,
    },
    picker: {
        height: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    imgAluno: {
        width: '100%',
        height: '100%',
        opacity: 0.3,
    },
    button: {
        backgroundColor: '#054BFF',
        borderColor: '#CCCCCC',
        borderRadius: 30,
        borderWidth: 1,
        paddingVertical: 10,
        width: '40%',
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
