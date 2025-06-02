import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/footerbar';

const ServiceRequestCard = ({ status, onPress }) => (
              <TouchableOpacity onPress={onPress} style={styles.card}>
                            <View style={styles.cardContent}>
                                          <Text style={styles.serviceTitle}>Home Cleaning Service</Text>
                                          <View style={styles.detailRow}>
                                                        <Text style={styles.label}>Client :</Text>
                                                        <Text style={styles.value}>Rahul Bagde</Text>
                                          </View>
                                          <View style={styles.detailRow}>
                                                        <Text style={styles.label}>Date :</Text>
                                                        <Text style={styles.value}>24-09-2024</Text>
                                          </View>
                            </View>
                            <View style={[styles.statusBadge, status === 'Un-seen' ? styles.unseenBadge : styles.seenBadge]}>
                                          <Text style={styles.statusText}>{status}</Text>
                            </View>
              </TouchableOpacity>
);

export default function ServiceRequestScreen({ navigation }) {
              const handleCardPress = (status) => {
                            console.log(`Card with status ${status} clicked!`);
                            // You can navigate to another screen or perform any other action here
              };

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar barStyle="dark-content" />

                                          {/* Header */}
                                          <View style={styles.header}>
                                                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                                                      <Ionicons name="chevron-back" size={24} color="#000" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>APP</Text>
                                          </View>

                                          {/* Page Title */}
                                          <Text style={styles.pageTitle}>Service Request</Text>

                                          {/* Request Cards */}
                                          <ScrollView style={styles.scrollView}>
                                                        <ServiceRequestCard status="Un-seen" onPress={() => navigation.navigate("RequestDetails")} />
                                                        <ServiceRequestCard status="Seen" onPress={() => handleCardPress('Seen')} />
                                                        <ServiceRequestCard status="Seen" onPress={() => handleCardPress('Seen')} />
                                                        <ServiceRequestCard status="Seen" onPress={() => handleCardPress('Seen')} />
                                                        <ServiceRequestCard status="Seen" onPress={() => handleCardPress('Seen')} />
                                          </ScrollView>
                                          <Footer />
                            </SafeAreaView>
              );
}

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff',
              },
              header: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 16,
                            borderBottomWidth: 1,
                            borderBottomColor: '#eee',
              },
              backButton: {
                            padding: 8,
              },
              headerTitle: {
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#6B46C1',
                            marginLeft: 8,
              },
              pageTitle: {
                            fontSize: 18,
                            fontWeight: '600',
                            padding: 16,
              },
              scrollView: {
                            flex: 1,
                            padding: 16,
              },
              card: {
                            backgroundColor: '#fff',
                            borderRadius: 12,
                            marginBottom: 16,
                            padding: 16,
                            borderWidth: 1,
                            borderColor: '#eee',
                            position: 'relative',
              },
              cardContent: {
                            gap: 8,
              },
              serviceTitle: {
                            fontSize: 16,
                            fontWeight: '500',
                            marginBottom: 8,
              },
              detailRow: {
                            flexDirection: 'row',
                            gap: 8,
              },
              label: {
                            color: '#666',
              },
              value: {
                            color: '#333',
              },
              statusBadge: {
                            position: 'absolute',
                            right: 16,
                            top: 16,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 16,
              },
              unseenBadge: {
                            backgroundColor: '#E9D5FF',
              },
              seenBadge: {
                            backgroundColor: '#DCF7E3',
              },
              statusText: {
                            fontSize: 12,
                            color: '#333',
              },
});
