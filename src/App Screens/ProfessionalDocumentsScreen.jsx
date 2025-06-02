import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput,
  TouchableOpacity, Alert, Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ServiceDomainScreen from './ServiceDomainScreen';

const ServiceDocumentsPreview = ({ navigation }) => {
  const [experience, setExperience] = useState('');
  const [projects, setProjects] = useState('');
  const [domain, setDomain] = useState('');
  const [longTerm, setLongTerm] = useState('');
  const [shortTerm, setShortTerm] = useState('');
  const [description, setDescription] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [licenseImage, setLicenseImage] = useState(null);

  // Function to handle selecting an image
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant gallery permissions to upload an image.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLicenseImage(result.assets[0].uri);
    }
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleConfirmation = () => {
    Alert.alert("Confirmation", "Your details have been confirmed!");
  };

  const isNextEnabled =
    experience && projects && domain && longTerm && shortTerm && description && selectedService;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerLine} />
      <Text style={styles.appTitle}>ZAP</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.title}>Professional Documents</Text>

          {/* License Upload */}
          <View style={styles.licenseRow}>
            <Text style={styles.label}>Legal License</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.uploadButtonText}>Upload License</Text>
            </TouchableOpacity>
          </View>

          {/* Display uploaded image */}
          {licenseImage && <Image source={{ uri: licenseImage }} style={styles.licenseImage} />}

          {/* Experience Input */}
          <View style={styles.experienceBox}>
            <View style={styles.experienceRow}>
              <Text style={styles.experienceLabel}>Total Experience</Text>
              <TextInput
                style={styles.inputSmall}
                placeholder="Years"
                keyboardType="numeric"
                value={experience}
                onChangeText={setExperience}
              />
            </View>
            <View style={styles.experienceRow}>
              <Text style={styles.experienceLabel}>Total Projects</Text>
              <TextInput
                style={styles.inputSmall}
                placeholder="Projects"
                keyboardType="numeric"
                value={projects}
                onChangeText={setProjects}
              />
            </View>
          </View>

          {/* Form Fields */}
          <TextInput
            style={styles.input}
            placeholder="Domain Name"
            value={domain}
            onChangeText={setDomain}
          />
          <View style={styles.termRow}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Long Term"
              value={longTerm}
              onChangeText={setLongTerm}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Short Term"
              value={shortTerm}
              onChangeText={setShortTerm}
            />
          </View>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Experience Description"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          {/* Confirmation Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
            <Text style={styles.confirmButtonText}>I am sure!</Text>
          </TouchableOpacity>

          {/* Service Level Selection */}
          <Text style={styles.sectionTitle}>Service Level</Text>
          <View style={styles.serviceRow}>
            {["Small scale service", "Mid scale service", "Large scale service"].map((service) => (
              <TouchableOpacity
                key={service}
                style={[
                  styles.serviceButton,
                  selectedService === service && styles.selectedService,
                ]}
                onPress={() => handleServiceSelection(service)}
              >
                <Text
                  style={[
                    styles.serviceButtonText,
                    selectedService === service && styles.selectedServiceText,
                  ]}
                >
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity onPress={() => navigation.navigate("ServiceDomainScreen")}
            style={[styles.nextButton, isNextEnabled && styles.nextButtonEnabled]}>
            <Text style={[styles.nextButtonText, isNextEnabled && styles.nextButtonTextEnabled]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  headerLine: { height: 3, backgroundColor: '#6200ee', width: '30%', marginTop: 10 },
  appTitle: { fontSize: 24, color: '#6200ee', textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },
  scrollView: { flex: 1 },
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  licenseRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  label: { fontSize: 16 },
  uploadButton: { backgroundColor: '#6200ee', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
  uploadButtonText: { color: '#FFFFFF', fontSize: 12 },
  licenseImage: { width: '100%', height: 200, borderRadius: 8, marginTop: 10 },
  experienceBox: { backgroundColor: '#E8F0FE', padding: 16, borderRadius: 8, marginBottom: 20 },
  experienceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  experienceLabel: { color: '#333333' },
  inputSmall: {
    borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 4, padding: 8, width: 80, textAlign: 'center',
  },
  input: { borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 4, padding: 12, marginBottom: 12 },
  termRow: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%' },
  textArea: { height: 100, textAlignVertical: 'top' },
  confirmButton: { backgroundColor: '#6200ee', padding: 16, borderRadius: 4, alignItems: 'center', marginVertical: 20 },
  confirmButtonText: { color: '#FFFFFF', fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, marginBottom: 12 },
  serviceRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  serviceButton: { borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 12 },
  selectedService: { backgroundColor: '#6200ee', borderColor: '#6200ee' },
  selectedServiceText: { color: '#FFFFFF' },
  nextButton: { backgroundColor: '#F5F5F5', padding: 16, borderRadius: 4, alignItems: 'center' },
  nextButtonEnabled: { backgroundColor: '#6200ee' },
  nextButtonText: { color: '#666666' },
  nextButtonTextEnabled: { color: '#FFFFFF' },
});

export default ServiceDocumentsPreview;
