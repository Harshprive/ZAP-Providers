import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Footer from '../components/footerbar';

const StatItem = ({ value, label }) => (
              <View style={styles.statItem}>
                            <Text style={styles.statValue}>{value}</Text>
                            <Text style={styles.statLabel}>{label}</Text>
              </View>
);

const InfoSection = ({ title, children, onEdit }) => (
              <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                          <Text style={styles.sectionTitle}>{title}</Text>
                                          <TouchableOpacity onPress={onEdit}>
                                                        <MaterialIcons name="edit" size={20} color="#666" />
                                          </TouchableOpacity>
                            </View>
                            {children}
              </View>
);

const ServiceTag = ({ label }) => (
              <View style={styles.serviceTag}>
                            <Text style={styles.serviceTagText}>{label}</Text>
              </View>
);

export default function ProfileScreen({ navigation }) {
              return (
                            <SafeAreaView style={styles.container}>
                                          {/* Header */}
                                          <View style={styles.header}>
                                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                                                      <Ionicons name="chevron-back" size={24} color="#000" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>APP</Text>
                                          </View>

                                          <ScrollView style={styles.scrollView}>
                                                        {/* Profile Header */}
                                                        <View style={styles.profileHeader}>
                                                                      <View style={styles.profileInfo}>
                                                                                    <Text style={styles.name}>Rahul Bagda</Text>
                                                                                    <TouchableOpacity style={styles.editButton}>
                                                                                                  <Text style={styles.editButtonText}>Edit profile</Text>
                                                                                    </TouchableOpacity>
                                                                      </View>

                                                                      <View style={styles.profileDetails}>
                                                                                    <Image
                                                                                                  // source={require('./path-to-your-image/profile.jpg')}
                                                                                                  style={styles.profileImage}
                                                                                    />
                                                                                    <View style={styles.stats}>
                                                                                                  <StatItem value="35" label="Orders" />
                                                                                                  <StatItem value="4.5" label="Rating" />
                                                                                                  <StatItem value="4.5" label="Requests" />
                                                                                    </View>
                                                                      </View>

                                                                      <Text style={styles.bio}>
                                                                                    Software development, solving societal challenges through innovative products
                                                                      </Text>
                                                        </View>

                                                        {/* Basic Information */}
                                                        <InfoSection title="Basic Information">
                                                                      <View style={styles.infoRow}>
                                                                                    <Text style={styles.infoLabel}>Full Name</Text>
                                                                                    <Text style={styles.infoValue}>Rahul Bagde</Text>
                                                                      </View>
                                                                      <View style={styles.infoRow}>
                                                                                    <Text style={styles.infoLabel}>Email ID</Text>
                                                                                    <Text style={styles.infoValue}>RahulBagde@gmail.com</Text>
                                                                      </View>
                                                                      <View style={styles.infoRow}>
                                                                                    <Text style={styles.infoLabel}>Contact</Text>
                                                                                    <Text style={styles.infoValue}>9045385325</Text>
                                                                      </View>
                                                                      <View style={styles.infoRow}>
                                                                                    <Text style={styles.infoLabel}>Alternat No</Text>
                                                                                    <Text style={styles.infoValue}>9045385325</Text>
                                                                      </View>
                                                                      <View style={styles.infoRow}>
                                                                                    <Text style={styles.infoLabel}>Address</Text>
                                                                                    <Text style={styles.infoValue}>
                                                                                                  123, XYZ Apartment, Near Andheri Station, Andheri East, Mumbai - 400069, Maharashtra, India.
                                                                                    </Text>
                                                                      </View>
                                                        </InfoSection>

                                                        {/* Service Information */}
                                                        <InfoSection title="Service Information">
                                                                      <View style={styles.serviceInfo}>
                                                                                    <View style={styles.infoRow}>
                                                                                                  <Text style={styles.infoLabel}>Main Service</Text>
                                                                                                  <Text style={styles.infoValue}>Plumbing</Text>
                                                                                    </View>
                                                                                    <View style={styles.infoRow}>
                                                                                                  <Text style={styles.infoLabel}>Sub Service</Text>
                                                                                                  <View style={styles.serviceTags}>
                                                                                                                <ServiceTag label="leackage" />
                                                                                                                <ServiceTag label="Pipeline" />
                                                                                                                <ServiceTag label="tap work" />
                                                                                                  </View>
                                                                                    </View>
                                                                                    <View style={styles.infoRow}>
                                                                                                  <Text style={styles.infoLabel}>Suggested Shops</Text>
                                                                                                  <View style={styles.serviceTags}>
                                                                                                                <ServiceTag label="saha hardwares" />
                                                                                                                <ServiceTag label="sahi hardwares" />
                                                                                                                <ServiceTag label="om hardwares" />
                                                                                                  </View>
                                                                                    </View>
                                                                      </View>
                                                        </InfoSection>

                                                        {/* Shop Information */}
                                                        <InfoSection title="Shop Information">
                                                                      <View style={styles.shopInfo}>
                                                                                    <View style={styles.infoRow}>
                                                                                                  <Text style={styles.infoLabel}>Shop Name</Text>
                                                                                                  <Text style={styles.infoValue}>Om electronics</Text>
                                                                                    </View>
                                                                                    <View style={styles.infoRow}>
                                                                                                  <Text style={styles.infoLabel}>Contact</Text>
                                                                                                  <Text style={styles.infoValue}>7648964465</Text>
                                                                                    </View>
                                                                                    <View style={styles.mapContainer}>
                                                                                                  <Image
                                                                                                                // source={require('./path-to-your-image/map-placeholder.jpg')}
                                                                                                                style={styles.map}
                                                                                                  />
                                                                                                  <Text style={styles.address}>
                                                                                                                123, XYZ Apartment, Near Andheri Station, Andheri East, Mumbai - 400069, Maharashtra, India.
                                                                                                  </Text>
                                                                                    </View>
                                                                      </View>
                                                        </InfoSection>

                                                        {/* Action Buttons */}
                                                        <View style={styles.actionButtons}>
                                                                      <TouchableOpacity style={[styles.actionButton, styles.moreButton]}>
                                                                                    <Text style={styles.buttonText}>MORE</Text>
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity style={[styles.actionButton, styles.galleryButton]}>
                                                                                    <Text style={styles.buttonText}>GALLERY</Text>
                                                                      </TouchableOpacity>
                                                        </View>
                                          </ScrollView>

                                          <Footer></Footer>
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
              headerTitle: {
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#6B46C1',
                            marginLeft: 12,
              },
              scrollView: {
                            flex: 1,
              },
              profileHeader: {
                            padding: 16,
              },
              profileInfo: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 16,
              },
              name: {
                            fontSize: 20,
                            fontWeight: '600',
              },
              editButton: {
                            backgroundColor: '#f0f0f0',
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 16,
              },
              editButtonText: {
                            color: '#666',
              },
              profileDetails: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 16,
              },
              profileImage: {
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: '#f0f0f0',
              },
              stats: {
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginLeft: 16,
              },
              statItem: {
                            alignItems: 'center',
              },
              statValue: {
                            fontSize: 18,
                            fontWeight: '600',
              },
              statLabel: {
                            color: '#666',
                            fontSize: 12,
              },
              bio: {
                            color: '#666',
                            lineHeight: 20,
              },
              section: {
                            padding: 16,
                            borderTopWidth: 8,
                            borderTopColor: '#f5f5f5',
              },
              sectionHeader: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 16,
              },
              sectionTitle: {
                            fontSize: 18,
                            fontWeight: '600',
              },
              infoRow: {
                            marginBottom: 12,
              },
              infoLabel: {
                            color: '#666',
                            marginBottom: 4,
              },
              infoValue: {
                            color: '#333',
              },
              serviceTags: {
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 8,
              },
              serviceTag: {
                            backgroundColor: '#f0f0f0',
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 16,
              },
              serviceTagText: {
                            color: '#666',
              },
              mapContainer: {
                            marginTop: 12,
              },
              map: {
                            width: '100%',
                            height: 200,
                            backgroundColor: '#f0f0f0',
                            borderRadius: 8,
                            marginBottom: 8,
              },
              address: {
                            color: '#666',
                            lineHeight: 20,
              },
              actionButtons: {
                            flexDirection: 'row',
                            padding: 16,
                            gap: 12,
              },
              actionButton: {
                            flex: 1,
                            paddingVertical: 12,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              moreButton: {
                            backgroundColor: '#6B46C1',
              },
              galleryButton: {
                            backgroundColor: '#4CAF50',
              },
              buttonText: {
                            color: '#fff',
                            fontWeight: '600',
              },
});