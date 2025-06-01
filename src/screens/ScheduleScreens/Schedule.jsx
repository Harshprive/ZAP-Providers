import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Modal, navigation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/footerbar';

const ServiceScheduleApp = ({ navigation }) => {
              const [activeTab, setActiveTab] = useState('Today');
              const [modalVisible, setModalVisible] = useState(false);
              const [selectedSchedule, setSelectedSchedule] = useState(null);

              const tabs = ['Today', 'Tomorrow', 'This week', 'Completed'];

              const schedules = [
                            {
                                          service: 'Washing machine Repair',
                                          location: 'Downtown Office Complex',
                                          time: '10:00 AM -12:00PM',
                                          confirmed: true,
                                          problem: 'Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetutr diam donec pharetra fermentum semper...',
                            },
                            {
                                          service: 'Washing machine Repair',
                                          location: 'Downtown Office Complex',
                                          time: '10:00 AM -12:00PM',
                                          confirmed: true,
                                          problem: 'Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetutr diam donec pharetra fermentum semper...',
                            },
                            {
                                          service: 'Washing machine Repair',
                                          location: 'Downtown Office Complex',
                                          time: '10:00 AM -12:00PM',
                                          confirmed: true,
                                          problem: 'Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetutr diam donec pharetra fermentum semper...',
                            },
                            {
                                          service: 'Washing machine Repair',
                                          location: 'Downtown Office Complex',
                                          time: '10:00 AM -12:00PM',
                                          confirmed: true,
                                          problem: 'Lorem ipsum dolor sit amet consectetur. In elementum in tempus massa tellus nullam nulla quis. Sed volutpat id mi ut diam. Faucibus lectus sit quam nascetutr diam donec pharetra fermentum semper...',
                            },
              ];

              return (
                            <SafeAreaView style={styles.container}>
                                          <View style={styles.header}>
                                                        <TouchableOpacity style={styles.backButton}>
                                                                      <Ionicons name="arrow-back" size={24} color="black" />
                                                        </TouchableOpacity>
                                                        <Text style={[styles.appTitle, { marginLeft: 100 }]}>ZAP</Text>
                                          </View>

                                          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                                                        {tabs.map((tab) => (
                                                                      <TouchableOpacity
                                                                                    key={tab}
                                                                                    style={[styles.tab, activeTab === tab && styles.activeTab]}
                                                                                    onPress={() => setActiveTab(tab)}
                                                                      >
                                                                                    <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                                                                                  {tab}
                                                                                    </Text>
                                                                      </TouchableOpacity>
                                                        ))}
                                          </ScrollView>

                                          <View style={styles.titleContainer}>
                                                        <Ionicons name="calendar-outline" size={24} color="#666" />
                                                        <Text style={styles.title}>Today's Service Schedules</Text>
                                          </View>

                                          <ScrollView style={styles.scheduleContainer}>
                                                        {schedules.map((schedule, index) => (
                                                                      <TouchableOpacity
                                                                                    key={index}
                                                                                    style={styles.scheduleCard}
                                                                                    onPress={() => {
                                                                                                  setSelectedSchedule(schedule);
                                                                                                  setModalVisible(true);
                                                                                    }}
                                                                      >
                                                                                    <Text style={styles.serviceText}>{schedule.service}</Text>
                                                                                    <View style={styles.locationContainer}>
                                                                                                  <Ionicons name="location-outline" size={16} color="#666" />
                                                                                                  <Text style={styles.locationText}>{schedule.location}</Text>
                                                                                    </View>
                                                                                    <View style={styles.timeContainer}>
                                                                                                  <Ionicons name="time-outline" size={16} color="#666" />
                                                                                                  <Text style={styles.timeText}>{schedule.time}</Text>
                                                                                    </View>
                                                                                    <View style={styles.confirmedBadge}>
                                                                                                  <Text style={styles.confirmedText}>Confirmed</Text>
                                                                                    </View>
                                                                      </TouchableOpacity>
                                                        ))}
                                          </ScrollView>

                                          <Modal
                                                        animationType="slide"
                                                        transparent={true}
                                                        visible={modalVisible}
                                                        onRequestClose={() => setModalVisible(false)}
                                          >
                                                        <View style={styles.modalView}>
                                                                      <View style={styles.modalContent}>
                                                                                    <TouchableOpacity
                                                                                                  style={styles.closeButton}
                                                                                                  onPress={() => setModalVisible(false)}
                                                                                    >
                                                                                                  <Ionicons name="close" size={24} color="black" />
                                                                                    </TouchableOpacity>

                                                                                    {selectedSchedule && (
                                                                                                  <>
                                                                                                                <View style={styles.modalHeader}>
                                                                                                                              <Text style={styles.modalTitle}>{selectedSchedule.service}</Text>
                                                                                                                              <View style={styles.confirmedBadge}>
                                                                                                                                            <Text style={styles.confirmedText}>Confirmed</Text>
                                                                                                                              </View>
                                                                                                                </View>

                                                                                                                <View style={styles.modalLocation}>
                                                                                                                              <Ionicons name="location-outline" size={20} color="#666" />
                                                                                                                              <Text style={styles.modalLocationText}>{selectedSchedule.location}</Text>
                                                                                                                </View>

                                                                                                                <View style={styles.modalTime}>
                                                                                                                              <Ionicons name="time-outline" size={20} color="#666" />
                                                                                                                              <Text style={styles.modalTimeText}>{selectedSchedule.time}</Text>
                                                                                                                </View>

                                                                                                                <View style={styles.problemSection}>
                                                                                                                              <Text style={styles.problemTitle}>What is the problem ?</Text>
                                                                                                                              <Text style={styles.problemText}>{selectedSchedule.problem}</Text>
                                                                                                                </View>

                                                                                                                <View style={styles.mediaPreviews}>
                                                                                                                              <Text style={styles.mediaTitle}>Media Previews</Text>
                                                                                                                              <View style={styles.mediaIcons}>
                                                                                                                                            <View style={styles.mediaIcon}>
                                                                                                                                                          <Ionicons name="image-outline" size={24} color="#666" />
                                                                                                                                            </View>
                                                                                                                                            <View style={styles.mediaIcon}>
                                                                                                                                                          <Ionicons name="videocam-outline" size={24} color="#666" />
                                                                                                                                            </View>
                                                                                                                                            <View style={styles.mediaIcon}>
                                                                                                                                                          <Ionicons name="document-outline" size={24} color="#666" />
                                                                                                                                            </View>
                                                                                                                                            <View style={styles.mediaIcon}>
                                                                                                                                                          <Ionicons name="chatbubble-outline" size={24} color="#666" />
                                                                                                                                            </View>
                                                                                                                              </View>
                                                                                                                </View>

                                                                                                                <View style={styles.buttonContainer}>
                                                                                                                              <TouchableOpacity style={styles.rescheduleButton} onPress={() => navigation.navigate("Reschedule")}>
                                                                                                                                            <Text style={styles.rescheduleText}>ReSchedules</Text>
                                                                                                                              </TouchableOpacity>
                                                                                                                              <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate("location")}>
                                                                                                                                            <Text style={styles.confirmText}>Start </Text>
                                                                                                                              </TouchableOpacity>
                                                                                                                              <TouchableOpacity style={styles.prerequisitesButton} onPress={() => navigation.navigate("preorder")}>
                                                                                                                                            <Text style={styles.prerequisitesText}>Prerequisites</Text>
                                                                                                                              </TouchableOpacity>
                                                                                                                </View>
                                                                                                  </>
                                                                                    )}
                                                                      </View>
                                                        </View>
                                          </Modal>

                                          <Footer />
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              header: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 16,
              },
              backButton: {
                            marginRight: 16,
              },
              appTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#6B35E8',
              },
              tabContainer: {
                            flexDirection: 'row',
                            paddingHorizontal: 16,
                            marginBottom: 16,
              },
              tab: {
                            paddingHorizontal: 20,
                            paddingVertical: 8,
                            marginRight: 8,
                            borderRadius: 20,
                            backgroundColor: '#fff',
              },
              activeTab: {
                            backgroundColor: '#6B35E8',
              },
              tabText: {
                            color: '#666',
              },
              activeTabText: {
                            color: '#fff',
              },
              titleContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 16,
                            marginBottom: 16,
              },
              title: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 8,
              },
              scheduleContainer: {
                            paddingHorizontal: 16,
              },
              scheduleCard: {
                            backgroundColor: '#fff',
                            borderRadius: 12,
                            padding: 16,
                            marginBottom: 12,
              },
              serviceText: {
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 8,
              },
              locationContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 4,
              },
              locationText: {
                            marginLeft: 4,
                            color: '#666',
              },
              timeContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              timeText: {
                            marginLeft: 4,
                            color: '#666',
              },
              confirmedBadge: {
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            backgroundColor: '#E8F5E9',
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 12,
              },
              confirmedText: {
                            color: '#4CAF50',
                            fontSize: 12,
                            fontWeight: '500',
              },
              modalView: {
                            flex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            justifyContent: 'flex-end',
              },
              modalContent: {
                            backgroundColor: '#fff',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 20,
                            minHeight: '80%',
              },
              closeButton: {
                            alignSelf: 'flex-end',
                            padding: 10,
              },
              modalHeader: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
              },
              modalTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
              },
              modalLocation: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10,
              },
              modalLocationText: {
                            marginLeft: 10,
                            color: '#666',
                            fontSize: 16,
              },
              modalTime: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20,
              },
              modalTimeText: {
                            marginLeft: 10,
                            color: '#666',
                            fontSize: 16,
              },
              problemSection: {
                            marginBottom: 20,
              },
              problemTitle: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 10,
              },
              problemText: {
                            color: '#666',
                            lineHeight: 20,
              },
              mediaPreviews: {
                            marginBottom: 20,
              },
              mediaTitle: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 10,
              },
              mediaIcons: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20,
              },
              mediaIcon: {
                            width: 60,
                            height: 60,
                            backgroundColor: '#f5f5f5',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              buttonContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 'auto',
              },
              rescheduleButton: {
                            backgroundColor: '#FFE5E5',
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 8,
              },
              rescheduleText: {
                            color: '#FF0000',
                            fontWeight: '500',
              },
              confirmButton: {
                            backgroundColor: '#6B35E8',
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 8,
              },
              confirmText: {
                            color: '#fff',
                            fontWeight: '500',
              },
              prerequisitesButton: {
                            backgroundColor: '#E0E0E0',
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 8,
              },
              prerequisitesText: {
                            color: '#666',
                            fontWeight: '500',
              },
});

export default ServiceScheduleApp;