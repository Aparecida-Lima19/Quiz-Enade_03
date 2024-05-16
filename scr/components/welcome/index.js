import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    // Definindo o estado para armazenar o tamanho da imagem
    const [size, setSize] = useState({ width: 100, height: 100 });

    //Definindo a navegação de telas
    const navigation = useNavigation();

    // Função para aumentar o tamanho da imagem
    const increaseSize = () => {
        setSize(prevSize => ({
            width: prevSize.width + 50,
            height: prevSize.height + 50
        }));
    };

    return (
        <LinearGradient
            colors={['#00FFFF', '#1782AF']}
            style={styles.container}
        >
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Enade</Text>
            </View>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../components/assets/Logo.png')}
                    style={[styles.image, { width: size.width, height: size.height }]}
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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //Estilização para o container do Logo...
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
        paddingBottom: '15%',
    },

    //Estilização do text do titulo...
    title: {
        color: '#FFFFFF',
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: '60%',
    },

    //Estilização da logo...
    image: {
        resizeMode: 'contain',
        
    },

    //Estilização do button de acesso...
    button: {
        position: 'absolute',
        backgroundColor: '#0FB1CD',
        borderRadius: 30,
        paddingVertical: 8,
        margin: '20%',
        width: '30%',
        alignSelf: 'center',
        bottom: '15%',
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
