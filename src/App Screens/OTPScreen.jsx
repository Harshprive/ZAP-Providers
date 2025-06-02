import React, { useState, useEffect } from 'react';
import {
              View,
              Text,
              TextInput,
              TouchableOpacity,
              StyleSheet,
              ActivityIndicator
} from 'react-native';
import DocumentsVerificationScreen from './DocumentsVerificationScreen';

const OTPVerificationScreen = ({ navigation }) => {
              const [phoneNumber, setPhoneNumber] = useState('7701890416');
              const [otp, setOtp] = useState('');
              const [isWaiting, setIsWaiting] = useState(true);

              useEffect(() => {
                            // Simulate waiting for OTP
                            const timer = setTimeout(() => {
                                          setIsWaiting(false);
                            }, 10000);

                            return () => clearTimeout(timer);
              }, []);

              return (
                            <View style={styles.container}>
                                          <View style={styles.content}>
                                                        <Text style={styles.headerText}>ZAP-Provider's</Text>

                                                        <View style={styles.phoneContainer}>
                                                                      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                                                                      <TouchableOpacity>
                                                                                    <Text style={styles.changeButton}>Change</Text>
                                                                      </TouchableOpacity>
                                                        </View>

                                                        <Text style={styles.otpInfoText}>
                                                                      One Time Password (OTP) is sent to this number
                                                        </Text>

                                                        {isWaiting ? (
                                                                      <View style={styles.waitingContainer}>
                                                                                    <ActivityIndicator size="small" color="#0066CC" />
                                                                                    <Text style={styles.waitingText}>Waiting to auto read OTP</Text>
                                                                      </View>
                                                        ) : null}

                                                        <View style={styles.inputContainer}>
                                                                      <Text style={styles.inputLabel}>Enter OTP</Text>
                                                                      <TextInput
                                                                                    style={styles.otpInput}
                                                                                    value={otp}
                                                                                    onChangeText={setOtp}
                                                                                    keyboardType="number-pad"
                                                                                    maxLength={6}
                                                                      />
                                                        </View>

                                                        <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate("DocumentsVerificationScreen")}>
                                                                      <Text style={styles.verifyButtonText}>VERIFY</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={styles.resendButton}>
                                                                      <Text style={styles.resendButtonText}>RESEND OTP</Text>
                                                        </TouchableOpacity>
                                          </View>
                            </View>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              content: {
                            flex: 1,
                            paddingHorizontal: 20,
                            paddingTop: 40,
              },
              headerText: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#0066CC',
                            marginBottom: 40,
              },
              phoneContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
              },
              phoneNumber: {
                            fontSize: 16,
                            color: '#333',
              },
              changeButton: {
                            marginLeft: 15,
                            color: '#0066CC',
                            fontSize: 16,
              },
              otpInfoText: {
                            color: '#666',
                            marginBottom: 20,
              },
              waitingContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 20,
              },
              waitingText: {
                            marginLeft: 10,
                            color: '#666',
              },
              inputContainer: {
                            marginBottom: 30,
              },
              inputLabel: {
                            color: '#666',
                            marginBottom: 8,
              },
              otpInput: {
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                            fontSize: 18,
                            paddingVertical: 5,
                            color: '#333',
              },
              verifyButton: {
                            backgroundColor: '#0066CC',
                            paddingVertical: 15,
                            borderRadius: 30,
                            alignItems: 'center',
                            marginBottom: 20,
              },
              verifyButtonText: {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
              },
              resendButton: {
                            alignItems: 'center',
              },
              resendButtonText: {
                            color: '#0066CC',
                            fontSize: 16,
              },
});

export default OTPVerificationScreen;