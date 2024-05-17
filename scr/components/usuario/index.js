import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./style";
import Perguntas from "../perguntas";
import { Picker } from '@react-native-picker/picker';

const Stack = createStackNavigator();

export default function Usuario() {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const handlePress = () => {
        console.log(username);
        navigation.navigate('Perguntas'); 
    };
    const [selectedValue, setSelectedValue] = useState("");
    
      return (
        <LinearGradient
        colors={['#00EFFF', '#00E0FF', '#174BAF']}
        style={styles.container}
        >  
            <View style={styles.innerContainer}>
                <Text style={styles.label}>Usuário:</Text>
                <TextInput
                    style={[styles.input, { textAlign: 'center' }]} 
                    placeholder="ex: Lívia Maria"
                    value={username}
                    onChangeText={setUsername}
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
                
                <TouchableOpacity
                    style ={styles.button}
                        onPress={handlePress}
                        color="00000"                        
                    >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
           
           
            
        </LinearGradient>
        
    );
}
