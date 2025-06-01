import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const modes = [
  { key: 'off', label: 'Off Duty', icon: 'power-outline' },
  { key: 'on', label: 'On Duty', icon: 'power' },
  { key: 'working', label: 'WORKING', icon: 'briefcase' },
];

const DutyToggle = ({ activeMode, setActiveMode }) => {
  return (
    <View style={styles.container}>
      {modes.map(({ key, label, icon }) => (
        <TouchableOpacity
          key={key}
          style={[styles.button, activeMode === key && styles.activeButton]}
          onPress={() => setActiveMode(key)}
        >
          <Ionicons name={icon} size={20} color={activeMode === key ? '#6C63FF' : '#666'} />
          <Text style={[styles.text, activeMode === key && styles.activeText]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#F0EFFF',
  },
  text: {
    color: '#666',
    fontWeight: '500',
  },
  activeText: {
    color: '#6C63FF',
  },
});

export default DutyToggle;
