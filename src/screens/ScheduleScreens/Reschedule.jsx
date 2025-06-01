import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const RescheduleScreen = () => {
              const [selectedDate, setSelectedDate] = useState('22 Nov');
              const [selectedTime, setSelectedTime] = useState('2:00 PM');

              const dates = [
                            '20 Nov', '21 Nov', '22 Nov', '23 Nov',
                            '24 Nov', '25 Nov', '26 Nov'
              ];

              const afternoonSlots = [
                            '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
                            '3:00 PM', '3:30 PM', '4:00 PM'
              ];

              const eveningSlots = [
                            '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
                            '7:00 PM'
              ];

              const renderTimeSlot = (time) => (
                            <TouchableOpacity
                                          key={time}
                                          style={[
                                                        styles.timeSlot,
                                                        selectedTime === time && styles.selectedSlot
                                          ]}
                                          onPress={() => setSelectedTime(time)}
                            >
                                          <Text style={[
                                                        styles.timeText,
                                                        selectedTime === time && styles.selectedText
                                          ]}>
                                                        {time}
                                          </Text>
                            </TouchableOpacity>
              );

              return (
                            <ScrollView style={styles.container}>
                                          <View style={styles.header}>
                                                        <Text style={styles.headerTitle}>Reschedule</Text>
                                          </View>

                                          <Text style={styles.sectionTitle}>Date</Text>
                                          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                                        <View style={styles.dateContainer}>
                                                                      {dates.map((date) => (
                                                                                    <TouchableOpacity
                                                                                                  key={date}
                                                                                                  style={[
                                                                                                                styles.dateSlot,
                                                                                                                selectedDate === date && styles.selectedSlot
                                                                                                  ]}
                                                                                                  onPress={() => setSelectedDate(date)}
                                                                                    >
                                                                                                  <Text style={[
                                                                                                                styles.dateText,
                                                                                                                selectedDate === date && styles.selectedText
                                                                                                  ]}>
                                                                                                                {date}
                                                                                                  </Text>
                                                                                    </TouchableOpacity>
                                                                      ))}
                                                        </View>
                                          </ScrollView>

                                          <Text style={styles.sectionTitle}>Afternoon 7 slots</Text>
                                          <View style={styles.timeContainer}>
                                                        {afternoonSlots.map(renderTimeSlot)}
                                          </View>

                                          <Text style={styles.sectionTitle}>Evening 5 slots</Text>
                                          <View style={styles.timeContainer}>
                                                        {eveningSlots.map(renderTimeSlot)}
                                          </View>

                                          <TouchableOpacity style={styles.rescheduleButton}>
                                                        <Text style={styles.rescheduleButtonText}>Reschedule</Text>
                                          </TouchableOpacity>
                            </ScrollView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#fff',
                            padding: 20,
              },
              header: {
                            marginBottom: 24,
              },
              headerTitle: {
                            fontSize: 24,
                            fontWeight: '600',
                            color: '#000',
              },
              sectionTitle: {
                            fontSize: 16,
                            fontWeight: '500',
                            marginVertical: 16,
                            color: '#000',
              },
              dateContainer: {
                            flexDirection: 'row',
                            marginBottom: 16,
              },
              timeContainer: {
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 8,
                            marginBottom: 24,
              },
              dateSlot: {
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            backgroundColor: '#F5F3FF',
                            borderRadius: 8,
                            marginRight: 8,
              },
              timeSlot: {
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            backgroundColor: '#F5F3FF',
                            borderRadius: 8,
              },
              selectedSlot: {
                            backgroundColor: '#6D28D9',
              },
              dateText: {
                            color: '#6D28D9',
                            fontSize: 14,
              },
              timeText: {
                            color: '#6D28D9',
                            fontSize: 14,
              },
              selectedText: {
                            color: '#FFFFFF',
              },
              rescheduleButton: {
                            backgroundColor: '#6D28D9',
                            padding: 16,
                            borderRadius: 8,
                            alignItems: 'center',
                            marginTop: 16,
                            marginBottom: 32,
              },
              rescheduleButtonText: {
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontWeight: '600',
              },
});

export default RescheduleScreen;