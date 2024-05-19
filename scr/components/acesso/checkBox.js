import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const CheckBox = ({ options, checkedValues, onChange }) => {
    const handlePress = (value) => {
        if (checkedValues.includes(value)) {
            onChange(checkedValues.filter((item) => item !== value));
        } else {
            onChange([...checkedValues, value]);
        }
    };

    return (
        <View style={styles.containerCheck}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    onPress={() => handlePress(option.value)}
                    style={styles.option}
                >
                    <Text style={styles.checkboxText}>
                        {option.label}
                        {checkedValues.includes(option.value) ? '☑' : '☐'} 
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CheckBox;
