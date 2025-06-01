import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SimplePaymentSuccess = () => {
              const fadeAnim = React.useRef(new Animated.Value(0)).current;
              const scaleAnim = React.useRef(new Animated.Value(0.5)).current;

              useEffect(() => {
                            Animated.parallel([
                                          Animated.timing(fadeAnim, {
                                                        toValue: 1,
                                                        duration: 800,
                                                        useNativeDriver: true,
                                          }),
                                          Animated.spring(scaleAnim, {
                                                        toValue: 1,
                                                        friction: 6,
                                                        useNativeDriver: true,
                                          })
                            ]).start();
              }, []);

              const paymentData = [
                            { label: 'Amount', value: '550' },
                            { label: 'Date', value: 'Nov 11,2024 11:13 AM' },
                            { label: 'Order ID', value: '154878456496515' },
                            { label: 'Payment method', value: 'Visa-440' },
                            { label: 'Customer\'s name', value: 'Samera Nayak' },
                            { label: 'Status', value: 'Succeeded' },
              ];

              return (
                            <View style={styles.container}>
                                          {/* Header section */}
                                          <View style={styles.header}>
                                                        <Animated.View
                                                                      style={[
                                                                                    styles.successIconContainer,
                                                                                    {
                                                                                                  opacity: fadeAnim,
                                                                                                  transform: [{ scale: scaleAnim }]
                                                                                    }
                                                                      ]}
                                                        >
                                                                      <AntDesign name="checkcircle" size={70} color="#fff" />
                                                        </Animated.View>

                                                        <Text style={styles.headerTitle}>Payment Succeeded</Text>
                                                        <Text style={styles.amount}>550</Text>
                                          </View>

                                          {/* Payment details section */}
                                          <Animated.View
                                                        style={[
                                                                      styles.card,
                                                                      {
                                                                                    opacity: fadeAnim,
                                                                                    transform: [{
                                                                                                  translateY: fadeAnim.interpolate({
                                                                                                                inputRange: [0, 1],
                                                                                                                outputRange: [20, 0]
                                                                                                  })
                                                                                    }]
                                                                      }
                                                        ]}
                                          >
                                                        {paymentData.map((item, index) => (
                                                                      <View key={index} style={styles.row}>
                                                                                    <Text style={styles.label}>{item.label}</Text>
                                                                                    <Text
                                                                                                  style={[
                                                                                                                styles.value,
                                                                                                                item.label === 'Status' ? styles.success : null
                                                                                                  ]}
                                                                                    >
                                                                                                  {item.value}
                                                                                    </Text>
                                                                      </View>
                                                        ))}
                                          </Animated.View>
                            </View>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f8fafc',
              },
              header: {
                            backgroundColor: '#4f46e5',
                            paddingTop: 60,
                            paddingBottom: 40,
                            alignItems: 'center',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
              },
              successIconContainer: {
                            marginBottom: 15,
              },
              headerTitle: {
                            color: '#fff',
                            fontSize: 22,
                            fontWeight: '700',
                            marginBottom: 10,
              },
              amount: {
                            color: '#fff',
                            fontSize: 38,
                            fontWeight: '800',
              },
              card: {
                            backgroundColor: '#fff',
                            marginHorizontal: 20,
                            marginTop: -25,
                            borderRadius: 12,
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            shadowColor: '#000',
                            shadowOffset: {
                                          width: 0,
                                          height: 3,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            elevation: 5,
              },
              row: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 14,
                            borderBottomWidth: 1,
                            borderBottomColor: '#f1f5f9',
              },
              label: {
                            fontSize: 15,
                            color: '#64748b',
                            fontWeight: '500',
              },
              value: {
                            fontSize: 15,
                            color: '#334155',
                            fontWeight: '600',
                            maxWidth: '60%',
                            textAlign: 'right',
              },
              success: {
                            color: '#4f46e5',
                            fontWeight: '700',
              },
});

export default SimplePaymentSuccess;