import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import { Picker } from '@react-native-picker/picker';

export default function Usuario() {
    const [username, setUsername] = useState('');
    const [selectedValue, setSelectedValue] = useState("");
    const navigation = useNavigation();
    const [aluno, setAluno] = useState({ width: '1%', height: '1%' });
    const handlePress = () => {
        if (!username || !selectedValue) {
            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        console.log(username, selectedValue);
        navigation.navigate('Acesso'); 
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <LinearGradient
                    colors={['#00EFFF', '#00E0FF', '#174BAF']}
                    style={styles.container}
                >
                    <View style={styles.overlayContainer}>
                        <View style={styles.topo}>
                            <Text style={styles.topoTitle}>Enade</Text>
                            <Text style={styles.subTitle}>SIMULADO - 2024</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.label}>Usuário:</Text>
                            <TextInput
                                style={[styles.input, { textAlign: 'center' }]}
                                placeholder="ex: Lívia Maria"
                                value={username}
                                onChangeText={setUsername}
                            />
                            <Text style={styles.label}>Qual é o Curso?</Text>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedValue(itemValue)
                                    }>
                                    <Picker.Item label="Selecione um curso..." value="" />
                                    <Picker.Item label="ADS" value="ADS" />
                                    <Picker.Item label="Biomedicina" value="Biomedicina" />
                                    <Picker.Item label="Direito" value="Direito" />
                                    <Picker.Item label="Educação Física" value="Educação Física" />
                                    <Picker.Item label="Enfermagem" value="Enfermagem" />
                                    <Picker.Item label="Engenharia Civil" value="Engenharia Civil" />
                                    <Picker.Item label="Farmácia" value="Farmácia" />
                                    <Picker.Item label="Fisioterapia" value="Fisioterapia" />
                                    <Picker.Item label="Fonoaudiologia" value="Fonoaudiologia" />
                                    <Picker.Item label="Nutrição" value="Nutrição" />
                                    <Picker.Item label="Odontologia" value="Odontologia" />
                                    <Picker.Item label="Pedagogia" value="Pedagogia" />
                                    <Picker.Item label="Medicina Veterinária" value="Medicina Veterinária" />
                                    <Picker.Item label="Terapia Ocupacional" value="Terapia Ocupacional" />
                                </Picker>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handlePress}
                            >
                                <Text style={styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.backgroundContainer}>
                        <Image
                            style={styles.imgAluno}
                            source={require('../../components/assets/Alunos02.png')}
                        />
                    </View>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
