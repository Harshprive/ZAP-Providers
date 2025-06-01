import React, { useState } from 'react';
import {
              View,
              Text,
              TouchableOpacity,
              Image,
              StyleSheet,
              ScrollView,
              Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import TakeAwayShopRegrestrationScreen from './TakeAwayShopRegrestrationScreen';

const CreateGalleryForm = ({ navigation }) => {
              const providerName = "Rahul Bagde";
              const serviceName = "Plumbing";
              const [images, setImages] = useState([]);

              const pickImages = async () => {
                            if (Platform.OS !== 'web') {
                                          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                                          if (status !== 'granted') {
                                                        alert('Sorry, we need camera roll permissions to make this work!');
                                                        return;
                                          }
                            }

                            let result = await ImagePicker.launchImageLibraryAsync({
                                          mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                          allowsMultipleSelection: true,
                                          aspect: [1, 1],
                                          quality: 1,
                            });

                            if (!result.canceled) {
                                          const newImages = result.assets.map(asset => asset.uri);
                                          setImages(prev => [...prev, ...newImages].slice(0, 9));
                            }
              };

              const handleClearImages = () => {
                            setImages([]);
              };

              const deleteImage = (uri) => {
                            setImages(prev => prev.filter(image => image !== uri));
              };

              const renderImageGrid = () => {
                            const totalSlots = 9;
                            const slots = [...Array(totalSlots)].map((_, index) => {
                                          const image = images[index];
                                          return (
                                                        <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => image && deleteImage(image)}>
                                                                      {image ? (
                                                                                    <Image source={{ uri: image }} style={styles.image} />
                                                                      ) : (
                                                                                    <View style={styles.placeholder} />
                                                                      )}
                                                        </TouchableOpacity>
                                          );
                            });
                            return slots;
              };

              return (
                            <ScrollView style={styles.container}>
                                          <View style={styles.headerLine} />
                                          <Text style={styles.appTitle}>ZAP</Text>
                                          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('NextScreen')}>
                                                        <Text style={styles.skipText}>Skip</Text>
                                                        <Ionicons name="chevron-forward" size={20} color="#666" />
                                          </TouchableOpacity>

                                          <View style={styles.card}>
                                                        <Text style={[styles.title, { alignSelf: "center" }]}>Create Galleries</Text>
                                                        <View style={styles.detailsContainer}>
                                                                      <Text style={[styles.label, { fontWeight: 'bold' }]}>Provider : {providerName}</Text>
                                                                      <Text style={[styles.label, { fontWeight: 'bold' }]}>Service : {serviceName}</Text>
                                                                      <Text style={[styles.label, { fontWeight: 'bold' }]}>Sub Service : {serviceName} ,{serviceName} </Text>
                                                        </View>

                                                        <View style={styles.buttonContainer}>
                                                                      <TouchableOpacity style={[styles.button, styles.uploadButton]} onPress={pickImages}>
                                                                                    <Ionicons name="cloud-upload" size={20} color="white" />
                                                                                    <Text style={styles.buttonText}>Upload</Text>
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearImages}>
                                                                                    <Ionicons name="trash" size={20} color="white" />
                                                                                    <Text style={styles.buttonText}>Clear All</Text>
                                                                      </TouchableOpacity>
                                                        </View>

                                                        <View style={styles.imageGrid}>{renderImageGrid()}</View>
                                                        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('TakeAwayShopRegrestrationScreen')}>
                                                                      <Text style={styles.buttonText}>Next</Text>
                                                        </TouchableOpacity>
                                          </View>
                            </ScrollView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              skipButton: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            zIndex: 1,
              },
              skipText: {
                            fontSize: 16,
                            color: '#666',
                            marginRight: 4,
              },
              card: {
                            backgroundColor: 'white',
                            borderRadius: 10,
                            padding: 20,
                            margin: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
              },
              title: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20,
              },
              detailsContainer: {
                            marginBottom: 20,
              },
              label: {
                            fontSize: 16,
                            color: '#333',
                            marginBottom: 8,
              },
              buttonContainer: {
                            flexDirection: 'row',
                            gap: 10,
                            marginBottom: 20,
              },
              button: {
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 12,
                            borderRadius: 8,
                            gap: 8,
              },
              uploadButton: {
                            backgroundColor: '#2563eb',
              },
              clearButton: {
                            backgroundColor: '#dc2626',
              },
              buttonText: {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '500',
              },
              imageGrid: {
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 8,
                            marginBottom: 20,
              },
              imageContainer: {
                            width: '32%',
                            aspectRatio: 1,
              },
              image: {
                            width: '100%',
                            height: '100%',
                            borderRadius: 8,
              },
              placeholder: {
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#f3f4f6',
                            borderRadius: 8,
              },
              nextButton: {
                            backgroundColor: '#7c3aed',
                            padding: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              headerLine: {
                            height: 3,
                            backgroundColor: '#6200ee',
                            width: '50%',
                            marginTop: 10,
              },
              appTitle: {
                            fontSize: 24,
                            color: '#6200ee',
                            textAlign: 'center',
                            marginVertical: 10,
                            fontWeight: 'bold',
              },
});

export default CreateGalleryForm;
