import React, { useRef, useState, useCallback } from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';

const OTPInput = ({ length = 6, onComplete }) => {
  const [code, setCode] = useState('');
  const inputRef = useRef(null);

  // Use useCallback to memoize handleChange and prevent unnecessary re-renders
  const handleChange = useCallback(
    (text) => {
      // Only allow numeric input
      const numericText = text.replace(/[^0-9]/g, '');
      setCode(numericText);
      if (numericText.length === length) {
        onComplete(numericText);
        inputRef.current?.blur(); // Blur input when complete
      }
    },
    [length, onComplete]
  );

  // Handle focus for better UX
  const handlePress = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChange}
        maxLength={length}
        keyboardType="numeric"
        style={styles.hiddenInput}
        autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'}
        textContentType="oneTimeCode" // Improve iOS autofill
        returnKeyType="done"
        accessibilityLabel="OTP input"
        accessibilityHint={`Enter ${length}-digit OTP code`}
      />
      <View style={styles.boxContainer}>
        {Array.from({ length }, (_, index) => (
          <View
            key={index}
            style={[styles.box, code.length > index && styles.filledBox]}
            onTouchStart={handlePress}
            accessible={false} // Prevent individual box accessibility focus
          >
            <Text style={styles.boxText}>{code[index] || ''}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: 50,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Changed to space-between for consistent spacing
    // width: 240, // Slightly wider for better spacing
    // paddingHorizontal: 10,
  },
  box: {
    width: 36, // Slightly smaller for better aesthetics
    height: 48, // Taller for better touch target
    borderBottomWidth: 1, // Full border for better visibility
    borderColor: '#ccc',
    borderRadius: 8, // Softer corners
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    margin:5 // White background for clarity
  },
  filledBox: {
    borderColor: '#0066CC', // Highlight filled boxes
  },
  boxText: {
    fontSize: 18, // Slightly smaller font for better fit
    fontWeight: '600', // Bolder text for clarity
    color: '#333',
  },
});

export default OTPInput;