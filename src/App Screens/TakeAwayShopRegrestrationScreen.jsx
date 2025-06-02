import React, { useState } from 'react';
import {
              View,
              Text,
              StyleSheet,
              TextInput,
              TouchableOpacity,
              ScrollView,
              Platform,
              Image,
              SafeAreaView,
              StatusBar
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const ShopRegistrationScreen = ({ navigation }) => {
              const [activeTab, setActiveTab] = useState('shopDetails');
              const [aadharNumber, setAadharNumber] = useState('');
              const [address, setAddress] = useState('');
              const [shopName, setShopName] = useState('');
              const [phoneNumber, setPhoneNumber] = useState('');
              const [latitude, setLatitude] = useState('');
              const [longitude, setLongitude] = useState('');
              const [cardImage, setCardImage] = useState(null);

              const pickImage = async () => {
                            let result = await ImagePicker.launchImageLibraryAsync({
                                          mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                          allowsEditing: true,
                                          aspect: [4, 3],
                                          quality: 1,
                            });

                            if (!result.canceled) {
                                          setCardImage(result.assets[0].uri);
                            }
              };

              const renderShopDetailsTab = () => (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                          <View style={styles.inputContainer}>
                                                        <View style={styles.inputWithIcon}>
                                                                      <Ionicons name="card-outline" size={24} color="#666" style={styles.inputIcon} />
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="Enter Aadhar Number"
                                                                                    value={aadharNumber}
                                                                                    onChangeText={setAadharNumber}
                                                                                    keyboardType="number-pad"
                                                                                    placeholderTextColor="#666"
                                                                      />
                                                        </View>
                                          </View>

                                          <View style={styles.inputContainer}>
                                                        <View style={styles.inputWithIcon}>
                                                                      <Ionicons name="location-outline" size={24} color="#666" style={styles.inputIcon} />
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="Enter Address"
                                                                                    value={address}
                                                                                    onChangeText={setAddress}
                                                                                    placeholderTextColor="#666"
                                                                      />
                                                        </View>
                                          </View>

                                          <View style={styles.inputContainer}>
                                                        <View style={styles.inputWithIcon}>
                                                                      <MaterialIcons name="store" size={24} color="#666" style={styles.inputIcon} />
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="Enter Shop Name"
                                                                                    value={shopName}
                                                                                    onChangeText={setShopName}
                                                                                    placeholderTextColor="#666"
                                                                      />
                                                        </View>
                                          </View>

                                          <View style={styles.inputContainer}>
                                                        <View style={styles.inputWithIcon}>
                                                                      <Ionicons name="call-outline" size={24} color="#666" style={styles.inputIcon} />
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="Enter Phone Number"
                                                                                    value={phoneNumber}
                                                                                    onChangeText={setPhoneNumber}
                                                                                    keyboardType="phone-pad"
                                                                                    placeholderTextColor="#666"
                                                                      />
                                                        </View>
                                          </View>

                                          <View style={styles.locationContainer}>
                                                        <TextInput
                                                                      style={styles.locationInput}
                                                                      placeholder="Latitude"
                                                                      value={latitude}
                                                                      onChangeText={setLatitude}
                                                                      keyboardType="numeric"
                                                                      placeholderTextColor="#666"
                                                        />
                                                        <TextInput
                                                                      style={styles.locationInput}
                                                                      placeholder="Longitude"
                                                                      value={longitude}
                                                                      onChangeText={setLongitude}
                                                                      keyboardType="numeric"
                                                                      placeholderTextColor="#666"
                                                        />
                                          </View>

                                          <View style={styles.mapPreview}>
                                                        <Text style={styles.mapPreviewText}>Map Preview</Text>
                                                        <Text style={styles.mapHelpText}>Enter coordinates to see Location</Text>
                                          </View>

                                          <TouchableOpacity style={styles.addButton}>
                                                        <Text style={styles.buttonText}>Add</Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                                        onPress={() => navigation.navigate("Home")}

                                                        style={[styles.nextButton, { marginTop: 20, marginBottom: 20 }]}>
                                                        <Text style={styles.buttonText}>Create </Text>
                                          </TouchableOpacity>
                            </ScrollView>
              );

              const renderVisitingCardTab = () => (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                          <View style={styles.uploadContainer}>
                                                        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                                                                      <Ionicons name="cloud-upload-outline" size={32} color="#666" />
                                                                      <Text style={styles.uploadText}>Upload Invitation Card</Text>
                                                        </TouchableOpacity>
                                                        <Text style={styles.supportedFormats}>
                                                                      Supported formats: JPG, PNG, PDF{'\n'}
                                                                      MAX 3MB
                                                        </Text>
                                          </View>

                                          <View style={styles.cardPreviewContainer}>
                                                        <Text style={styles.cardPreviewTitle}>Visiting Card Preview</Text>
                                                        <View style={styles.cardPreview}>
                                                                      {cardImage ? (
                                                                                    <Image source={{ uri: cardImage }} style={styles.previewImage} />
                                                                      ) : (
                                                                                    <Ionicons name="card-outline" size={32} color="#ccc" />
                                                                      )}
                                                        </View>
                                          </View>

                                          <TouchableOpacity
                                                        onPress={() => navigation.navigate("ScheduleAppointmentScreen")}
                                                        style={[styles.nextButton, { marginBottom: 20 }]}>
                                                        <Text style={styles.buttonText}>Next</Text>
                                          </TouchableOpacity>
                            </ScrollView>
              );

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                                          <View style={styles.content}>
                                                        <Text style={styles.appTitle}>ZAP</Text>
                                                        <Text style={styles.title}>Take Away Shop Registration</Text>
                                                        <TouchableOpacity
                                                                      onPress={() => navigation.navigate("Home")}>
                                                                      <Text style={styles.skipText}>Skip</Text>
                                                        </TouchableOpacity>

                                                        <Text style={styles.subtitle}>Enter your shop details</Text>

                                                        <View style={styles.tabContainer}>
                                                                      <TouchableOpacity
                                                                                    style={[
                                                                                                  styles.tabButton,
                                                                                                  activeTab === 'shopDetails' && styles.activeTabButton
                                                                                    ]}
                                                                                    onPress={() => setActiveTab('shopDetails')}
                                                                      >
                                                                                    <Text style={[
                                                                                                  styles.tabButtonText,
                                                                                                  activeTab === 'shopDetails' && styles.activeTabButtonText
                                                                                    ]}>
                                                                                                  Shop Details
                                                                                    </Text>
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity
                                                                                    style={[
                                                                                                  styles.tabButton,
                                                                                                  activeTab === 'visitingCard' && styles.activeTabButton
                                                                                    ]}
                                                                                    onPress={() => setActiveTab('visitingCard')}
                                                                      >
                                                                                    <Text style={[
                                                                                                  styles.tabButtonText,
                                                                                                  activeTab === 'visitingCard' && styles.activeTabButtonText
                                                                                    ]}>
                                                                                                  Visiting Card
                                                                                    </Text>
                                                                      </TouchableOpacity>
                                                        </View>

                                                        <View style={styles.tabContent}>
                                                                      {activeTab === 'shopDetails' ? renderShopDetailsTab() : renderVisitingCardTab()}
                                                        </View>
                                          </View>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff'
              },
              content: {
                            flex: 1,
                            padding: 20,
              },
              appTitle: {
                            fontSize: 24,
                            color: '#5A31F4',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 10
              },
              title: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 5,
                            color: '#000'
              },
              skipText: {
                            alignSelf: 'flex-end',
                            color: '#5A31F4',
                            fontSize: 16,
                            marginTop: -5,
              },
              subtitle: {
                            fontSize: 16,
                            color: '#666',
                            textAlign: 'center',
                            marginBottom: 20,
              },
              tabContainer: {
                            flexDirection: 'row',
                            backgroundColor: '#f0f0f0',
                            borderRadius: 10,
                            padding: 4,
                            marginBottom: 20,
              },
              tabButton: {
                            flex: 1,
                            paddingVertical: 12,
                            alignItems: 'center',
                            borderRadius: 8,
              },
              activeTabButton: {
                            backgroundColor: '#fff',
                            ...Platform.select({
                                          ios: {
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 2 },
                                                        shadowOpacity: 0.1,
                                                        shadowRadius: 4,
                                          },
                                          android: {
                                                        elevation: 3,
                                          },
                            }),
              },
              tabButtonText: {
                            fontSize: 16,
                            color: '#666',
              },
              activeTabButtonText: {
                            color: '#000',
                            fontWeight: '500',
              },
              tabContent: {
                            flex: 1,
              },
              inputContainer: {
                            marginBottom: 15,
              },
              inputWithIcon: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#E8E8E8',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            backgroundColor: '#F8F8F8',
              },
              inputIcon: {
                            marginRight: 10,
              },
              input: {
                            flex: 1,
                            height: 50,
                            fontSize: 16,
                            color: '#000',
              },
              locationContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 15,
              },
              locationInput: {
                            width: '48%',
                            height: 50,
                            borderWidth: 1,
                            borderColor: '#E8E8E8',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            fontSize: 16,
                            backgroundColor: '#F8F8F8',
                            color: '#000',
              },
              mapPreview: {
                            height: 150,
                            backgroundColor: '#F8F8F8',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
              },
              mapPreviewText: {
                            fontSize: 18,
                            color: '#666',
                            marginBottom: 5,
              },
              mapHelpText: {
                            fontSize: 14,
                            color: '#999',
              },
              addButton: {
                            backgroundColor: '#5A31F4',
                            borderRadius: 10,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              nextButton: {
                            backgroundColor: '#5A31F4',
                            borderRadius: 10,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              buttonText: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '500',
              },
              uploadContainer: {
                            borderWidth: 1,
                            borderStyle: 'dashed',
                            borderColor: '#ccc',
                            borderRadius: 10,
                            padding: 20,
                            alignItems: 'center',
                            marginBottom: 20,
                            backgroundColor: '#F8F8F8',
              },
              uploadButton: {
                            alignItems: 'center',
              },
              uploadText: {
                            marginTop: 10,
                            fontSize: 16,
                            color: '#333',
              },
              supportedFormats: {
                            fontSize: 14,
                            color: '#999',
                            marginTop: 10,
                            textAlign: 'center',
                            lineHeight: 20,
              },
              cardPreviewContainer: {
                            marginBottom: 20,
              },
              cardPreviewTitle: {
                            fontSize: 18,
                            marginBottom: 10,
                            color: '#333',
              },
              cardPreview: {
                            height: 200,
                            backgroundColor: '#F8F8F8',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
              },
              previewImage: {
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                            borderRadius: 10,
              },
});

export default ShopRegistrationScreen;