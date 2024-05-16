import React  from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "./style";

export default function Usuário() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
                style={[styles.input, { textAlign: 'center' }]} 
                placeholder="ex: Lívia Maria"
            /> 
        </View>
    );
}
