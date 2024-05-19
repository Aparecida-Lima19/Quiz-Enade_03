import React from "react";
import {View, Text, Pressable  } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

export default function Acesso(){
    return(
        <LinearGradient
        colors={['#00EFFF', '#00E0FF', '#174BAF']}
        style={styles.container}>
            <View style={styles.containerTopo}>
                <Text>Tela De Escolha de</Text>
            </View>
            <View style={styles.containerItens}>
                <Text>Tela De Escolha de</Text>
                <View style={styles.body}>
                    <Pressable style={styles.playButton}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}

