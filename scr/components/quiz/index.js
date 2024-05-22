import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';

export default function Quiz() {
    const route = useRoute();
    const { questions } = route.params || { questions: [] };
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigation = useNavigation();

    if (questions.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Nenhuma pergunta disponível</Text>
            </View>
        );
    }

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
