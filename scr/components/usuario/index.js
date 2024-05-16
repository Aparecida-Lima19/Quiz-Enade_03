import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

export default function Usuário() {
    const handlePress = () => {
        // Aqui você pode adicionar a lógica que deseja ao pressionar o botão
        console.log("Botão pressionado, nome de usuário: ", username);
    };
    
      return (
        <LinearGradient
        colors={['#00FFFF', '#1782AF']}
        style={styles.container}
        >  
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
                style={[styles.input, { textAlign: 'center' }]} 
                placeholder="ex: Lívia Maria"
            /> 
            <Button
            style ={styles.button}
                title="Enviar"
                onPress={handlePress}
                color="00000" 
                
            />
            
        </LinearGradient>
        
    );
}
