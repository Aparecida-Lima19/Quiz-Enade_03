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

    {
          question: "QUESTÃO 1 (ENADE 2011) Retrato de uma princesa desconhecida Para que ela tivesse um pescoço tão fino Para que os seus pulsos tivessem um quebrar de caule Para que os seus olhos fossem tão frontais e limpos Para que a sua espinha fosse tão direita E ela usasse a cabeça tão erguida Com uma tão simples claridade sobre a testa Foram necessárias sucessivas gerações de escravos De corpo dobrado e grossas mãos pacientes Servindo sucessivas gerações de príncipes Ainda um pouco toscos e grosseiros Ávidos cruéis e fraudulentos Foi um imenso desperdiçar de gente Para que ela fosse aquela perfeição Solitária exilada sem destino ANDRESEN, S. M. B. Dual. Lisboa: Caminho, 2004. p. 73. No poema, a autora sugere que",
          options: ["A os príncipes e as princesas são naturalmente belos." ,                                                                                                                                      "B os príncipes generosos cultivavam a beleza da princesa." ,                                                                                                                                      "C a beleza da princesa é desperdiçada pela miscigenação racial." ,                                                                                                                                      "D o trabalho compulsório de escravos proporcionou privilégios aos príncipes." ,                                                                                                                                      "E o exílio e a solidão são os responsáveis pela manutenção do corpo esbelto da princesa"],
          options: ["A os príncipes e as princesas são naturalmente belos." ,                                                                                                                                      "B os príncipes generosos cultivavam a beleza da princesa." ,                                                                                                                                      "C a beleza da princesa é desperdiçada pela miscigenação racial." ,                                                                                                                                      "D o trabalho compulsório de escravos proporcionou privilégios aos príncipes." ,                                                                                                                                      "E o exílio e a solidão são os responsáveis pela manutenção do corpo esbelto da princesa"],
          correctOption: ""
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
