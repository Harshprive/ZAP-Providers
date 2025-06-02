import React from 'react';
import {
              StyleSheet,
              View,
              Text,
              TouchableOpacity,
              SafeAreaView,
              Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SimpleQRScanner = ({ navigation }) => {
              // This is just the UI template - no actual scanning functionality
              // In a real app, you'd integrate scanning functionality here

              const handleScanPress = () => {
                            // This would typically launch camera scanning functionality
                            alert("Scan button pressed - would launch scanner");
                            // Or navigate to a scanner screen if implemented separately:
                            // navigation.navigate('ScannerScreen');
              };

              return (
                            <SafeAreaView style={styles.container}>
                                          <View style={styles.content}>
                                                        <Text style={styles.title}>Scan your QR Code</Text>

                                                        <View style={styles.scannerFrame}>
                                                                      <View style={styles.cornerTL} />
                                                                      <View style={styles.cornerTR} />
                                                                      <View style={styles.cornerBL} />
                                                                      <View style={styles.cornerBR} />

                                                                      {/* Sample QR code image */}
                                                                      {/* <Image
                                                                                    source={require('./assets/sample-qr.png')}
                                                                                    style={styles.sampleQR}
                                                                      // If you don't have an image, use a placeholder:
                                                                      // defaultSource={require('./assets/placeholder.png')}
                                                                      // Or just remove this Image component if you're creating a real scanner
                                                                      /> */}
                                                                      <Image
                                                                                    source={{ uri: "https://www.lyra.com/in/wp-content/uploads/sites/8/2020/05/OQ-Code-Payments.png" }}
                                                                                    style={styles.sampleQR}
                                                                      />

                                                        </View>

                                                        <TouchableOpacity
                                                                      style={styles.scanButton}
                                                                      onPress={handleScanPress}
                                                        >
                                                                      <Ionicons name="scan-outline" size={24} color="white" style={styles.scanIcon} />
                                                                      <Text style={styles.scanButtonText}>Scan QR Code</Text>
                                                        </TouchableOpacity>
                                                        <Text style={{ padding: 16 }}>show payment</Text>
                                          </View>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: 'white',
              },
              content: {
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 60,
                            paddingHorizontal: 20,
              },
              title: {
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            color: '#000',
              },
              scannerFrame: {
                            width: 250,
                            height: 250,
                            marginBottom: 80,
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              // Corner styles to create the scanner frame
              cornerTL: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 30,
                            height: 30,
                            borderTopWidth: 3,
                            borderLeftWidth: 3,
                            borderColor: '#000',
              },
              cornerTR: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 30,
                            height: 30,
                            borderTopWidth: 3,
                            borderRightWidth: 3,
                            borderColor: '#000',
              },
              cornerBL: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: 30,
                            height: 30,
                            borderBottomWidth: 3,
                            borderLeftWidth: 3,
                            borderColor: '#000',
              },
              cornerBR: {
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 30,
                            height: 30,
                            borderBottomWidth: 3,
                            borderRightWidth: 3,
                            borderColor: '#000',
              },
              sampleQR: {
                            width: 200,
                            height: 200,
                            resizeMode: 'contain',
              },
              scanButton: {
                            backgroundColor: '#5E35B1', // Purple color as shown in the image
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            borderRadius: 8,
                            width: '90%',
              },
              scanIcon: {
                            marginRight: 8,
              },
              scanButtonText: {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '500',
              },
});

export default SimpleQRScanner;