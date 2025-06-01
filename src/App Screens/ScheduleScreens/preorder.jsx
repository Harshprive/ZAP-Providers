import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, navigation } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const PreOrderSummary = ({ navigation }) => {
              const orderData = {
                            orderNumber: '6548763464',
                            items: [
                                          { name: 'Plumbing', status: 'Process', price: 120 },
                                          { name: 'water proofing', status: 'Confirmed', price: 90 },
                                          { name: 'White wash', status: 'Confirmed', price: 230 },
                            ],
                            processingFee: 0,
                            total: 230,
              };

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar style="light" />

                                          {/* Header */}
                                          {/* <View style={styles.header}>
                                                        <TouchableOpacity
                                                                      onPress={() => navigation.goBack()}
                                                                      style={styles.backButton}
                                                        >
                                                                      <Ionicons name="arrow-back" size={24} color="white" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>Pre-order Summary</Text>
                                          </View> */}

                                          {/* Order Status */}
                                          <View style={styles.card}>
                                                        <Text style={styles.cardTitle}>Order Status</Text>
                                                        <Text style={styles.orderNumber}>Order #{orderData.orderNumber}</Text>
                                                        <Text style={styles.successText}>Pre-order place Successfully</Text>
                                          </View>

                                          {/* Order Items */}
                                          <View style={styles.card}>
                                                        <Text style={styles.cardTitle}>Order Item</Text>
                                                        {orderData.items.map((item, index) => (
                                                                      <View key={index} style={styles.itemRow}>
                                                                                    <View style={styles.itemInfo}>
                                                                                                  <Text style={styles.itemName}>{item.name}</Text>
                                                                                                  <View style={styles.statusContainer}>
                                                                                                                <Ionicons name="time-outline" size={16} color="#666" />
                                                                                                                <Text style={[
                                                                                                                              styles.statusText,
                                                                                                                              { color: item.status === 'Process' ? '#FF6B6B' : '#4CAF50' }
                                                                                                                ]}>
                                                                                                                              {item.status}
                                                                                                                </Text>
                                                                                                  </View>
                                                                                    </View>
                                                                                    <Text style={styles.itemPrice}>${item.price}/-</Text>
                                                                      </View>
                                                        ))}
                                          </View>

                                          {/* Total Section */}
                                          <View style={styles.card}>
                                                        <View style={styles.totalRow}>
                                                                      <Text style={styles.totalLabel}>Subtotal</Text>
                                                                      <Text style={styles.totalAmount}>${orderData.total}/-</Text>
                                                        </View>
                                                        <View style={styles.totalRow}>
                                                                      <Text style={styles.totalLabel}>processing fee</Text>
                                                                      <Text style={styles.totalAmount}>${orderData.processingFee}/-</Text>
                                                        </View>
                                                        <View style={[styles.totalRow, styles.finalTotal]}>
                                                                      <Text style={styles.totalLabel}>Total</Text>
                                                                      <Text style={[styles.totalAmount, styles.finalTotalAmount]}>${orderData.total}/-</Text>
                                                        </View>
                                          </View>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              header: {
                            backgroundColor: '#5C6BC0',
                            padding: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              backButton: {
                            marginRight: 16,
              },
              headerTitle: {
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '600',
              },
              card: {
                            backgroundColor: 'white',
                            margin: 16,
                            padding: 16,
                            borderRadius: 8,
                            elevation: 2,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
              },
              cardTitle: {
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#673AB7',
                            marginBottom: 12,
              },
              orderNumber: {
                            fontSize: 15,
                            color: '#333',
              },
              successText: {
                            color: '#4CAF50',
                            marginTop: 4,
              },
              itemRow: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 8,
                            borderBottomWidth: 1,
                            borderBottomColor: '#f0f0f0',
              },
              itemInfo: {
                            flex: 1,
              },
              itemName: {
                            fontSize: 15,
                            color: '#333',
                            marginBottom: 4,
              },
              statusContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              statusText: {
                            marginLeft: 4,
                            fontSize: 13,
              },
              itemPrice: {
                            fontSize: 15,
                            fontWeight: '600',
                            color: '#673AB7',
              },
              totalRow: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 8,
              },
              totalLabel: {
                            color: '#666',
              },
              totalAmount: {
                            color: '#333',
              },
              finalTotal: {
                            borderTopWidth: 1,
                            borderTopColor: '#f0f0f0',
                            marginTop: 8,
                            paddingTop: 16,
              },
              finalTotalAmount: {
                            color: '#673AB7',
                            fontWeight: '600',
                            fontSize: 16,
              },
});

export default PreOrderSummary;