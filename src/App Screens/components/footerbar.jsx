import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
              const navigation = useNavigation(); // ✅ Get navigation object from React Navigation

              return (
                            <View style={styles.footerContainer}>
                                          <FooterButton icon="home" label="Home" onPress={() => navigation.navigate('Home')} />
                                          <FooterButton icon="clipboard-list" label="Request" onPress={() => navigation.navigate('Request')} />
                                          <FooterButton icon="calendar-alt" label="Schedule" onPress={() => navigation.navigate('Schedule')} />
                                          <FooterButton icon="envelope" label="Message" onPress={() => navigation.navigate('Messages')} />
                                          <FooterButton icon="user" label="Profile" onPress={() => navigation.navigate('Profile')} />
                            </View>
              );
};

const FooterButton = ({ icon, label, onPress }) => (
              <TouchableOpacity style={styles.button} onPress={onPress}>
                            <FontAwesome5 name={icon} size={24} color="#726AE0" />
                            <Text style={styles.label}>{label}</Text>
              </TouchableOpacity>
);

const styles = StyleSheet.create({
              footerContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            backgroundColor: '#ffff',
                            paddingVertical: 10,
                            position: 'relative',
                            bottom: 0,
                            width: '100%',
              },
              button: {
                            alignItems: 'center',
              },
              label: {
                            color: 'black',
                            fontSize: 12,
                            marginTop: 4,
              },
});

export default Footer;
