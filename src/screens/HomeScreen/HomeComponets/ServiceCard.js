import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServiceCard = ({ service, expanded, onPress, navigation }) => {
  const isProblemService = service.type?.toLowerCase() === 'problem';

  const renderAttachments = (isExpanded) => {
    if (!isProblemService || !service.attachments?.length) return null;

    return (
      <View style={isExpanded ? styles.attachmentsExpanded : styles.attachments}>
        {(isExpanded ? service.attachments : service.attachments.slice(0, 2)).map((img, i) => (
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
    <Modal animationType="slide" transparent visible={expanded} onRequestClose={onPress}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <TouchableOpacity style={styles.closeButton} onPress={onPress}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>

          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.location}>{service.location}</Text>

          <Text style={styles.section}>Problem Description</Text>
          <Text>{service.description}</Text>

          {isProblemService && (
            <>
              <Text style={styles.section}>Attachments</Text>
              {renderAttachments(true)}
              <TouchableOpacity
                style={styles.reattachBtn}
                onPress={() => {
                  console.log('Re-Attachment pressed');
                  // Add your image picker/camera logic here
                }}
              >
                <Text style={styles.reattachText}>Re-Attachment</Text>
              </TouchableOpacity>
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
              onPress={() => navigation.navigate('location')}
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
      <Text style={[styles.location, { color: '#726AE0' }]}>{service.status}</Text>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.location}>{service.location}</Text>
      <Text>{service.description}</Text>
      {renderAttachments(false)}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.rejectBtn} onPress={onPress}>
          <Text>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptBtn}
          onPress={() => navigation.navigate('location')}
        >
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: '#666',
    marginBottom: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  expandedImage: {
    width: '48%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  attachments: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  attachmentsExpanded: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 48,
    maxHeight: '90%',
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  section: {
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  locationGroup: {
    marginTop: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  rejectBtn: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptText: {
    color: '#fff',
  },
  reattachBtn: {
    marginTop: 10,
    backgroundColor: '#FFAA00',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  reattachText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ServiceCard;
