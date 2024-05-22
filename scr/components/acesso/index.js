import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import styles from './style';
import CheckBox from './checkBox';

SplashScreen.preventAutoHideAsync();

export default function Acesso() {
    const [fontsLoaded] = useFonts({
        FasterOne_400Regular,
        Roboto_400Regular,
        Roboto_700Bold,
    });

    const [instruments, setInstruments] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const handleStartQuiz = async () => {
        if (instruments.length === 0) {
            Alert.alert('Atenção', 'Por favor, selecione pelo menos uma categoria.');
            return;
        }
        try {
            let questions = [];
            if (instruments.includes('Gerais') && instruments.includes('Tecnicas')) {
                const response = await axios.get('https://api.example.com/questions?category=all');
                questions = response.data;
            } else if (instruments.includes('Gerais')) {
                const response = await axios.get('https://api.example.com/questions?category=general');
                questions = response.data;
            } else if (instruments.includes('Tecnicas')) {
                const response = await axios.get('https://api.example.com/questions?category=technical');
                questions = response.data;
            }

            navigation.navigate('Quiz', { questions });
        } catch (error) {
            console.error('Failed to load questions:', error);
        }
    };

    return (
        <LinearGradient
            colors={['#174BAF', '#174BAF', '#00EFFF']}
            style={styles.container}
        >
            <LinearGradient
                colors={['#00EFFF', '#00E0FF', '#174BAF']}
                style={styles.containerTopo}
            >
                <Text style={styles.textTop}>ENADE</Text>
                <Text style={styles.textSub}>EXAME NACIONAL DE DESEMPENHO DOS ESTUDANTES</Text>

            </LinearGradient>
            <View style={styles.containerItens}>
                <Text style={styles.textPergunta}>Perguntas:</Text>
                <View style={styles.checkItens}>
                    <CheckBox 
                        options={[
                            { label: "Gerais", value: "Gerais" },
                            { label: "Técnicas", value: "Tecnicas" }
                        ]}
                        CheckedValues={instruments}
                        onChange={setInstruments}
                        style={{ marginBottom: 15 }}
                    />
                </View>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.playButton} onPress={handleStartQuiz}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}
