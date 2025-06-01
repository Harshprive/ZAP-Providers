// App.js
import React, { useState } from 'react';
import {
              View,
              Text,
              StyleSheet,
              TouchableOpacity,
              Image,
              ScrollView,
              Modal,
              SafeAreaView, navigation,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/footerbar';
import Homerequest from '../components/Homerequest';
import Currentservice from '../components/Currentservice';

import location from './location';
import { useNavigation } from '@react-navigation/native';
import HomeRequest from '../components/Homerequest';

const ServiceCard = ({ service, onPress, expanded }) => {
              const navigation = useNavigation();

              if (expanded) {
                            return (
                                          <Modal
                                                        animationType="slide"
                                                        transparent={true}
                                                        visible={expanded}
                                                        onRequestClose={onPress}
                                          >
                                                        <View style={styles.modalView}>
                                                                      <View style={styles.expandedCard}>
                                                                                    <TouchableOpacity
                                                                                                  style={styles.closeButton}
                                                                                                  onPress={onPress}
                                                                                    >
                                                                                                  <Ionicons name="close" size={24} color="#666" />
                                                                                    </TouchableOpacity>

                                                                                    <Text style={styles.serviceTitle}>{service.title}</Text>
                                                                                    <Text style={styles.locationText}>{service.location}</Text>

                                                                                    <Text style={styles.sectionTitle}>Problem Description</Text>
                                                                                    <Text style={styles.descriptionText}>{service.description}</Text>

                                                                                    <Text style={styles.sectionTitle}>Attachments</Text>
                                                                                    <View style={styles.attachmentsContainer}>
                                                                                                  {service.attachments.map((img, index) => (
                                                                                                                <Image
                                                                                                                              key={index}
                                                                                                                              source={img}
                                                                                                                              style={styles.expandedImage}
                                                                                                                />
                                                                                                  ))}
                                                                                    </View>

                                                                                    <View style={styles.locationContainer}>
                                                                                                  <View style={styles.locationItem}>
                                                                                                                <Ionicons name="location-outline" size={20} color="#666" />
                                                                                                                <Text style={styles.locationLabel}>Your Location</Text>
                                                                                                  </View>
                                                                                                  <Text style={styles.locationValue}>{service.userLocation}</Text>

                                                                                                  <View style={styles.locationItem}>
                                                                                                                <Ionicons name="location-outline" size={20} color="#666" />
                                                                                                                <Text style={styles.locationLabel}>{service.serviceLocation}</Text>
                                                                                                  </View>
                                                                                    </View>

                                                                                    <View style={styles.detailsRow}>
                                                                                                  <View>
                                                                                                                <Text style={styles.detailLabel}>Distance</Text>
                                                                                                                <Text style={styles.detailValue}>{service.distance}</Text>
                                                                                                  </View>
                                                                                                  <View>
                                                                                                                <Text style={styles.detailLabel}>Estimated Time</Text>
                                                                                                                <Text style={styles.detailValue}>{service.estimatedTime}</Text>
                                                                                                  </View>
                                                                                    </View>

                                                                                    <View style={styles.buttonContainer}>
                                                                                                  <TouchableOpacity
                                                                                                                style={[styles.actionButton, styles.rejectButton]}
                                                                                                                onPress={onPress}
                                                                                                  >
                                                                                                                <Text style={styles.buttonText}>Reject</Text>
                                                                                                  </TouchableOpacity>
                                                                                                  <TouchableOpacity
                                                                                                                onPress={() => navigation.navigate("location")}
                                                                                                                style={[styles.actionButton, styles.acceptButton]}

                                                                                                  >
                                                                                                                <Text style={[styles.buttonText, styles.acceptButtonText]}>Accept</Text>
                                                                                                  </TouchableOpacity>
                                                                                    </View>
                                                                      </View>
                                                        </View>
                                          </Modal>
                            );
              }

              return (
                            <TouchableOpacity style={styles.card} onPress={onPress}>
                                          <View>
                                                        <Text style={styles.serviceTitle}>{service.title}</Text>
                                                        <Text style={styles.locationText}>{service.location}</Text>
                                                        <Text style={styles.descriptionText}>{service.description}</Text>
                                                        <View style={styles.imageContainer}>
                                                                      {service.attachments.slice(0, 2).map((img, index) => (
                                                                                    <Image
                                                                                                  key={index}
                                                                                                  source={img}
                                                                                                  style={styles.thumbnail}
                                                                                    />
                                                                      ))}
                                                        </View>
                                                        <View style={styles.buttonContainer}>
                                                                      <TouchableOpacity style={[styles.actionButton, styles.rejectButton]}>
                                                                                    <Text style={styles.buttonText}>Reject</Text>
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity onPress={() => navigation.navigate("location")}

                                                                                    style={[styles.actionButton, styles.acceptButton]}>
                                                                                    <Text style={[styles.buttonText, styles.acceptButtonText]}>Accept</Text>
                                                                      </TouchableOpacity>
                                                        </View>
                                          </View>
                            </TouchableOpacity>
              );
};

const DutyToggle = () => {
              const [dutyStatus, setDutyStatus] = useState('off');

              return (
                            <View style={styles.dutyContainer}>
                                          {/* <TouchableOpacity
                                                        style={[styles.dutyButton, dutyStatus === 'off' && styles.activeButton]}
                                                        onPress={() => setDutyStatus('off')}
                                          >
                                                        <Ionicons name="power" size={24} color={dutyStatus === 'off' ? '#6C63FF' : '#666'} />
                                                        <Text style={[styles.dutyText, dutyStatus === 'off' && styles.activeText]}>OFF DUTY</Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                                        style={[styles.dutyButton, dutyStatus === 'on' && styles.activeButton]}
                                                        onPress={() => setDutyStatus('on')}
                                          >
                                                        <Ionicons name="flash" size={24} color={dutyStatus === 'on' ? '#6C63FF' : '#666'} />
                                                        <Text style={[styles.dutyText, dutyStatus === 'on' && styles.activeText]}>ON DUTY</Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity
                                                        style={[styles.dutyButton, dutyStatus === 'Working' && styles.activeButton]}
                                                        onPress={() => setDutyStatus('working')}
                                          >
                                                        <Ionicons name="flash" size={24} color={dutyStatus === 'working' ? '#6C63FF' : '#666'} />
                                                        <Text style={[styles.dutyText, dutyStatus === 'working' && styles.activeText]}>WORKING </Text>
                                          </TouchableOpacity> */}
                            </View>
              );
};

export default function App() {
              const [selectedService, setSelectedService] = useState(null);
              const [showProduct, setShowProduct] = useState(true)

              const services = [
                            {
                                          title: 'Washing Machine Service',
                                          location: 'paul pagba Shankar Nagar',
                                          description: 'Machine making loud noise during Cycle.Water leaking Form bottom.',
                                          attachments: [
                                                        // require('./assets/img1.jpg'),
                                                        // require('./assets/img2.jpg'),
                                          ],
                                          userLocation: 'Your Location',
                                          serviceLocation: 'Mumbai, Shankar Nagar',
                                          distance: '5.2 Km',
                                          estimatedTime: '20 Min'
                            },
                            {
                                          title: 'Washing Machine Service',
                                          location: 'paul pagba Shankar Nagar',
                                          description: 'Machine making loud noise during Cycle.Water leaking Form bottom.',
                                          attachments: [
                                                        // require('./assets/img1.jpg'),
                                                        // require('./assets/img2.jpg'),
                                          ],
                                          userLocation: 'Your Location',
                                          serviceLocation: 'Mumbai, Shankar Nagar',
                                          distance: '5.2 Km',
                                          estimatedTime: '20 Min'
                            },
                            {
                                          title: 'Washing Machine Service',
                                          location: 'paul pagba Shankar Nagar',
                                          description: 'Machine making loud noise during Cycle.Water leaking Form bottom.',
                                          attachments: [
                                                        // require('./assets/img1.jpg'),
                                                        // require('./assets/img2.jpg'),
                                          ],
                                          userLocation: 'Your Location',
                                          serviceLocation: 'Mumbai, Shankar Nagar',
                                          distance: '5.2 Km',
                                          estimatedTime: '20 Min'
                            },
                            {
                                          title: 'Washing Machine Service',
                                          location: 'paul pagba Shankar Nagar',
                                          description: 'Machine making loud noise during Cycle.Water leaking Form bottom.',
                                          attachments: [
                                                        // require('./assets/img1.jpg'),
                                                        // require('./assets/img2.jpg'),
                                          ],
                                          userLocation: 'Your Location',
                                          serviceLocation: 'Mumbai, Shankar Nagar',
                                          distance: '5.2 Km',
                                          estimatedTime: '20 Min'
                            },
                            // Add more service objects as needed
              ];

              return (
                            <SafeAreaView style={styles.container}>
                                          <View style={styles.header}>
                                                        <View style={styles.headerLeft}>
                                                                      <Text style={styles.welcomeText}>Welcome Back</Text>
                                                                      <Text style={styles.userName}>Allan Smith</Text>
                                                        </View>
                                                        <View style={styles.headerRight}>
                                                                      <Text style={[styles.brandText, { marginRight: 115 }]}>ZAP</Text>
                                                                      <Text onPress={() => setShowProduct(prev => !prev)} > current service</Text>
                                                                      <View style={styles.headerIcons}>
                                                                                    <Ionicons name="notifications-outline" size={24} color="#000" />
                                                                                    {/* <View style={styles.profileIcon}>
                                                                                                  <Text style={styles.profileText}>AS</Text>
                                                                                    </View> */}
                                                                      </View>
                                                        </View>
                                          </View>
                                          {showProduct ? <HomeRequest></HomeRequest> : <Currentservice></Currentservice>}


                                          <Footer></Footer>
                            </SafeAreaView>
              );
}

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#F5F5F5',
              },
              header: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 16,
                            backgroundColor: '#fff',
              },
              headerLeft: {
                            flex: 1,
              },
              welcomeText: {
                            fontSize: 14,
                            color: '#666',
              },
              userName: {
                            fontSize: 18,
                            fontWeight: 'bold',
              },
              headerRight: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              brandText: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#6C63FF',
                            marginRight: 16,
              },
              headerIcons: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 12,
              },
              profileIcon: {
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            backgroundColor: '#E8E8FF',
                            alignItems: 'center',
                            justifyContent: 'center',
              },
              profileText: {
                            color: '#6C63FF',
                            fontWeight: '500',
              },
              dutyContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 16,
                            backgroundColor: '#fff',
                            marginTop: 1,
              },
              dutyButton: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            padding: 8,
                            borderRadius: 8,
              },
              activeButton: {
                            backgroundColor: '#F0EFFF',
              },
              dutyText: {
                            color: '#666',
                            fontWeight: '500',
              },
              goToText: {
                            color: '#666',
                            fontWeight: '500',
              },
              activeText: {
                            color: '#6C63FF',
              },
              cardContainer: {
                            padding: 16,
              },
              card: {
                            backgroundColor: '#fff',
                            borderRadius: 12,
                            padding: 16,
                            marginBottom: 16,
                            shadowColor: '#000',
                            shadowOffset: {
                                          width: 0,
                                          height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
              },
              closeButton: {
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            zIndex: 1,
                            padding: 4,
              },
              serviceTitle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginBottom: 4,
              },
              locationText: {
                            color: '#666',
                            marginBottom: 8,
              },
              descriptionText: {
                            marginBottom: 12,
              },
              imageContainer: {
                            flexDirection: 'row',
                            gap: 8,
                            marginBottom: 16,
              },
              thumbnail: {
                            width: 80,
                            height: 80,
                            borderRadius: 8,
              },
              buttonContainer: {
                            flexDirection: 'row',
                            gap: 12,
              },
              actionButton: {
                            flex: 1,
                            padding: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              rejectButton: {
                            backgroundColor: '#F5F5F5',
              },
              acceptButton: {
                            backgroundColor: '#6C63FF',
              },
              buttonText: {
                            fontWeight: '500',
              },
              acceptButtonText: {
                            color: '#fff',
              },
              modalView: {
                            flex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            justifyContent: 'flex-end',
              },
              expandedCard: {
                            backgroundColor: '#fff',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 20,
                            maxHeight: '90%',
                            paddingTop: 48,
              },
              expandedImage: {
                            width: '48%',
                            height: 120,
                            borderRadius: 8,
              },
              attachmentsContainer: {
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 12,
                            marginTop: 8,
                            marginBottom: 16,
              },
              sectionTitle: {
                            fontSize: 16,
                            fontWeight: '600',
                            marginTop: 16,
                            marginBottom: 8,
              },
              locationContainer: {
                            marginTop: 16,
              },
              locationItem: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            marginBottom: 4,
              },
              locationLabel: {
                            color: '#666',
              },
              locationValue: {
                            marginLeft: 28,
                            marginBottom: 12,
              },
              detailsRow: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 16,
                            marginBottom: 24,
              },
              detailLabel: {
                            color: '#666',
                            marginBottom: 4,
              },
              detailValue: {
                            fontSize: 16,
                            fontWeight: '500',
              },
});