import React, {useState} from "react";
import { View, Text, Picker, Button, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";
import { Picker } from '@react-native-picker/picker';

export default function Usuário() {
    const handlePress = () => {
        // Aqui você pode adicionar a lógica que deseja ao pressionar o botão
        console.log("Botão pressionado, nome de usuário: ", username);
    };
    const [selectedValue, setSelectedValue] = useState("");
    
      return (
        <LinearGradient
        colors={['#00EFFF', '#00E0FF', '#174BAF']}
        style={styles.container}
        >  
            <Text style={styles.label}>Usuário:</Text>
            <TextInput
                style={[styles.input, { textAlign: 'center' }]} 
                placeholder="ex: Lívia Maria"
            /> 
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="C++" value="cpp" />
                <Picker.Item label="Ruby" value="ruby" />
            </Picker>
            
            <Button
            style ={styles.button}
                title="Enviar"
                onPress={handlePress}
                color="00000" 
                
            />

           
           
            
        </LinearGradient>
        
    );
}
