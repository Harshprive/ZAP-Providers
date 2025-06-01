import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footerbar';

const ServiceCard = ({ name, status, imageUrl }) => {
              const navigation = useNavigation();

              return (
                            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("usermessage")}>
                                          <View style={styles.cardContent}>
                                                        <Image
                                                                      source={{ uri: imageUrl }}
                                                                      style={styles.avatar}
                                                        />
                                                        <View style={styles.cardInfo}>
                                                                      <Text style={styles.name}>{name}</Text>
                                                                      <View style={styles.serviceType}>
                                                                                    <MaterialCommunityIcons name="spa" size={16} color="#666" />
                                                                                    <Text style={styles.serviceText}>Cleaning</Text>
                                                                      </View>
                                                        </View>
                                                        <View style={[
                                                                      styles.statusBadge,
                                                                      status === 'Active' ? styles.activeBadge : styles.pendingBadge
                                                        ]}>
                                                                      <Text style={[
                                                                                    styles.statusText,
                                                                                    status === 'Active' ? styles.activeText : styles.pendingText
                                                                      ]}>
                                                                                    {status}
                                                                      </Text>
                                                        </View>
                                          </View>
                            </TouchableOpacity>
              );
};

export default function Messages() {
              const navigation = useNavigation();

              const services = [
                            {
                                          id: 1,
                                          name: 'Rahul Bagde',
                                          status: 'Active',
                                          imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
                            },
                            {
                                          id: 2,
                                          name: 'Rahul Bagde',
                                          status: 'Active',
                                          imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
                            }
              ];

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar barStyle="light-content" />

                                          <LinearGradient
                                                        colors={['#6B46C1', '#8B5CF6']}
                                                        style={styles.header}
                                          >
                                                        <TouchableOpacity
                                                                      onPress={() => navigation.goBack()}
                                                                      style={styles.backButton}
                                                        >
                                                                      <Ionicons name="chevron-back" size={24} color="#fff" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>APP</Text>
                                          </LinearGradient>

                                          <View style={styles.contentContainer}>
                                                        <View style={styles.titleContainer}>
                                                                      <MaterialCommunityIcons name="spa" size={24} color="#6B46C1" />
                                                                      <Text style={styles.sectionTitle}>Messages</Text>
                                                        </View>

                                                        <ScrollView
                                                                      style={styles.scrollView}
                                                                      showsVerticalScrollIndicator={false}
                                                        >
                                                                      {services.map((service, index) => (
                                                                                    <ServiceCard
                                                                                                  key={index}
                                                                                                  name={service.name}
                                                                                                  status={index === 0 ? 'Active' : 'Pending'}
                                                                                                  imageUrl={service.imageUrl}
                                                                                    />
                                                                      ))}
                                                        </ScrollView>
                                          </View>
                                          <Footer />
                            </SafeAreaView>
              );
}

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#f5f5f5',
              },
              header: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 16,
                            paddingTop: 20,
                            height: 90,
              },
              backButton: {
                            padding: 8,
              },
              headerTitle: {
                            fontSize: 22,
                            fontWeight: '700',
                            color: '#fff',
                            marginLeft: 12,
              },
              contentContainer: {
                            flex: 1,
                            backgroundColor: '#fff',
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            marginTop: -20,
                            paddingTop: 20,
              },
              titleContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 20,
                            paddingBottom: 10,
              },
              sectionTitle: {
                            fontSize: 24,
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginLeft: 10,
              },
              scrollView: {
                            flex: 1,
                            paddingHorizontal: 16,
              },
              card: {
                            backgroundColor: '#fff',
                            borderRadius: 16,
                            marginBottom: 12,
                            padding: 12,
                            elevation: 2,
                            shadowColor: '#000',
                            shadowOffset: {
                                          width: 0,
                                          height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
              },
              cardContent: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              avatar: {
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#f0f0f0',
              },
              cardInfo: {
                            flex: 1,
                            marginLeft: 12,
              },
              name: {
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#1a1a1a',
                            marginBottom: 4,
              },
              serviceType: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              serviceText: {
                            color: '#666',
                            marginLeft: 4,
                            fontSize: 14,
              },
              statusBadge: {
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 20,
              },
              activeBadge: {
                            backgroundColor: '#E9D5FF',
              },
              pendingBadge: {
                            backgroundColor: '#DCF7E3',
              },
              statusText: {
                            fontSize: 12,
                            fontWeight: '500',
              },
              activeText: {
                            color: '#6B46C1',
              },
              pendingText: {
                            color: '#059669',
              },
});