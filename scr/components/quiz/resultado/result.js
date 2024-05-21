import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';


export default function Result() {
    const navigation = useNavigation();
    const route = useRoute();
    const { score, totalQuestions } = route.params;

    return (
        <LinearGradient colors={['#00EFFF', '#00E0FF', '#174BAF']} style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Você acertou {score} de {totalQuestions} perguntas!</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Acesso')}>
                    <Text style={styles.buttonText}>Voltar ao Início</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
