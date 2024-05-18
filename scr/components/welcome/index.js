import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen'; 
import { useFonts, FasterOne_400Regular } from '@expo-google-fonts/faster-one'; // Importar a fonte do Google

export default function Welcome() {
    // Definindo o estado para armazenar o tamanho da imagem
    const [size, setSize] = useState({ width: '40%', height: '40%' });
    const [aluno, setAluno] = useState({ width: '100%', height: '100%' });

    //Definindo a navegação de telas
    const navigation = useNavigation();

    // Função para aumentar o tamanho da imagem
    const increaseSize = () => {
        setSize(prevSize => ({
            width: prevSize.width + 50,
            height: prevSize.height + 50
        }));
    };

    const increaseAluno = () => {
        setAluno(prevAluno => ({
            width: prevAluno.width + 50,
            height: prevAluno.height + 50
        }));
    };
    // Carregando a fonte
    let [fontsLoaded] = useFonts({
        FasterOne_400Regular,
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync(); // Oculta a splash screen quando as fontes são carregadas
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Retorna null até que as fontes sejam carregadas
    }
    return (
        <LinearGradient
            colors={['#00EFFF', '#00E0FF', '#174BAF']}
            style={styles.container}
            
        >
            
            
            <View style={styles.containerTitle}>
                <Image
                    source={require('../../components/assets/Logo.png')}
                    style={[styles.image, { width: size.width, height: size.height }]}
                /> 
                <Text style={styles.title}>Enade</Text>
                <Text style={styles.subTitle}>SIMULADO - 2024</Text>
            </View>

            <View style={styles.containerLogo}>
                <Image 
                    style={[styles.imgAluno, { width: aluno.width, height: aluno.height }]}
                    source={require('../../components/assets/Alunos.png')}
                />  
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Usuario')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                             
            </View>
        </LinearGradient>
    );
}


//Função para definir o container
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //Estilização para o container do titulo...
    containerTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'red',
    },

    

    //Estilização para o container do Logo...
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        
        
    },

    //Estilização do text do titulo...
    title: {
        marginTop:'10%',
        color: '#FFFFFF',
        fontSize: 80,
        fontFamily: 'FasterOne_400Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },

    subTitle:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },

    

    //Estilização da logo...
    image: {
        resizeMode: 'contain', 
    },
    imgAluno:{
        opacity: 0.3,
    },

    //Estilização do button de acesso...
    button: {
        position: 'absolute',
        backgroundColor: '#054BFF',
        borderRadius: 30,
        paddingVertical: 8,
        width: '30%',
        alignSelf: 'center',
        bottom: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },

    //Estilização do text do button...
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        
    }

});
