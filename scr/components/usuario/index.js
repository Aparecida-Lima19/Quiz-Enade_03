import React  from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

export default function Usuário() {
    

    return (
        <View>
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
                style={[styles.input, { textAlign: 'center' }]} 
                placeholder="ex: Lívia Maria"
            /> 
        </View>
    );
}