import React  from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

export default function Usuário() {
    

    return (
        <LinearGradient
        colors={['#00FFFF', '#1782AF']}
        style={styles.container}
        >
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
                style={[styles.input, { textAlign: 'center' }]} 
                placeholder="ex: Lívia Maria"
            /> 
        </LinearGradient>
    );
}
