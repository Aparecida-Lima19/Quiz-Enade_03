import React from "react";
import {View, Text, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export default function Acesso(){
    return(
        <LinearGradient
        colors={['#00EFFF', '#00E0FF', '#174BAF']}
        style={styles.container}>
            <View>
                <Text>Tela De Escolha de</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})