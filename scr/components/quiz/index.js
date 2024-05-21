import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madrid"],
        correctOption: "Paris"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "O2", "H2O2"],
        correctOption: "H2O"
    },
    // Adicione mais perguntas conforme necessário
];

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigation = useNavigation();

    const handleOptionPress = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].correctOption) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigation.navigate('Result', { score, totalQuestions: questions.length });
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <LinearGradient colors={['#00EFFF', '#00E0FF', '#174BAF']} style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{currentQuestion.question}</Text>
                {currentQuestion.options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleOptionPress(option)}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </LinearGradient>
    );
}
