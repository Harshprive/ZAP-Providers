import React, { useState, memo } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from '../../components/CustomButton';

const TERMS_TEXT = 'Terms and Conditions';
const PRIVACY_TEXT = 'Privacy Policy';
const TDS_TEXT = 'TDS Declaration';

const Checkbox = memo(({ checked, onPress, label, linkText1, linkText2 }) => (
    <View style={styles.checkboxContainer}>
        <TouchableOpacity
            style={[styles.checkbox, checked && styles.checkboxChecked]}
            onPress={onPress}
            accessibilityRole="checkbox"
            accessibilityState={{ checked }}
        >
            {checked && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <View style={styles.checkboxLabelContainer}>
            <Text style={styles.checkboxLabel}>
                {`${label} `}
                <Text style={styles.linkText}>{linkText1}</Text>
                {linkText2 && <Text style={styles.checkboxLabel}> and </Text>}
                {linkText2 && <Text style={styles.linkText}>{linkText2}</Text>}
            </Text>
        </View>
    </View>
));

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    linkText1: PropTypes.string.isRequired,
    linkText2: PropTypes.string,
};

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
        navigation.navigate("OTPVerification",{ phoneNumber })
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.appTitle}>ZAP</Text>
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
                            accessibilityLabel="Mobile number input"
                        />
                    </View>
                </View>
                <View style={styles.checkboxesContainer}>
                    <Checkbox
                        checked={termsChecked}
                        onPress={() => setTermsChecked(!termsChecked)}
                        label="I have read and agreed to"
                        linkText1={TERMS_TEXT}
                        linkText2={PRIVACY_TEXT}
                    />
                    <Checkbox
                        checked={tdsChecked}
                        onPress={() => setTdsChecked(!tdsChecked)}
                        label="I have read and hereby provide my consent on the"
                        linkText1={TDS_TEXT}
                    />
                </View>
                <CustomButton 
                title={'LOGIN'}
                onPress={handleLogin}
                isActive={isFormValid}
                activeStyle={styles.loginButtonActive}
                disabledStyle={styles.loginButton}
                />
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={styles.homeLink}
                    accessibilityRole="link"
                    accessibilityLabel="Navigate to home"
                >
                    Home
                </Text>
            </View>
        </SafeAreaView>
    );
};

PorterPartnerLogin.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    countryCode: {
        fontSize: 18,
        color: '#000',
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        paddingVertical: 8,
    },
    checkboxesContainer: {
        width: '100%',
        marginBottom: 20,
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
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#3498db',
    },
    checkmark: {
        color: '#fff',
        fontSize: 14,
    },
    checkboxLabelContainer: {
        flex: 1,
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#333',
    },
    linkText: {
        fontSize: 14,
        color: '#3498db',
        textDecorationLine: 'underline',
    },
  
    homeLink: {
        fontSize: 16,
        color: '#3498db',
        textDecorationLine: 'underline',
    },
});

export default PorterPartnerLogin;