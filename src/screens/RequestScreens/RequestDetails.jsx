import React from 'react';
import {
              StyleSheet,
              View,
              Text,
              Image,
              ScrollView,
              TouchableOpacity,
              Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const CleaningServiceScreen = ({ navigation }) => {
              const cleaningImages = [
                            // require('./assets/cleaning1.jpg'),
                            // require('./assets/cleaning2.jpg'),
                            // require('./assets/cleaning3.jpg'),
              ];

              return (
                            <ScrollView style={styles.container}>
                                          <StatusBar style="auto" />

                                          {/* Header */}
                                          {/* <View style={styles.header}>
                                                        <TouchableOpacity>
                                                                      <Ionicons name="arrow-back" size={24} color="#000" />
                                                        </TouchableOpacity>
                                                        <View style={styles.titleContainer}>
                                                                      <Text style={styles.appTitle}>APP</Text>
                                                        </View>
                                                        {/* Reject Button */}
                                          {/* <TouchableOpacity style={styles.rejectButton}>
                                                                      <Text style={styles.rejectText}>✕ Reject</Text>
                                                        </TouchableOpacity>
                                          </View> */}
                                          {/* <View style={styles.header}>
                                                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                                                      <Ionicons name="chevron-back" size={24} color="#000" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>APP</Text>
                                          </View> */}

                                          {/* Service Title */}
                                          <Text style={styles.serviceTitle}>Home Cleaning Service</Text>

                                          {/* Description Section */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Description</Text>
                                                        <Text style={styles.descriptionText}>
                                                                      Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis.
                                                        </Text>
                                          </View>

                                          {/* Messages Section */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Messages</Text>
                                                        <View style={styles.messageBox}>
                                                                      <Text style={styles.messageText}>
                                                                                    Rahul Bagde: Need a thorough cleaning before a family gathering
                                                                      </Text>
                                                        </View>
                                                        <View style={styles.messageBox}>
                                                                      <Text style={styles.messageText}>
                                                                                    Service provide :we can provide comprehensive cleaning services
                                                                      </Text>
                                                        </View>
                                          </View>

                                          {/* Images Section */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Images</Text>
                                                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                                                      <View style={styles.imagesContainer}>
                                                                                    {cleaningImages.map((image, index) => (
                                                                                                  <Image key={index} source={image} style={styles.image} />
                                                                                    ))}
                                                                      </View>
                                                        </ScrollView>
                                          </View>

                                          {/* Video Section */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Video</Text>
                                                        <View style={styles.videoPlaceholder}>
                                                                      <Ionicons name="videocam" size={32} color="#666" />
                                                        </View>
                                          </View>

                                          {/* Bottom Buttons */}
                                          <View style={styles.bottomButtons}>
                                                        <TouchableOpacity style={styles.prerequisitesButton} onPress={() => navigation.navigate("Prereguisite")}>
                                                                      <Text style={styles.prerequisitesText}>Add Prerequisites</Text>
                                                        </TouchableOpacity>
                                                        <View style={styles.actionButtons}>
                                                                      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("location")}>
                                                                                    <Text style={styles.buttonText}>START</Text>
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity style={styles.acceptButton}>
                                                                                    <Text style={styles.buttonText}>ACCEPT</Text>
                                                                      </TouchableOpacity>
                                                        </View>
                                          </View>
                            </ScrollView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff',
              },
              // header: {
              //               flexDirection: 'row',
              //               alignItems: 'center',
              //               justifyContent: 'space-between',
              //               padding: 16,
              //               borderBottomWidth: 1,
              //               borderBottomColor: '#eee',
              //               position: 'absolute',
              //               top: 0,
              //               left: 0,
              //               right: 0,
              //               zIndex: 10, // Makes sure the header stays on top of other content
              //               backgroundColor: '#fff', // Make the header background solid
              // },
              titleContainer: {
                            alignItems: 'center',
              },
              appTitle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#4A90E2',
              },
              rejectButton: {
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#ff4444',
                            borderRadius: 4,
                            padding: 8,
                            position: 'absolute',
                            right: 16,
              },
              rejectText: {
                            color: '#ff4444',
              },
              serviceTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 16,
                            marginTop: 80, // To provide space for the header
              },
              section: {
                            padding: 16,
                            borderBottomWidth: 1,
                            borderBottomColor: '#eee',
              },
              sectionTitle: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 12,
              },
              descriptionText: {
                            color: '#666',
                            lineHeight: 20,
              },
              messageBox: {
                            backgroundColor: '#f0f0f0',
                            padding: 12,
                            borderRadius: 8,
                            marginBottom: 8,
              },
              messageText: {
                            color: '#444',
              },
              imagesContainer: {
                            flexDirection: 'row',
                            gap: 12,
              },
              image: {
                            width: 120,
                            height: 120,
                            borderRadius: 8,
              },
              videoPlaceholder: {
                            width: '100%',
                            height: 120,
                            backgroundColor: '#f0f0f0',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              bottomButtons: {
                            padding: 16,
                            gap: 12,
              },
              prerequisitesButton: {
                            backgroundColor: '#f0f0f0',
                            padding: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              prerequisitesText: {
                            color: '#444',
              },
              actionButtons: {
                            flexDirection: 'row',
                            gap: 12,
              },
              startButton: {
                            flex: 1,
                            backgroundColor: '#6200ee',
                            padding: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              acceptButton: {
                            flex: 1,
                            backgroundColor: '#4CAF50',
                            padding: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              buttonText: {
                            color: '#fff',
                            fontWeight: 'bold',
              },
});

export default CleaningServiceScreen;
