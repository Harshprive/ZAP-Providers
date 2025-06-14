import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    SafeAreaView,
    Platform,
    Alert,
    Modal,
    Pressable
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/CustomButton';
import HeaderTitle from '../../components/Header';


const mockServices = [

    {
        title: "Washing Machine Service",
        location: "paul pagba Shankar Nagar",
        description:
            "Machine making loud noise during Cycle.Water leaking Form bottom.",
        attachments: [
            require('../../../assets/washMachine.png'),
            require('../../../assets/washMachine2.png'),
        ],
        // userLocation: "Your Location",
        serviceLocation: "Mumbai, Shankar Nagar",
        weeks: 3,
        distance: "5.2 Km",
        estimatedTime: "20 Min",
        status: "Problem Service"
    },

    // Add more service objects as needed
];



const CleaningServiceScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <HeaderTitle />
            {mockServices.map((service, index) => (
                <View style={{ padding: 16 }} key={index}>

                    <View key={index} style={styles.section}>
                        <Text style={styles.sectionTitle}>{service.title}</Text>
                        <Text style={styles.descriptionText}>{service.location}</Text>

                        <Text style={styles.section}>Problem Description</Text>
                        <Text style={styles.descriptionText}>{service.description}</Text>
                        <>
                            <View
                                style={{
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginVertical: 8
                                }}
                            >
                                <Text style={styles.section}>Attachments</Text>
                                <Button
                                    isActive={true}
                                    title={"Re-Attachment"}
                                    containerStyle={styles.btnStyle}
                                    textStyle={styles.butTxt}
                                    onPress={() => {
                                        Alert.alert(
                                            "Send to Re-Attachment",
                                            "Are you sure you want to send the image for re-attachment?",
                                            [
                                                {
                                                    text: "No",
                                                    onPress: () => console.log("Cancelled"),
                                                    style: "cancel",
                                                },
                                                {
                                                    text: "Yes",
                                                    onPress: () => console.log("Confirmed"),
                                                },
                                            ],
                                            { cancelable: false }
                                        );
                                    }}
                                />
                            </View>

                            {service.attachments?.length > 0 ? (
                                <View style={[styles.imagesContainer, { marginTop: 12 }]}>
                                    {service.attachments.map((img, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            onPress={() => {
                                                setSelectedImage(img);
                                                setModalVisible(true);
                                            }}
                                        >
                                            <Image source={img} style={styles.image} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ) : (
                                <Text style={styles.noAttachmentText}>
                                    No attachments available.
                                </Text>
                            )}
                        </>
                        {/* <Text style={styles.section}>Attachments</Text>
                        <View style={[styles.imagesContainer, { marginTop: 12 }]}>
                            {service.attachments.map((img, i) => (
                                <Image source={img} style={styles.image} key={i} />
                            ))}
                        </View> */}

                        <View style={styles.locationGroup}>
                            <View style={styles.locationRow}>
                                <Ionicons name="location-outline" size={20} color="#666" />
                                <Text style={styles.section}>Location</Text>
                            </View>
                            <View style={styles.locationRow}>
                                <Text>{service.serviceLocation}</Text>
                            </View>
                        </View>
                        <View style={styles.locationGroup}>
                            <View style={styles.locationRow}>
                                <Ionicons name="calendar-outline" size={20} color="#666" />
                                <Text style={styles.section}>Weeks</Text>
                            </View>
                            <View style={styles.locationRow}>
                                {Array.from({ length: service.weeks }, (_, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.box}
                                        onPress={() => {
                                            console.log(`Repair View for Week ${index + 1}`);
                                        }}
                                    >
                                        <Text style={{ textAlign: 'center' }}>{index + 1}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/* Other info */}
                        <View style={styles.details}>
                            <Text>Distance: {service.distance}</Text>
                            <Text>ETA: {service.estimatedTime}</Text>
                        </View>
                    </View>
                </View>
            ))}

            {/* Bottom Buttons */}
            <View style={styles.bottomButtons}>
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => navigation.navigate("location")}
                    >
                        <Text style={styles.buttonText}>REJECT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.buttonText}>ACCEPT</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <Pressable
                        style={styles.modalOverlay}
                        onPress={() => setModalVisible(false)}
                    >
                        <Image source={selectedImage} style={styles.fullImage} resizeMode="contain" />
                    </Pressable>
                </View>
            </Modal>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },

    titleContainer: {
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A90E2',
    },
    rejectButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ff4444',
        borderRadius: 4,
        padding: 8,
        position: 'absolute',
        right: 16,
    },
    rejectText: {
        color: '#ff4444',
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: 'bold',


    },
    section: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 12,
    },
    descriptionText: {
        color: '#666',
        lineHeight: 20,
    },
    messageBox: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    messageText: {
        color: '#444',
    },
    imagesContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },
    videoPlaceholder: {
        width: '100%',
        height: 120,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtons: {
        padding: 16,
        gap: 12,
    },
    prerequisitesButton: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    prerequisitesText: {
        color: '#444',
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    startButton: {
        flex: 1,
        backgroundColor: '#6200ee',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    acceptButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    section: {
        fontWeight: "600",
        marginVertical: 8,
        // marginTop: 16,
        // marginBottom: 8,
    },
    btnStyle: {
        height: 25,
        width: 120,
        backgroundColor: 'red',
    },
    butTxt: {
        fontSize: 10,
        fontWeight: "400",
        color: "#ffffff",
    },
    box: {
        width: 30,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        marginRight: 8,
        borderRadius: 5,
        backgroundColor: '#F0F0F0',
    },
    reattachText: {
        color: "#fff",
        fontWeight: "bold",
    },
    attachmentList: {
        paddingVertical: 8,
        paddingLeft: 10,
    },
    attachmentThumbnail: {
        width: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: "#eee",
    },
    noAttachmentText: {
        fontStyle: "italic",
        color: "#999",
        paddingLeft: 10,
    },
    locationGroup: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.7,
        borderRadius: 10,
    },

});

export default CleaningServiceScreen;
