import React, { useState, useEffect } from "react";
import {View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import * as SplashScreen from 'expo-splash-screen'; 
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one'; // Importar a fonte do Google

export default function Welcome() {
    // Definindo o estado para armazenar o tamanho da imagem
    const [size, setSize] = useState({ width: '20%', height: '30%' });
    const [aluno, setAluno] = useState({ width: '110%', height: '150%' });

    //Definindo a navegação de telas
    const navigation = useNavigation();

    // Carregando a fonte
    let [fontsLoaded] = useFonts({
        FasterOne_400Regular,
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <TouchableOpacity style={{ flex: 3 }} onPress={() => navigation.navigate('Usuario')}>
            <LinearGradient
                colors={['#00EFFF', '#00E0FF', '#174BAF']}
                style={styles.container}
                
            >
                
                
                <View style={styles.containerTitle}>
                    <Image
                        source={require('../../components/assets/Logo.png')}
                        style={[styles.image, { width: size.width, height: size.height }]}
                    /> 
                    <Text style={styles.title}>ENADE</Text>
                    <Text style={styles.subTitle}>SIMULADO - 2024</Text>
                </View>

                <View style={styles.containerLogo}>
                    <Image 
                        style={[styles.imgAluno, { width: aluno.width, height: aluno.height }]}
                        source={require('../../components/assets/Alunos.png')}
                    />                               
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}