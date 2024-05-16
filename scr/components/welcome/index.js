import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import{ useNavigation} from '@react-navigation/native'

export default function Welcome() {

    // Definindo o estado para armazenar o tamanho da imagem
    const [size, setSize] = useState({ width: 100, height: 100 });

    // Função para aumentar o tamanho da imagem
    const increaseSize = () => {
        setSize(prevSize => ({
            width: prevSize.width + 50,
            height: prevSize.height + 50
        }));
    };

    //Definindo a navegação de telas
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
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
                onPress={ () => navigation.navigate('Usuario')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


    //Função para definir o container
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#00FFFF',
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
            alignItems: 'center'
        },

        //Estilização do text do titulo...
        title: {
            color: '#FFFFFF',
            fontSize: 35,
            
            fontWeight: 'bold'
        },

        //Estilização da logo...
        image: {
            resizeMode: 'contain',
        },

        //Estilização do button de acesso...
        button: {
            position: 'absolute',
            backgroundColor: '#007BFF',
            borderRadius: 50,
            paddingVertical: 8,
            width: '30%',
            alignSelf: 'center',
            bottom:'15%',
            justifyContent: 'center',
            alignItems: 'center'
            
        },
        
        //Estilização do text do button...
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
        }
    });
