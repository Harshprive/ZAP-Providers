import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import OTPInput from '../../components/OTPInput'; // Assuming you have an OTPInput component

const OTPVerificationScreen = ({ navigation, route }) => {
    const { phoneNumber } = route.params;
    const [otp, setOtp] = useState('');
    const [isWaiting, setIsWaiting] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);



    const handleVerify = useCallback(() => {
        if (isFormValid) {
            navigation.navigate('DocumentsVerification');
        }
    }, [isFormValid, navigation]);


    const handleResend = useCallback(() => {

        setIsWaiting(true);
        setOtp('');
        setTimeout(() => setIsWaiting(false), 10000);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => setIsWaiting(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    const handleComplete = (code) => {
        if (code.length === 6) {
            setOtp(code);
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* // <View style={styles.content}> */}
            <Text style={styles.headerText}>ZAP-Provider's</Text>

            <View style={styles.phoneContainer}>
                <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.changeButton}>Change</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.otpInfoText}>
                One Time Password (OTP) sent to this number
            </Text>

            {isWaiting && (
                <View style={styles.waitingContainer}>
                    <ActivityIndicator size="small" color="#0066CC" />
                    <Text style={styles.waitingText}>Waiting to auto-read OTP</Text>
                </View>
            )}

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Enter OTP</Text>
                <OTPInput length={6} value={otp} onChange={setOtp} onComplete={handleComplete} />
            </View>

            {isFormValid && (
                <CustomButton
                    title="VERIFY"
                    isActive={isFormValid}
                    onPress={handleVerify}
                />
            )}

            <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
                <Text style={styles.resendButtonText}>RESEND OTP</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        padding: 20,
    },
    content: {

    },
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0066CC',
        marginBottom: 40,
        textAlign: 'center',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    changeButton: {
        color: '#0066CC',
        fontSize: 16,
    },
    otpInfoText: {
        color: '#666',
        marginBottom: 20,
        fontSize: 14,
    },
    waitingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    waitingText: {
        marginLeft: 10,
        color: '#666',
        fontSize: 14,
    },
    inputContainer: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputLabel: {
        color: '#666',
        marginBottom: 8,
        fontSize: 14,
    },
    otpInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 18,
        paddingVertical: 8,
        color: '#333',
        letterSpacing: 8,
    },
    resendButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    resendButtonText: {
        color: '#0066CC',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default OTPVerificationScreen;