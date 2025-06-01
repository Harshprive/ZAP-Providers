import React, { useState, useEffect } from 'react';
import {
              View,
              Text,
              TouchableOpacity,
              StyleSheet,
              ScrollView,
              Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import AppointmentConfirmedScreen from './AppointmentConfirmedScreen';


const AppointmentScheduleScreen = ({ navigation }) => {
              const [selectedService, setSelectedService] = useState('');
              const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
              const [selectedLocation, setSelectedLocation] = useState(null);
              const [isFormComplete, setIsFormComplete] = useState(false);

              // Check if all required fields are filled
              useEffect(() => {
                            if (selectedService && selectedTimeSlot && selectedLocation) {
                                          setIsFormComplete(true);
                            } else {
                                          setIsFormComplete(false);
                            }
              }, [selectedService, selectedTimeSlot, selectedLocation]);

              const timeSlots = [
                            { id: 1, time: '11:00 AM' },
                            { id: 2, time: '12:00 AM' },
                            { id: 3, time: '01:00 PM' },
                            { id: 4, time: '10:00 AM' },
                            { id: 5, time: '11:30 AM' },
                            { id: 6, time: '12:30 AM' },
                            { id: 7, time: '03:00 AM' },
                            { id: 8, time: '04:00 AM' },
              ];

              const locations = [
                            { id: 1, name: 'Main Office', address: '345 Raja bazar, Nagpur' },
                            { id: 2, name: 'Downtown Branch', address: '646 Manish nagar, Nagpur' },
                            { id: 3, name: 'Tech Branch', address: '951 Nandanvan, Nagpur' },
              ];

              const renderTimeSlots = () => {
                            return (
                                          <View style={styles.timeSlotsContainer}>
                                                        {timeSlots.map((slot) => (
                                                                      <TouchableOpacity
                                                                                    key={slot.id}
                                                                                    style={[
                                                                                                  styles.timeSlot,
                                                                                                  selectedTimeSlot === slot.id && styles.selectedTimeSlot
                                                                                    ]}
                                                                                    onPress={() => setSelectedTimeSlot(slot.id)}
                                                                      >
                                                                                    <Text style={[
                                                                                                  styles.timeSlotText,
                                                                                                  selectedTimeSlot === slot.id && styles.selectedTimeSlotText
                                                                                    ]}>
                                                                                                  {slot.time}
                                                                                    </Text>
                                                                      </TouchableOpacity>
                                                        ))}
                                          </View>
                            );
              };

              const renderLocations = () => {
                            return (
                                          <View style={styles.locationsContainer}>
                                                        {locations.map((location) => (
                                                                      <TouchableOpacity
                                                                                    key={location.id}
                                                                                    style={[
                                                                                                  styles.locationItem,
                                                                                                  selectedLocation === location.id && styles.selectedLocation
                                                                                    ]}
                                                                                    onPress={() => setSelectedLocation(location.id)}
                                                                      >
                                                                                    <Text style={styles.locationName}>{location.name}</Text>
                                                                                    <Text style={styles.locationAddress}>{location.address}</Text>
                                                                      </TouchableOpacity>
                                                        ))}
                                          </View>
                            );
              };

              return (
                            <View style={styles.container}>
                                          <View >
                                                        <View style={styles.headerLine} />
                                                        <Text style={styles.appTitle}>ZAP</Text>
                                          </View>

                                          <View style={styles.card}>
                                                        <ScrollView contentContainerStyle={styles.scrollContent}>
                                                                      <Text style={styles.title}>Schedule Appointment</Text>

                                                                      <View style={styles.section}>
                                                                                    <View style={styles.sectionHeader}>
                                                                                                  <Ionicons name="briefcase-outline" size={24} color="black" style={styles.icon} />
                                                                                                  <Text style={styles.sectionTitle}>Main Service</Text>
                                                                                    </View>
                                                                                    <View style={styles.pickerContainer}>
                                                                                                  <Picker
                                                                                                                selectedValue={selectedService}
                                                                                                                onValueChange={(itemValue) => setSelectedService(itemValue)}
                                                                                                                style={styles.picker}
                                                                                                  >
                                                                                                                <Picker.Item label="Select a service" value="" />
                                                                                                                <Picker.Item label="Consultation" value="consultation" />
                                                                                                                <Picker.Item label="Check-up" value="checkup" />
                                                                                                                <Picker.Item label="Follow-up" value="followup" />
                                                                                                  </Picker>
                                                                                    </View>
                                                                      </View>

                                                                      <View style={styles.section}>
                                                                                    <View style={styles.sectionHeader}>
                                                                                                  <Ionicons name="time-outline" size={24} color="black" style={styles.icon} />
                                                                                                  <Text style={styles.sectionTitle}>Available Time Slots</Text>
                                                                                    </View>
                                                                                    {renderTimeSlots()}
                                                                                    <Text style={styles.noteText}>Please select a date first</Text>
                                                                      </View>

                                                                      <View style={styles.section}>
                                                                                    <View style={styles.sectionHeader}>
                                                                                                  <Ionicons name="location-outline" size={24} color="black" style={styles.icon} />
                                                                                                  <Text style={styles.sectionTitle}>Select Location</Text>
                                                                                    </View>
                                                                                    {renderLocations()}
                                                                      </View>

                                                                      <TouchableOpacity
                                                                                    onPress={() => navigation.navigate("AppointmentConfirmedScreen")}
                                                                                    style={[
                                                                                                  styles.scheduleButton,
                                                                                                  isFormComplete && styles.activeScheduleButton
                                                                                    ]}
                                                                                    disabled={!isFormComplete}
                                                                      >
                                                                                    <Text style={[
                                                                                                  styles.scheduleButtonText,
                                                                                                  isFormComplete && styles.activeScheduleButtonText
                                                                                    ]}>
                                                                                                  Schedule Appointment
                                                                                    </Text>
                                                                      </TouchableOpacity>
                                                        </ScrollView>
                                          </View>
                            </View>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff',
              },
              header: {
                            backgroundColor: '#5A31F4',
                            paddingVertical: 15,
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            borderBottomColor: '#5A31F4',
              }, appTitle: { fontSize: 24, color: '#6200ee', textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },
              headerText: {
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: 'bold',
              },
              card: {
                            flex: 1,
                            margin: 20,
                            backgroundColor: '#fff',
                            borderRadius: 10,
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
              scrollContent: {
                            padding: 20,
              },
              title: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            textAlign: 'center',
              },
              section: {
                            marginBottom: 20,
              },
              sectionHeader: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
              },
              icon: {
                            marginRight: 8,
              },
              sectionTitle: {
                            fontSize: 16,
                            fontWeight: '500',
              },
              pickerContainer: {
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 5,
                            backgroundColor: '#f5f5f5',
              },
              picker: {
                            height: 50,
              },
              timeSlotsContainer: {
                            flexDirection: 'row',
                            flexWrap: 'wrap',
              },
              timeSlot: {
                            backgroundColor: '#E6E6FA',
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            borderRadius: 20,
                            margin: 5,
              },
              selectedTimeSlot: {
                            backgroundColor: '#5A31F4',
              },
              timeSlotText: {
                            color: '#333',
              },
              selectedTimeSlotText: {
                            color: '#fff',
              },
              noteText: {
                            fontSize: 12,
                            color: '#888',
                            marginTop: 5,
                            marginLeft: 5,
              }, headerLine: { height: 3, backgroundColor: '#6200ee', width: '65%', marginTop: 10 },
              locationsContainer: {
                            marginTop: 10,
              },
              locationItem: {
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 5,
                            padding: 12,
                            marginBottom: 10,
              },
              selectedLocation: {
                            borderColor: '#5A31F4',
                            backgroundColor: '#F0F0FF',
              },
              locationName: {
                            fontSize: 16,
                            fontWeight: '500',
              },
              locationAddress: {
                            fontSize: 14,
                            color: '#666',
                            marginTop: 3,
              },
              scheduleButton: {
                            backgroundColor: '#ddd',
                            paddingVertical: 15,
                            borderRadius: 5,
                            alignItems: 'center',
                            marginTop: 20,
              },
              activeScheduleButton: {
                            backgroundColor: '#5A31F4',
              },
              scheduleButtonText: {
                            color: '#666',
                            fontSize: 16,
              },
              activeScheduleButtonText: {
                            color: '#fff',
              },
});

export default AppointmentScheduleScreen;