import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Button from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ServiceCard = ({ service, expanded, onPress }) => {
  const isProblemService = service.type?.toLowerCase() === "problem";
  const [isClicked, setIsClicked] = useState(false);
  const navigation = useNavigation();

  const renderAttachments = (isExpanded) => {
    if (!isProblemService || !service.attachments?.length) return null;

    return (
      <View
        style={isExpanded ? styles.attachmentsExpanded : styles.attachments}
      >
        {(isExpanded
          ? service.attachments
          : service.attachments.slice(0, 2)
        ).map((img, i) => (
          <Image
            key={i}
            source={img}
            style={isExpanded ? styles.expandedImage : styles.thumbnail}
          />
        ))}
      </View>
    );
  };

  const renderModal = () => (
    <Modal
      animationType="slide"
      transparent
      visible={expanded}
      onRequestClose={onPress}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <TouchableOpacity style={styles.closeButton} onPress={onPress}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>
          <Text style={[styles.location, { color: "#726AE0" }]}>
            {service.status}
          </Text>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.location}>{service.location}</Text>

          <Text style={styles.section}>Problem Description</Text>
          <Text>{service.description}</Text>

          {service.status === "Problem Service" && (
            <>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.section}>Attachments</Text>
                <Button
                  isActive={true}
                  title={"Re-Attachment"}
                  containerStyle={styles.btnStyle}
                  textStyle={styles.butTxt}
                  //  activeStyle={{ backgroundColor: isClicked ? 'green' : 'red' }}
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
                <FlatList
                  data={service.attachments}
                  horizontal
                  keyExtractor={(_, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.attachmentList}
                  renderItem={({ item }) => (
                    <Image
                      source={item}
                      style={styles.attachmentThumbnail}
                      resizeMode="cover"
                    />
                  )}
                />
              ) : (
                <Text style={styles.noAttachmentText}>
                  No attachments available.
                </Text>
              )}
            </>
          )}

          <View style={styles.locationGroup}>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text>{service.userLocation}</Text>
            </View>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text>{service.serviceLocation}</Text>
            </View>
          </View>

          <View style={styles.details}>
            <Text>Distance: {service.distance}</Text>
            <Text>ETA: {service.estimatedTime}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.rejectBtn} onPress={onPress}>
              <Text>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.acceptBtn}
              onPress={() => {
                onPress();
                setTimeout(() => {
                  navigation.navigate("Request", { service: service });
                }, 200);
              }}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return expanded ? (
    renderModal()
  ) : (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={[styles.location, { color: "#726AE0" }]}>
        {service.status}
      </Text>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.location}>{service.location}</Text>
      <Text>{service.description}</Text>
      {/* {renderAttachments(false)} */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.rejectBtn} onPress={onPress}>
          <Text>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptBtn}
          onPress={() => navigation.navigate("Request")}
        >
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    color: "#666",
    marginBottom: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  expandedImage: {
    width: "48%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  attachments: {
    flexDirection: "row",
    marginBottom: 12,
  },
  attachmentsExpanded: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 48,
    maxHeight: "90%",
  },
  closeButton: {
    position: "absolute",
    right: 16,
    top: 16,
    zIndex: 1,
  },
  section: {
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  locationGroup: {
    marginTop: 12,
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
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  rejectBtn: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: "#6C63FF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  acceptText: {
    color: "#fff",
  },
  reattachBtn: {
    marginTop: 10,
    backgroundColor: "#FFAA00",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
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
});

export default ServiceCard;
