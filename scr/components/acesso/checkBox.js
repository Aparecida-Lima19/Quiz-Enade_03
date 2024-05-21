// checkBox.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const CheckBox = ({ options, CheckedValues, onChange, style }) => {
    if (!options || !Array.isArray(options) || options.length === 0) {
        return null; // Adicionando validação para options
    }

    return (
        <View style={[styles.container, style]}>
            {options.map((option) => {
                const active = CheckedValues.includes(option.value);
                return (
                    <TouchableOpacity 
                        key={option.value} // Corrigido para dentro do TouchableOpacity
                        style={active ? [styles.checkBox, styles.activeCheckBox] : styles.checkBox} 
                        onPress={() => {
                            let updatedCheckValues = [...CheckedValues];
                            if (active) {
                                updatedCheckValues = updatedCheckValues.filter((checkedValue) => checkedValue !== option.value);
                            } else {
                                updatedCheckValues.push(option.value);
                            }
                            onChange(updatedCheckValues);
                        }}
                    >
                        <Text style={active ? [styles.text, styles.activeText] : styles.text}>{option.label}</Text>
                        <MaterialIcons 
                            name={active ? "check-box" : "check-box-outline-blank"}  
                            size={24}
                            color={active ? "#06b6d4" : "#64748b"}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    checkBox: {
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '15%',
        backgroundColor: 'rgba(15, 177, 205, 0.5)',
        paddingHorizontal: 30,
        borderRadius: 30,
        justifyContent:'space-between',
    },
    activeCheckBox: {
        backgroundColor: 'rgba(5, 75, 255, 0.7)' + "11",
    },
    text: {
        fontSize: 20,
        marginLeft: 15,
        color: "#6b7280",
    },
    activeText: {
        color: "#FFF",
    },
});


export default CheckBox;
