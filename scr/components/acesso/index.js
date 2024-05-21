import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native'; // Adicionado import para useNavigation
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
    const navigation = useNavigation(); // Adicionada a utilização do hook useNavigation

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const handleStartQuiz = () => {
        // Navegar para a tela do quiz quando o botão PLAY for pressionado
        navigation.navigate('Quiz');
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
                    <Pressable style={styles.playButton} onPress={handleStartQuiz}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}
