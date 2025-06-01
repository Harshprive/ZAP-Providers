import React, { useState, useRef, useEffect } from 'react';
import {
              StyleSheet,
              View,
              Text,
              TextInput,
              TouchableOpacity,
              KeyboardAvoidingView,
              Platform,
              SafeAreaView,
              Animated,
              Easing
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

const OTPScreen = ({ navigation }) => {
              const [otp, setOtp] = useState(['', '', '', '']);
              const [timer, setTimer] = useState(30);
              const [isResendDisabled, setIsResendDisabled] = useState(true);
              const [verifying, setVerifying] = useState(false);
              const [verified, setVerified] = useState(false);

              const inputRefs = useRef([]);
              const successAnimValue = useRef(new Animated.Value(0)).current;
              const scaleAnim = useRef(new Animated.Value(0)).current;

              useEffect(() => {
                            if (timer > 0 && isResendDisabled) {
                                          const interval = setInterval(() => {
                                                        setTimer((prevTimer) => prevTimer - 1);
                                          }, 1000);
                                          return () => clearInterval(interval);
                            } else if (timer === 0) {
                                          setIsResendDisabled(false);
                            }
              }, [timer, isResendDisabled]);

              useEffect(() => {
                            if (verified) {
                                          // Run success animation
                                          Animated.sequence([
                                                        Animated.timing(scaleAnim, {
                                                                      toValue: 1,
                                                                      duration: 300,
                                                                      useNativeDriver: true,
                                                                      easing: Easing.out(Easing.back(1.7))
                                                        }),
                                                        Animated.timing(successAnimValue, {
                                                                      toValue: 1,
                                                                      duration: 500,
                                                                      useNativeDriver: true,
                                                                      easing: Easing.inOut(Easing.ease)
                                                        })
                                          ]).start(() => {
                                                        // Navigate to Home screen after animation completes
                                                        setTimeout(() => {
                                                                      navigation.navigate("Home");
                                                        }, 500);
                                          });
                            }
              }, [verified, navigation, successAnimValue, scaleAnim]);

              const handleOtpChange = (value, index) => {
                            const newOtp = [...otp];
                            newOtp[index] = value;
                            setOtp(newOtp);

                            // Auto focus to next input if value is provided
                            if (value && index < 3) {
                                          inputRefs.current[index + 1].focus();
                            }
              };

              const handleKeyPress = (e, index) => {
                            // Move to previous input on backspace if current input is empty
                            if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                                          inputRefs.current[index - 1].focus();
                            }
              };

              const handleVerifyOtp = () => {
                            const otpValue = otp.join('');
                            if (otpValue.length !== 4) {
                                          alert('Please enter all 4 digits of your OTP code.');
                                          return;
                            }

                            // Start verification process with loading state
                            setVerifying(true);

                            // Simulate API verification delay
                            setTimeout(() => {
                                          setVerifying(false);
                                          setVerified(true);
                                          // Animation and navigation will happen in the useEffect
                            }, 1500);
              };

              const handleResendOtp = () => {
                            // Reset OTP fields
                            setOtp(['', '', '', '']);
                            // Reset timer
                            setTimer(30);
                            setIsResendDisabled(true);
                            // Focus the first input
                            inputRefs.current[0].focus();

                            // Here you would typically call your API to resend OTP
                            alert('A new OTP has been sent to your device');
              };

              // Interpolate animation values
              const successOpacity = successAnimValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, 1, 0]
              });

              const checkmarkScale = scaleAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
              });

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar style="auto" />
                                          <KeyboardAvoidingView
                                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                                        style={styles.keyboardAvoidingView}
                                          >
                                                        <View style={styles.content}>
                                                                      {!verified ? (
                                                                                    <>
                                                                                                  <Text style={styles.title}>Verification Code</Text>
                                                                                                  <Text style={styles.description}>
                                                                                                                We have sent the verification code to your phone
                                                                                                  </Text>

                                                                                                  <View style={styles.otpContainer}>
                                                                                                                {otp.map((digit, index) => (
                                                                                                                              <TextInput
                                                                                                                                            key={index}
                                                                                                                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                                                                                                                            style={styles.otpInput}
                                                                                                                                            value={digit}
                                                                                                                                            onChangeText={(value) => handleOtpChange(value, index)}
                                                                                                                                            onKeyPress={(e) => handleKeyPress(e, index)}
                                                                                                                                            keyboardType="numeric"
                                                                                                                                            maxLength={1}
                                                                                                                                            textAlign="center"
                                                                                                                                            selectTextOnFocus
                                                                                                                                            editable={!verifying && !verified}
                                                                                                                              />
                                                                                                                ))}
                                                                                                  </View>

                                                                                                  <TouchableOpacity
                                                                                                                style={[
                                                                                                                              styles.verifyButton,
                                                                                                                              (verifying || verified) && styles.disabledButton
                                                                                                                ]}
                                                                                                                onPress={handleVerifyOtp}
                                                                                                                disabled={verifying || verified}
                                                                                                  >
                                                                                                                <Text style={styles.verifyButtonText}>
                                                                                                                              {verifying ? 'Verifying...' : 'Verify'}
                                                                                                                </Text>
                                                                                                  </TouchableOpacity>

                                                                                                  <View style={styles.resendContainer}>
                                                                                                                <Text style={styles.resendText}>Didn't receive the code? </Text>
                                                                                                                {isResendDisabled ? (
                                                                                                                              <Text style={styles.timerText}>{`Resend in ${timer}s`}</Text>
                                                                                                                ) : (
                                                                                                                              <TouchableOpacity
                                                                                                                                            onPress={handleResendOtp}
                                                                                                                                            disabled={verifying || verified}
                                                                                                                              >
                                                                                                                                            <Text style={styles.resendButtonText}>Resend</Text>
                                                                                                                              </TouchableOpacity>
                                                                                                                )}
                                                                                                  </View>
                                                                                    </>
                                                                      ) : (
                                                                                    <View style={styles.successContainer}>
                                                                                                  <Animated.View
                                                                                                                style={[
                                                                                                                              styles.successCircle,
                                                                                                                              { transform: [{ scale: checkmarkScale }] }
                                                                                                                ]}
                                                                                                  >
                                                                                                                <MaterialIcons name="check" size={50} color="white" />
                                                                                                  </Animated.View>
                                                                                                  <Animated.Text
                                                                                                                style={[
                                                                                                                              styles.successText,
                                                                                                                              { opacity: successOpacity }
                                                                                                                ]}
                                                                                                  >
                                                                                                                Verification Successful
                                                                                                  </Animated.Text>
                                                                                    </View>
                                                                      )}
                                                        </View>
                                          </KeyboardAvoidingView>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              keyboardAvoidingView: {
                            flex: 1,
              },
              content: {
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20,
              },
              title: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            color: '#333',
              },
              description: {
                            fontSize: 14,
                            color: '#666',
                            textAlign: 'center',
                            marginBottom: 30,
              },
              otpContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '80%',
                            marginBottom: 30,
              },
              otpInput: {
                            width: 50,
                            height: 50,
                            borderWidth: 1.5,
                            borderRadius: 10,
                            fontSize: 24,
                            backgroundColor: 'white',
                            borderColor: '#ccc',
              },
              verifyButton: {
                            backgroundColor: '#007bff',
                            paddingVertical: 12,
                            paddingHorizontal: 30,
                            borderRadius: 25,
                            marginBottom: 20,
                            width: '80%',
              },
              disabledButton: {
                            backgroundColor: '#b3d7ff',
              },
              verifyButtonText: {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                            textAlign: 'center',
              },
              resendContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              resendText: {
                            color: '#666',
              },
              resendButtonText: {
                            color: '#007bff',
                            fontWeight: 'bold',
              },
              timerText: {
                            color: '#999',
              },
              successContainer: {
                            alignItems: 'center',
                            justifyContent: 'center',
              },
              successCircle: {
                            backgroundColor: '#4CAF50',
                            borderRadius: 50,
                            width: 100,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20,
              },
              successText: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333',
              }
});

export default OTPScreen;