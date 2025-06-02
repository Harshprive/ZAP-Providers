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
import Currentservice from '../components/Currentservice';
import location from './location';
import { useNavigation } from '@react-navigation/native';

const ServiceCard = ({ service, onPress, expanded }) => {
              const navigation = useNavigation();
              if (expanded) {

              }


};

const DutyToggle = () => {
              const [dutyStatus, setDutyStatus] = useState('off');

              return (
                            <View style={styles.dutyContainer}>
                                          <TouchableOpacity
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
                                                        style={[styles.dutyButton, dutyStatus === 'goto' && styles.activeButton]}
                                                        onPress={() => setDutyStatus('goto')}
                                          >
                                                        <Text style={[styles.goToText, dutyStatus === 'goto' && styles.activeText]}>GO TO</Text>
                                          </TouchableOpacity>
                            </View>
              );
};

export default function App() {
              const [selectedService, setSelectedService] = useState(null);



              return (
                            <SafeAreaView style={styles.container}>
                                          <Currentservice></Currentservice>
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