import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, PanResponder, Animated } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ClientServicePage() {
              const navigation = useNavigation();

              // For the slider button
              const pan = useRef(new Animated.ValueXY()).current;
              const [sliderComplete, setSliderComplete] = useState(false);
              const buttonWidth = 280; // Approximate width of the button area
              const sliderWidth = 60; // Width of the slider thumb

              const panResponder = useRef(
                            PanResponder.create({
                                          onStartShouldSetPanResponder: () => true,
                                          onPanResponderGrant: () => {
                                                        pan.setOffset({
                                                                      x: pan.x._value,
                                                                      y: 0
                                                        });
                                          },
                                          onPanResponderMove: (_, gesture) => {
                                                        // Only allow horizontal movement within the button boundaries
                                                        if (gesture.dx >= 0 && gesture.dx <= buttonWidth - sliderWidth) {
                                                                      pan.x.setValue(gesture.dx);
                                                        }
                                          },
                                          onPanResponderRelease: (_, gesture) => {
                                                        pan.flattenOffset();

                                                        // If slider reached the end
                                                        if (gesture.dx > buttonWidth - sliderWidth - 20) {
                                                                      Animated.spring(pan.x, {
                                                                                    toValue: buttonWidth - sliderWidth,
                                                                                    useNativeDriver: false
                                                                      }).start(() => {
                                                                                    setSliderComplete(true);
                                                                                    // Navigate to Home screen after a short delay
                                                                                    setTimeout(() => {
                                                                                                  navigation.navigate("userOTP");
                                                                                    }, 500);
                                                                      });
                                                        } else {
                                                                      // Return to start if not dragged far enough
                                                                      Animated.spring(pan.x, {
                                                                                    toValue: 0,
                                                                                    useNativeDriver: false
                                                                      }).start();
                                                        }
                                          }
                            })
              ).current;

              return (
                            <SafeAreaView style={styles.container}>
                                          <StatusBar backgroundColor="#fff" barStyle="dark-content" />



                                          {/* Scrollable Content */}
                                          <ScrollView
                                                        style={styles.scrollContent}
                                                        showsVerticalScrollIndicator={false}
                                          >
                                                        {/* Client Details */}
                                                        <View style={styles.clientSection}>
                                                                      <Text style={styles.clientTitle}>Your Client</Text>

                                                                      <View style={styles.clientProfile}>
                                                                                    <Image
                                                                                                  source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                                                                                                  style={styles.clientAvatar}
                                                                                    />
                                                                                    <Text style={styles.clientName}>Apurva Dhite</Text>
                                                                      </View>
                                                        </View>

                                                        {/* Service Details */}
                                                        <View style={styles.serviceDetails}>
                                                                      {/* Service Name with Prerequisite Button */}
                                                                      <View style={styles.serviceRow}>
                                                                                    <View style={styles.serviceNameContainer}>
                                                                                                  <View style={styles.serviceNameSection}>
                                                                                                                <Text style={styles.serviceLabel}>SERVICE NAME :</Text>
                                                                                                                <Text style={styles.serviceValue}>WASHING MACHINE</Text>
                                                                                                  </View>

                                                                                                  <TouchableOpacity
                                                                                                                style={styles.prerequisiteButton}
                                                                                                                onPress={() => alert("Prerequisites checklist")}
                                                                                                  >
                                                                                                                <MaterialIcons name="checklist" size={16} color="white" />
                                                                                                                <Text style={styles.prerequisiteText} onPress={() => navigation.navigate("preorder")}>PREREQUISITE</Text>
                                                                                                  </TouchableOpacity>
                                                                                    </View>
                                                                      </View>

                                                                      <View style={styles.serviceRow}>
                                                                                    <Text style={styles.serviceLabel}>DESCRIPTION :</Text>
                                                                                    <Text style={styles.serviceValue}>Washing machine may not be plugged in properly, or the socket may be faulty. You can try resetting the circuit breaker.</Text>
                                                                      </View>

                                                                      <View style={styles.serviceRow}>
                                                                                    <Text style={styles.serviceLabel}>ADDRESS :</Text>
                                                                                    <Text style={styles.serviceValue}>Flat no. 306 plot no 150, gojanpan appartment, sector 4 near CIDCO Garden Navi Mumbai 441110</Text>
                                                                      </View>

                                                                      <View style={styles.serviceRow}>
                                                                                    <Text style={styles.serviceLabel}>IMAGES :</Text>
                                                                      </View>

                                                                      {/* Images Section */}
                                                                      <View style={styles.imagesContainer}>
                                                                                    <Image
                                                                                                  source={{ uri: 'https://images.unsplash.com/photo-1626806787461-102c1a6f2c0d' }}
                                                                                                  style={styles.serviceImage}
                                                                                    />
                                                                                    <Image
                                                                                                  source={{ uri: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1' }}
                                                                                                  style={styles.serviceImage}
                                                                                    />
                                                                                    <Image
                                                                                                  source={{ uri: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce' }}
                                                                                                  style={styles.serviceImage}
                                                                                    />
                                                                      </View>

                                                                      {/* Video Section */}
                                                                      <View style={styles.serviceRow}>
                                                                                    <Text style={styles.serviceLabel}>Video :</Text>
                                                                      </View>

                                                                      <View style={styles.videoContainer}>
                                                                                    <Image
                                                                                                  source={{ uri: 'https://img.freepik.com/premium-photo/video-player-interface-social-media-design_691560-1731.jpg' }}
                                                                                                  style={styles.videoImage}
                                                                                    />
                                                                                    <TouchableOpacity style={styles.playButton}>
                                                                                                  <FontAwesome name="play" size={24} color="white" />
                                                                                    </TouchableOpacity>
                                                                      </View>

                                                                      {/* Adding padding at the bottom to ensure content doesn't get hidden behind the button */}
                                                                      <View style={styles.bottomPadding} />
                                                        </View>
                                          </ScrollView>

                                          {/* Slide to Start Service Button - Fixed at the bottom */}
                                          <View style={styles.buttonContainer}>
                                                        <View style={styles.sliderContainer}>
                                                                      <Text style={styles.sliderInstructions}>
                                                                                    {sliderComplete ? "NAVIGATING TO HOME..." : "SLIDE TO START SERVICE →"}
                                                                      </Text>

                                                                      <Animated.View
                                                                                    style={[styles.sliderThumb, { transform: [{ translateX: pan.x }] }]}
                                                                                    {...panResponder.panHandlers}
                                                                      >
                                                                                    <AntDesign name="arrowright" size={24} color="black" />
                                                                      </Animated.View>
                                                        </View>
                                          </View>
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
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 16,
                            paddingTop: 16,
                            paddingBottom: 8,
                            backgroundColor: '#fff',
                            borderBottomWidth: 1,
                            borderBottomColor: '#f0f0f0',
              },
              headerLeft: {
                            flexDirection: 'column',
              },
              welcomeText: {
                            fontSize: 12,
                            color: '#666',
              },
              nameText: {
                            fontSize: 16,
                            fontWeight: 'bold',
              },
              headerIcons: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              avatarContainer: {
                            width: 34,
                            height: 34,
                            borderRadius: 17,
                            backgroundColor: '#E3F0EE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 16,
              },
              avatarText: {
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333',
              },
              scrollContent: {
                            flex: 1,
              },
              clientSection: {
                            alignItems: 'center',
                            paddingVertical: 12,
              },
              clientTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 12,
              },
              clientProfile: {
                            alignItems: 'center',
              },
              clientAvatar: {
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginBottom: 8,
              },
              clientName: {
                            fontSize: 18,
                            fontWeight: 'bold',
              },
              serviceDetails: {
                            paddingHorizontal: 16,
                            paddingVertical: 12,
              },
              serviceNameContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
              },
              serviceNameSection: {
                            flex: 1,
              },
              serviceRow: {
                            marginBottom: 12,
              },
              serviceLabel: {
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: '#333',
              },
              serviceValue: {
                            fontSize: 14,
                            marginTop: 2,
              },
              prerequisiteButton: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#4A90E2',
                            paddingVertical: 6,
                            paddingHorizontal: 10,
                            borderRadius: 4,
                            marginLeft: 10,
              },
              prerequisiteText: {
                            color: 'white',
                            fontSize: 10,
                            fontWeight: 'bold',
                            marginLeft: 4,
              },
              imagesContainer: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 16,
              },
              serviceImage: {
                            width: '31%',
                            height: 80,
                            borderRadius: 8,
              },
              videoContainer: {
                            position: 'relative',
                            marginBottom: 20,
              },
              videoImage: {
                            width: '100%',
                            height: 150,
                            borderRadius: 8,
              },
              playButton: {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: [{ translateX: -20 }, { translateY: -20 }],
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255, 0, 0, 0.7)',
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              buttonContainer: {
                            backgroundColor: '#fff',
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            borderTopWidth: 1,
                            borderTopColor: '#f0f0f0',
              },
              sliderContainer: {
                            position: 'relative',
                            width: '100%',
                            height: 50,
                            backgroundColor: '#E9E5F8',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
              },
              sliderInstructions: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#555',
              },
              sliderThumb: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: 60,
                            height: 50,
                            backgroundColor: '#D1C8F1',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                          width: 0,
                                          height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
              },
              bottomPadding: {
                            height: 20,
              },
});