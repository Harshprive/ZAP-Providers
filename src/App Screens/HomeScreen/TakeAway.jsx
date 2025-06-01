import React, { useState } from 'react';
import {
              StyleSheet,
              View,
              Text,
              TextInput,
              TouchableOpacity,
              ScrollView,
              Image,
              Platform,
              Alert, navigation
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TakeawayRepairScreen = ({ navigation }) => {
              // State for form data
              const [productImage, setProductImage] = useState(null);
              const [productName, setProductName] = useState('');
              const [productType, setProductType] = useState('Electronic');
              const [repairDetails, setRepairDetails] = useState('');
              const [issues, setIssues] = useState([{ description: '', cost: '' }]);
              const [replaceParts, setReplaceParts] = useState([{ name: '', cost: '' }]);
              const [dateReceived, setDateReceived] = useState(new Date());
              const [estimatedCompletion, setEstimatedCompletion] = useState(new Date(new Date().setDate(new Date().getDate() + 7)));
              const [showReceivedPicker, setShowReceivedPicker] = useState(false);
              const [showCompletionPicker, setShowCompletionPicker] = useState(false);

              // Calculate total cost
              const calculateTotal = () => {
                            let total = 0;
                            issues.forEach(issue => {
                                          if (issue.cost) total += parseFloat(issue.cost);
                            });
                            replaceParts.forEach(part => {
                                          if (part.cost) total += parseFloat(part.cost);
                            });
                            return total.toFixed(2);
              };

              // Image picker function
              const pickImage = async () => {
                            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                            if (status !== 'granted') {
                                          Alert.alert('Permission needed', 'Please grant camera roll permissions to upload an image.');
                                          return;
                            }

                            let result = await ImagePicker.launchImageLibraryAsync({
                                          mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                          allowsEditing: true,
                                          aspect: [4, 3],
                                          quality: 1,
                            });

                            if (!result.canceled) {
                                          setProductImage(result.assets[0].uri);
                            }
              };

              // Add new issue
              const addIssue = () => {
                            setIssues([...issues, { description: '', cost: '' }]);
              };

              // Update issue
              const updateIssue = (index, field, value) => {
                            const updatedIssues = [...issues];
                            updatedIssues[index][field] = value;
                            setIssues(updatedIssues);
              };

              // Remove issue
              const removeIssue = (index) => {
                            const updatedIssues = [...issues];
                            updatedIssues.splice(index, 1);
                            setIssues(updatedIssues);
              };

              // Add new replacement part
              const addReplacePart = () => {
                            setReplaceParts([...replaceParts, { name: '', cost: '' }]);
              };

              // Update replacement part
              const updateReplacePart = (index, field, value) => {
                            const updatedParts = [...replaceParts];
                            updatedParts[index][field] = value;
                            setReplaceParts(updatedParts);
              };

              // Remove replacement part
              const removeReplacePart = (index) => {
                            const updatedParts = [...replaceParts];
                            updatedParts.splice(index, 1);
                            setReplaceParts(updatedParts);
              };

              // Date picker handlers
              const onReceivedDateChange = (event, selectedDate) => {
                            setShowReceivedPicker(false);
                            if (selectedDate) {
                                          setDateReceived(selectedDate);
                            }
              };

              const onCompletionDateChange = (event, selectedDate) => {
                            setShowCompletionPicker(false);
                            if (selectedDate) {
                                          setEstimatedCompletion(selectedDate);
                            }
              };

              // Handle form submission
              const handleSubmit = () => {
                            // Validate form
                            if (!productName) {
                                          Alert.alert('Error', 'Please enter a product name');
                                          return;
                            }

                            // Prepare data object to send to backend
                            const repairData = {
                                          productImage,
                                          productName,
                                          productType,
                                          repairDetails,
                                          issues,
                                          replaceParts,
                                          dateReceived: dateReceived.toISOString(),
                                          estimatedCompletion: estimatedCompletion.toISOString(),
                                          totalCost: calculateTotal()
                            };

                            // Here you would typically send the data to your backend
                            console.log('Submitting repair data:', repairData);
                            Alert.alert('Success', 'Take-away repair item added successfully!');

                            // Reset form (optional)
                            resetForm();
              };

              // Reset form function
              const resetForm = () => {
                            setProductImage(null);
                            setProductName('');
                            setProductType('Electronic');
                            setRepairDetails('');
                            setIssues([{ description: '', cost: '' }]);
                            setReplaceParts([{ name: '', cost: '' }]);
                            setDateReceived(new Date());
                            setEstimatedCompletion(new Date(new Date().setDate(new Date().getDate() + 7)));
              };

              return (
                            <ScrollView style={styles.container}>
                                          <Text style={styles.header}>Add Take-Away Item</Text>

                                          {/* Product Image */}
                                          <View style={styles.imageSection}>
                                                        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
                                                                      {productImage ? (
                                                                                    <Image source={{ uri: productImage }} style={styles.productImage} />
                                                                      ) : (
                                                                                    <View style={styles.imagePlaceholder}>
                                                                                                  <MaterialIcons name="add-a-photo" size={40} color="#666" />
                                                                                                  <Text style={styles.imagePlaceholderText}>Add Product Image</Text>
                                                                                    </View>
                                                                      )}
                                                        </TouchableOpacity>
                                          </View>

                                          {/* Product Information */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Product Information</Text>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Product Name</Text>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    value={productName}
                                                                                    onChangeText={setProductName}
                                                                                    placeholder="Enter product name"
                                                                      />
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Product Type</Text>
                                                                      <View style={styles.pickerContainer}>
                                                                                    <Picker
                                                                                                  selectedValue={productType}
                                                                                                  onValueChange={(itemValue) => setProductType(itemValue)}
                                                                                                  style={styles.picker}
                                                                                    >
                                                                                                  <Picker.Item label="Electronic" value="Electronic" />
                                                                                                  <Picker.Item label="Appliance" value="Appliance" />
                                                                                                  <Picker.Item label="Computer" value="Computer" />
                                                                                                  <Picker.Item label="Mobile Phone" value="Mobile Phone" />
                                                                                                  <Picker.Item label="Other" value="Other" />
                                                                                    </Picker>
                                                                      </View>
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Repair Details</Text>
                                                                      <TextInput
                                                                                    style={[styles.input, styles.textArea]}
                                                                                    value={repairDetails}
                                                                                    onChangeText={setRepairDetails}
                                                                                    placeholder="Enter repair details"
                                                                                    multiline
                                                                                    numberOfLines={4}
                                                                      />
                                                        </View>
                                          </View>

                                          {/* Issues */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Repair Details</Text>

                                                        {issues.map((issue, index) => (
                                                                      <View key={index} style={styles.listItem}>
                                                                                    <View style={styles.listItemHeader}>
                                                                                                  <Text style={styles.listItemTitle}>Issue #{index + 1}</Text>
                                                                                                  {issues.length > 1 && (
                                                                                                                <TouchableOpacity onPress={() => removeIssue(index)}>
                                                                                                                              <AntDesign name="close" size={20} color="red" />
                                                                                                                </TouchableOpacity>
                                                                                                  )}
                                                                                    </View>

                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  value={issue.description}
                                                                                                  onChangeText={(text) => updateIssue(index, 'description', text)}
                                                                                                  placeholder="Issue description"
                                                                                    />
                                                                      </View>
                                                        ))}

                                                        <TouchableOpacity style={styles.addButton} onPress={addIssue}>
                                                                      <AntDesign name="plus" size={20} color="white" />
                                                                      <Text style={styles.addButtonText}>Add Issue</Text>
                                                        </TouchableOpacity>
                                          </View>

                                          {/* Replacement Parts */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Replacement Parts</Text>

                                                        {replaceParts.map((part, index) => (
                                                                      <View key={index} style={styles.listItem}>
                                                                                    <View style={styles.listItemHeader}>
                                                                                                  <Text style={styles.listItemTitle}>Part #{index + 1}</Text>
                                                                                                  {replaceParts.length > 1 && (
                                                                                                                <TouchableOpacity onPress={() => removeReplacePart(index)}>
                                                                                                                              <AntDesign name="close" size={20} color="red" />
                                                                                                                </TouchableOpacity>
                                                                                                  )}
                                                                                    </View>

                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  value={part.name}
                                                                                                  onChangeText={(text) => updateReplacePart(index, 'name', text)}
                                                                                                  placeholder="Part name"
                                                                                    />

                                                                                    <TextInput
                                                                                                  style={styles.input}
                                                                                                  value={part.cost}
                                                                                                  onChangeText={(text) => updateReplacePart(index, 'cost', text)}
                                                                                                  placeholder="Cost"
                                                                                                  keyboardType="numeric"
                                                                                    />
                                                                      </View>
                                                        ))}

                                                        <TouchableOpacity style={styles.addButton} onPress={addReplacePart}>
                                                                      <AntDesign name="plus" size={20} color="white" />
                                                                      <Text style={styles.addButtonText}>Add Replacement Part</Text>
                                                        </TouchableOpacity>
                                          </View>

                                          {/* Timeline */}
                                          <View style={styles.section}>
                                                        <Text style={styles.sectionTitle}>Repair Timeline</Text>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Date Received</Text>
                                                                      <TouchableOpacity
                                                                                    style={styles.datePickerButton}
                                                                                    onPress={() => setShowReceivedPicker(true)}
                                                                      >
                                                                                    <Text>{dateReceived.toDateString()}</Text>
                                                                                    <AntDesign name="calendar" size={20} color="#666" />
                                                                      </TouchableOpacity>

                                                                      {showReceivedPicker && (
                                                                                    <DateTimePicker
                                                                                                  value={dateReceived}
                                                                                                  mode="date"
                                                                                                  display="default"
                                                                                                  onChange={onReceivedDateChange}
                                                                                    />
                                                                      )}
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Estimated Completion</Text>
                                                                      <TouchableOpacity
                                                                                    style={styles.datePickerButton}
                                                                                    onPress={() => setShowCompletionPicker(true)}
                                                                      >
                                                                                    <Text>{estimatedCompletion.toDateString()}</Text>
                                                                                    <AntDesign name="calendar" size={20} color="#666" />
                                                                      </TouchableOpacity>

                                                                      {showCompletionPicker && (
                                                                                    <DateTimePicker
                                                                                                  value={estimatedCompletion}
                                                                                                  mode="date"
                                                                                                  display="default"
                                                                                                  onChange={onCompletionDateChange}
                                                                                    />
                                                                      )}
                                                        </View>
                                          </View>

                                          {/* Total Cost */}
                                          <View style={styles.totalSection}>
                                                        <Text style={styles.totalLabel}>Total Cost:</Text>
                                                        <Text style={styles.totalValue}>${calculateTotal()}</Text>
                                          </View>

                                          {/* Submit Button */}
                                          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                                                        <Text style={styles.submitButtonText}>Add Take-Away Repair</Text>
                                          </TouchableOpacity>

                                          <TouchableOpacity style={styles.submitButton} >
                                                        <Text style={styles.submitButtonText} onPress={() => navigation.navigate('TakeAwayShopRegrestrationScreen')}>Add Take-Away Client </Text>
                                          </TouchableOpacity>
                            </ScrollView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            padding: 16,
                            backgroundColor: '#f5f5f5',
              },
              header: {
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            textAlign: 'center',
                            color: '#333',
              },
              section: {
                            backgroundColor: 'white',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 2,
              },
              sectionTitle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginBottom: 12,
                            color: '#333',
              },
              imageSection: {
                            alignItems: 'center',
                            marginBottom: 16,
              },
              imagePickerButton: {
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#e1e1e1',
                            borderRadius: 8,
                            overflow: 'hidden',
              },
              productImage: {
                            width: '100%',
                            height: '100%',
              },
              imagePlaceholder: {
                            alignItems: 'center',
                            justifyContent: 'center',
              },
              imagePlaceholderText: {
                            marginTop: 8,
                            color: '#666',
                            textAlign: 'center',
              },
              inputGroup: {
                            marginBottom: 16,
              },
              label: {
                            fontSize: 16,
                            marginBottom: 8,
                            color: '#333',
              },
              input: {
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 4,
                            padding: 12,
                            fontSize: 16,
                            backgroundColor: '#fff',
              },
              textArea: {
                            height: 100,
                            textAlignVertical: 'top',
              },
              pickerContainer: {
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 4,
                            backgroundColor: '#fff',
              },
              picker: {
                            height: 50,
              },
              datePickerButton: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 4,
                            padding: 12,
                            backgroundColor: '#fff',
              },
              listItem: {
                            backgroundColor: '#f9f9f9',
                            borderRadius: 4,
                            padding: 12,
                            marginBottom: 12,
              },
              listItemHeader: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 8,
              },
              listItemTitle: {
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#333',
              },
              addButton: {
                            backgroundColor: '#5c6bc0',
                            borderRadius: 4,
                            padding: 12,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
              },
              addButtonText: {
                            color: 'white',
                            marginLeft: 8,
                            fontSize: 16,
                            fontWeight: '500',
              },
              totalSection: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            borderRadius: 8,
                            padding: 16,
                            marginBottom: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 2,
              },
              totalLabel: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333',
              },
              totalValue: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#5c6bc0',
              },
              submitButton: {
                            backgroundColor: '#4caf50',
                            borderRadius: 4,
                            padding: 16,
                            alignItems: 'center',
                            marginBottom: 32,
              },
              submitButtonText: {
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
              },
});

export default TakeawayRepairScreen;