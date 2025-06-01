import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ScheduleAppointmentScreen from './ScheduleAppointmentScreen';
import CreateProfileScreen from './CreateProfileScreen';

export default function AppointmentConfirmationScreen({ navigation }) {
              return (
                            <View style={styles.container}>
                                          <View style={styles.headerLine} />
                                          <Text style={styles.appTitle}>ZAP</Text>

                                          <View style={styles.card}>
                                                        <View style={styles.checkCircle}>
                                                                      <Ionicons name="checkmark" size={36} color="white" />
                                                        </View>

                                                        <Text style={styles.confirmationTitle}>Appointment Confirmed</Text>
                                                        <Text style={styles.subText}>Your application is successful. Schedule</Text>

                                                        <View style={styles.detailsContainer}>
                                                                      {/* Date and Time */}
                                                                      <View style={styles.detailRow}>
                                                                                    <View style={styles.iconContainer}>
                                                                                                  <Ionicons name="calendar" size={20} color="#4e44ce" />
                                                                                    </View>
                                                                                    <View style={styles.detailTextContainer}>
                                                                                                  <Text style={styles.detailLabel}>Date and Time</Text>
                                                                                                  <Text style={styles.detailValue}>Wednesday, December 27, 2024</Text>
                                                                                                  <Text style={styles.detailValue}>02:30PM</Text>
                                                                                    </View>
                                                                      </View>

                                                                      {/* Location */}
                                                                      <View style={styles.detailRow}>
                                                                                    <View style={styles.iconContainer}>
                                                                                                  <FontAwesome5 name="map-marker-alt" size={20} color="#ff9d4d" />
                                                                                    </View>
                                                                                    <View style={styles.detailTextContainer}>
                                                                                                  <Text style={styles.detailLabel}>Location</Text>
                                                                                                  <Text style={styles.detailValue}>Downtown Branch</Text>
                                                                                                  <Text style={styles.detailValue}>846 Manish Nagar, Nagpur</Text>
                                                                                    </View>
                                                                      </View>

                                                                      {/* Contact Person */}
                                                                      <View style={styles.detailRow}>
                                                                                    <View style={styles.iconContainer}>
                                                                                                  <MaterialIcons name="person-outline" size={20} color="#4e44ce" />
                                                                                    </View>
                                                                                    <View style={styles.detailTextContainer}>
                                                                                                  <Text style={styles.detailLabel}>Contact Person</Text>
                                                                                                  <Text style={styles.detailValue}>Mahesh sharda</Text>
                                                                                                  <Text style={styles.detailValue}>Senior AppointmentCoordinate</Text>
                                                                                    </View>
                                                                      </View>

                                                                      {/* Phone */}
                                                                      <View style={styles.detailRow}>
                                                                                    <View style={styles.iconContainer}>
                                                                                                  <FontAwesome name="phone" size={20} color="#ff6b6b" />
                                                                                    </View>
                                                                                    <View style={styles.detailTextContainer}>
                                                                                                  <Text style={styles.detailValue}>+91 5678943121</Text>
                                                                                    </View>
                                                                      </View>

                                                                      {/* Email */}
                                                                      <View style={styles.detailRow}>
                                                                                    <View style={styles.iconContainer}>
                                                                                                  <MaterialIcons name="email" size={20} color="#7ed321" />
                                                                                    </View>
                                                                                    <View style={styles.detailTextContainer}>
                                                                                                  <Text style={styles.detailValue}>Appointments@gmail.com</Text>
                                                                                    </View>
                                                                      </View>
                                                        </View>

                                                        {/* Buttons */}
                                                        <View style={styles.buttonContainer}>
                                                                      <TouchableOpacity onPress={() => navigation.navigate("ScheduleAppointmentScreen")} style={styles.modifyButton}>
                                                                                    <Text style={styles.modifyButtonText}>Modify Appointment</Text>
                                                                      </TouchableOpacity>

                                                                      <TouchableOpacity onPress={() => navigation.navigate("CreateProfileScreen")} style={styles.calendarButton}>
                                                                                    <Text style={styles.calendarButtonText}>Start ZAP Services</Text>
                                                                      </TouchableOpacity>
                                                        </View>
                                          </View>
                            </View>
              );
}

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f8f9fa',
                            padding: 20,
              },
              appTitle: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#4e44ce',
                            textAlign: 'center',
                            marginBottom: 20,
              },
              card: {
                            backgroundColor: 'white',
                            borderRadius: 15,
                            padding: 25,
                            shadowColor: '#000',
                            shadowOffset: {
                                          width: 0,
                                          height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            elevation: 5,
                            alignItems: 'center',
              },
              checkCircle: {
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: '#4e44ce',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 15,
              },
              confirmationTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 5,
              },
              subText: {
                            color: '#888',
                            marginBottom: 20,
                            fontSize: 14,
              },
              detailsContainer: {
                            width: '100%',
                            marginTop: 10,
              },
              detailRow: {
                            flexDirection: 'row',
                            marginBottom: 15,
                            alignItems: 'flex-start',
              },
              iconContainer: {
                            width: 34,
                            alignItems: 'center',
                            marginRight: 10,
              },
              detailTextContainer: {
                            flex: 1,
              },
              detailLabel: {
                            fontWeight: '600',
                            marginBottom: 4,
              },
              detailValue: {
                            color: '#444',
                            fontSize: 14,
                            marginBottom: 2,
              },
              buttonContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginTop: 20,
              },
              modifyButton: {
                            backgroundColor: '#4e44ce',
                            borderRadius: 8,
                            paddingVertical: 12,
                            paddingHorizontal: 18,
                            flex: 1,
                            marginRight: 8,
                            alignItems: 'center',
              },
              modifyButtonText: {
                            color: 'white',
                            fontWeight: '600',
                            fontSize: 14,
              },
              calendarButton: {
                            backgroundColor: '#4CD964',
                            borderRadius: 8,
                            paddingVertical: 12,
                            paddingHorizontal: 18,
                            flex: 1,
                            marginLeft: 8,
                            alignItems: 'center',
              },
              calendarButtonText: {
                            color: 'white',
                            fontWeight: '600',
                            fontSize: 14,
              },
});