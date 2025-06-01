// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
    title,
    onPress,
    isActive = false,
    activeStyle = styles.buttonActive,
    disabledStyle = styles.buttonDisabled,
    textStyle = styles.buttonText,
    containerStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                containerStyle,
                isActive ? activeStyle : disabledStyle,
            ]}
            onPress={onPress}
            disabled={!isActive}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    buttonActive: {
        backgroundColor: '#6200ee',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        opacity: 0.9,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 30,
    },



});

export default CustomButton;