import React, { useCallback, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen'; 
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

SplashScreen.preventAutoHideAsync();

export default function Acesso() {
    const [fontsLoaded] = useFonts({
        FasterOne_400Regular,
        Roboto_400Regular,
        Roboto_700Bold,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (fontsLoaded) {
            onLayoutRootView();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient
            colors={['#174BAF', '#174BAF', '#00EFFF']}
            style={styles.container}
        >
            <LinearGradient
                colors={['#00EFFF', '#00E0FF', '#174BAF']}
                style={styles.containerTopo}>
                <Text style={styles.textTop}>Tela De Escolha de</Text>
            </LinearGradient>
            <View style={styles.containerItens}>
                <Text style={styles.textPergunta}>Perguntas:</Text>
                <View style={styles.body}>
                    <Pressable style={styles.playButton}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}