import React, { useState } from 'react';
import {
              View,
              Text,
              StyleSheet,
              TextInput,
              TouchableOpacity,
              Image,
              SafeAreaView,
              Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import CreateGalleryScreen from './CreateGalleryScreen';

const ProfileCreationScreen = ({ navigation }) => {
              const [profileImage, setProfileImage] = useState(null);
              const [fullName, setFullName] = useState('');
              const [email, setEmail] = useState('');
              const [contactNumber, setContactNumber] = useState('');
              const [address, setAddress] = useState('');

              const pickImage = async () => {
                            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                            if (status !== 'granted') {
                                          alert('Sorry, we need camera roll permissions to make this work!');
                                          return;
                            }

                            const result = await ImagePicker.launchImageLibraryAsync({
                                          mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                          allowsEditing: true,
                                          aspect: [1, 1],
                                          quality: 1,
                            });

                            if (!result.canceled) {
                                          setProfileImage(result.assets[0].uri);
                            }
              };

              return (
                            <SafeAreaView style={styles.container}>
                                          <Text style={styles.appTitle}>ZAP</Text>

                                          <View style={styles.card}>
                                                        <Text style={styles.title}>Create Your Profile</Text>

                                                        {/* Profile Image Section */}
                                                        <TouchableOpacity style={styles.profileImageContainer} onPress={pickImage}>
                                                                      <View style={styles.profileImageWrapper}>
                                                                                    {profileImage ? (
                                                                                                  <Image source={{ uri: profileImage }} style={styles.profileImage} />
                                                                                    ) : (
                                                                                                  <View style={styles.profilePlaceholder}>
                                                                                                                <Ionicons name="person-outline" size={40} color="#999" />
                                                                                                  </View>
                                                                                    )}
                                                                                    <View style={styles.uploadIconContainer}>
                                                                                                  <Ionicons name="add-circle" size={24} color="#4834D4" />
                                                                                    </View>
                                                                      </View>
                                                        </TouchableOpacity>

                                                        {/* Input Fields */}
                                                        <View style={styles.inputContainer}>
                                                                      <View style={styles.inputWrapper}>
                                                                                    <Ionicons name="person-outline" size={20} color="#999" style={styles.inputIcon} />
                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  placeholder="Full Name"
                                                                                                  value={fullName}
                                                                                                  onChangeText={setFullName}
                                                                                                  placeholderTextColor="#999"
                                                                                    />
                                                                      </View>

                                                                      <View style={styles.inputWrapper}>
                                                                                    <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  placeholder="Email Address"
                                                                                                  value={email}
                                                                                                  onChangeText={setEmail}
                                                                                                  keyboardType="email-address"
                                                                                                  placeholderTextColor="#999"
                                                                                    />
                                                                      </View>

                                                                      <View style={styles.inputWrapper}>
                                                                                    <Ionicons name="call-outline" size={20} color="#999" style={styles.inputIcon} />
                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  placeholder="Contact Number"
                                                                                                  value={contactNumber}
                                                                                                  onChangeText={setContactNumber}
                                                                                                  keyboardType="phone-pad"
                                                                                                  placeholderTextColor="#999"
                                                                                    />
                                                                      </View>

                                                                      <TextInput
                                                                                    style={styles.addressInput}
                                                                                    placeholder="Permanent Address"
                                                                                    value={address}
                                                                                    onChangeText={setAddress}
                                                                                    placeholderTextColor="#999"
                                                                                    multiline
                                                                      />
                                                        </View>

                                                        <TouchableOpacity
                                                                      onPress={() => navigation.navigate("CreateGalleryScreen")}
                                                                      style={styles.nextButton}
                                                        // onPress={() => navigation.navigate('NextScreen')}
                                                        >
                                                                      <Text style={styles.nextButtonText}>Next</Text>
                                                        </TouchableOpacity>
                                          </View>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff',
                            padding: 20,
              },
              appTitle: {
                            fontSize: 24,
                            color: '#4834D4',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            marginVertical: 20,
              },
              card: {
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            padding: 20,
                            ...Platform.select({
                                          ios: {
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 2 },
                                                        shadowOpacity: 0.1,
                                                        shadowRadius: 8,
                                          },
                                          android: {
                                                        elevation: 4,
                                          },
                            }),
              },
              title: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 25,
                            color: '#000',
              },
              profileImageContainer: {
                            alignItems: 'center',
                            marginBottom: 25,
              },
              profileImageWrapper: {
                            position: 'relative',
                            width: 100,
                            height: 100,
              },
              profileImage: {
                            width: 100,
                            height: 100,
                            borderRadius: 50,
              },
              profilePlaceholder: {
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: '#F0F0F0',
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              uploadIconContainer: {
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: '#fff',
                            borderRadius: 12,
                            padding: 2,
                            ...Platform.select({
                                          ios: {
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 2 },
                                                        shadowOpacity: 0.1,
                                                        shadowRadius: 4,
                                          },
                                          android: {
                                                        elevation: 2,
                                          },
                            }),
              },
              inputContainer: {
                            gap: 15,
              },
              inputWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            height: 50,
                            ...Platform.select({
                                          ios: {
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 1 },
                                                        shadowOpacity: 0.05,
                                                        shadowRadius: 4,
                                          },
                                          android: {
                                                        elevation: 2,
                                          },
                            }),
              },
              inputIcon: {
                            marginRight: 10,
              },
              input: {
                            flex: 1,
                            height: 50,
                            color: '#000',
                            fontSize: 16,
              },
              addressInput: {
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            paddingVertical: 12,
                            height: 50,
                            fontSize: 16,
                            color: '#000',
                            ...Platform.select({
                                          ios: {
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 1 },
                                                        shadowOpacity: 0.05,
                                                        shadowRadius: 4,
                                          },
                                          android: {
                                                        elevation: 2,
                                          },
                            }),
              },
              nextButton: {
                            backgroundColor: '#4834D4',
                            borderRadius: 10,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 25,
              },
              nextButtonText: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '500',
              },
});

export default ProfileCreationScreen;