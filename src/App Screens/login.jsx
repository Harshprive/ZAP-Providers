import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    StatusBar,
    Button,
    Pressable,
} from 'react-native';
import OTPScreen from './OTPScreen';


const PorterPartnerLogin = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const [tdsChecked, setTdsChecked] = useState(false);

    const isFormValid = phoneNumber.length === 10 && termsChecked && tdsChecked;

    const handleLogin = () => {
        if (!isFormValid) {
            alert('Please fill all fields and accept terms');
            return;
        }
        console.log('Logging in with:', phoneNumber);
    };

    const Checkbox = ({ checked, onPress, label, linkText1, linkText2 }) => (
        <View style={styles.checkboxContainer}>
            <TouchableOpacity
                style={[styles.checkbox, checked ? styles.checkboxChecked : {}]}
                onPress={onPress}
            >
                {checked && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <View style={styles.checkboxLabelContainer}>
                <Text style={styles.checkboxLabel}>
                    {label + ' '}
                    <Text style={styles.linkText}>{linkText1}</Text>
                    {linkText2 && <Text style={styles.checkboxLabel}> and </Text>}
                    {linkText2 && <Text style={styles.linkText}>{linkText2}</Text>}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Text style={styles.appTitle}>ZAP</Text>
                    {/* <Text style={styles.partnerText}>Partner</Text> */}
                </View>
                <Text onPress={() => navigation.navigate("Home")} > home </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Mobile number</Text>
                    <View style={styles.phoneInputContainer}>
                        <Text style={styles.countryCode}>+91</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter mobile number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                            maxLength={10}
                        />
                    </View>
                </View>
                <View style={styles.checkboxesContainer}>
                    <Checkbox
                        checked={termsChecked}
                        onPress={() => setTermsChecked(!termsChecked)}
                        label="I have read and agreed to"
                        linkText1="Terms and Conditions"
                        linkText2="Privacy Policy"
                    />
                    <Checkbox
                        checked={tdsChecked}
                        onPress={() => setTdsChecked(!tdsChecked)}
                        label="I have read and hereby provide my consent on the"
                        linkText1="TDS Declaration"
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("OTPScreen")}
                    style={[styles.loginButton, isFormValid ? styles.loginButtonActive : {}]}
                    onPress={handleLogin}
                    disabled={!isFormValid} onPress={() => navigation.navigate("OTPScreen")}
                >
                    <Text style={styles.loginButtonText}>LOGIN</Text>



                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200ee',
    },
    partnerText: {
        fontSize: 28,
        color: '#666',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        color: '#666',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    countryCode: {
        fontSize: 18,
        color: '#000',
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        padding: 8,
    },
    checkboxesContainer: {
        width: '100%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#3498db',
    },
    checkmark: {
        color: '#fff',
        fontSize: 14,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    loginButtonActive: {
        backgroundColor: '#3498db',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PorterPartnerLogin;
