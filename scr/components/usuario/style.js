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
});

export default styles;

