import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
        return () => clearTimeout(timer)
    },)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>ZAP</Text>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#6200ee',
    },
})