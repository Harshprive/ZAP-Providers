import React, { useState } from 'react';
import {
              StyleSheet,
              View,
              Text,
              TextInput,
              TouchableOpacity,
              ScrollView,
              Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrerequisitesScreen = ({ navigation }) => {
              const [items, setItems] = useState([]);
              const [currentItem, setCurrentItem] = useState({
                            itemName: '',
                            brand: '',
                            specification: '',
                            cost: '',
              });

              const addItem = () => {
                            if (!currentItem.itemName.trim()) {
                                          Alert.alert('Error', 'Please enter an item name');
                                          return;
                            }
                            setItems([...items, { ...currentItem, id: Date.now().toString() }]);
                            setCurrentItem({
                                          itemName: '',
                                          brand: '',
                                          specification: '',
                                          cost: '',
                            });
              };

              const deleteItem = (id) => {
                            setItems(items.filter(item => item.id !== id));
              };

              const clearAll = () => {
                            setItems([]);
              };

              return (
                            <View style={styles.container}>
                                          {/* Header */}
                                          {/* <View style={styles.header}>
                                                        <TouchableOpacity style={styles.backButton}>
                                                                      <Ionicons name="arrow-back" size={24} color="black" />
                                                        </TouchableOpacity>
                                                        <Text style={styles.headerTitle}>ZAP</Text>
                                          </View> */}

                                          <Text style={styles.title}>Service Prerequisites</Text>
                                          <Text style={styles.subtitle}>Home Cleaning Service</Text>
                                          <Text style={styles.description}>List of required items for the service</Text>

                                          {/* Form */}
                                          <ScrollView style={styles.formContainer}>
                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Item Name</Text>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="e.g. Water Pipe"
                                                                                    value={currentItem.itemName}
                                                                                    onChangeText={(text) => setCurrentItem({ ...currentItem, itemName: text })}
                                                                      />
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Brand</Text>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="e.g. Astral"
                                                                                    value={currentItem.brand}
                                                                                    onChangeText={(text) => setCurrentItem({ ...currentItem, brand: text })}
                                                                      />
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Specification</Text>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="e.g. 10 mm diameter"
                                                                                    value={currentItem.specification}
                                                                                    onChangeText={(text) => setCurrentItem({ ...currentItem, specification: text })}
                                                                      />
                                                        </View>

                                                        <View style={styles.inputGroup}>
                                                                      <Text style={styles.label}>Cost ₹</Text>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="0.00 Rs"
                                                                                    keyboardType="numeric"
                                                                                    value={currentItem.cost}
                                                                                    onChangeText={(text) => setCurrentItem({ ...currentItem, cost: text })}
                                                                      />
                                                        </View>

                                                        {/* Action Buttons */}
                                                        <View style={styles.actionButtons}>
                                                                      <TouchableOpacity style={styles.addButton} onPress={addItem}>
                                                                                    <Ionicons name="add" size={20} color="black" />
                                                                                    <Text style={styles.addButtonText}>Add Item</Text>
                                                                      </TouchableOpacity>

                                                                      <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
                                                                                    <Ionicons name="trash-outline" size={20} color="white" />
                                                                                    <Text style={styles.clearButtonText}>Clear List</Text>
                                                                      </TouchableOpacity>
                                                        </View>

                                                        {/* Items List */}
                                                        {items.map((item) => (
                                                                      <View key={item.id} style={styles.itemCard}>
                                                                                    <View style={styles.itemInfo}>
                                                                                                  <Text style={styles.itemName}>{item.itemName}</Text>
                                                                                                  <Text style={styles.itemDetails}>
                                                                                                                Brand: {item.brand} | Spec: {item.specification}
                                                                                                  </Text>
                                                                                                  <Text style={styles.itemCost}>₹{item.cost}</Text>
                                                                                    </View>
                                                                                    <TouchableOpacity
                                                                                                  style={styles.deleteButton}
                                                                                                  onPress={() => deleteItem(item.id)}
                                                                                    >
                                                                                                  <Ionicons name="close-circle" size={24} color="red" />
                                                                                    </TouchableOpacity>
                                                                      </View>
                                                        ))}
                                          </ScrollView>

                                          {/* Send Button */}
                                          <TouchableOpacity style={styles.sendButton}>
                                                        <Text style={styles.sendButtonText}>Send to user</Text>
                                          </TouchableOpacity>
                            </View>
              );
};

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
              backButton: {
                            marginRight: 16,
              },
              headerTitle: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#6200ee',
              },
              title: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginTop: 16,
                            marginHorizontal: 16,
              },
              subtitle: {
                            fontSize: 16,
                            color: '#6200ee',
                            marginHorizontal: 16,
                            marginTop: 8,
              },
              description: {
                            fontSize: 14,
                            color: '#666',
                            marginHorizontal: 16,
                            marginTop: 4,
                            marginBottom: 16,
              },
              formContainer: {
                            flex: 1,
                            padding: 16,
              },
              inputGroup: {
                            marginBottom: 16,
              },
              label: {
                            fontSize: 14,
                            marginBottom: 8,
                            color: '#333',
              },
              input: {
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 8,
                            padding: 12,
                            fontSize: 16,
              },
              actionButtons: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 16,
              },
              addButton: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0',
                            padding: 12,
                            borderRadius: 8,
                            flex: 1,
                            marginRight: 8,
                            justifyContent: 'center',
              },
              addButtonText: {
                            marginLeft: 8,
                            color: '#333',
                            fontWeight: '500',
              },
              clearButton: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#6200ee',
                            padding: 12,
                            borderRadius: 8,
                            flex: 1,
                            marginLeft: 8,
                            justifyContent: 'center',
              },
              clearButtonText: {
                            marginLeft: 8,
                            color: 'white',
                            fontWeight: '500',
              },
              itemCard: {
                            flexDirection: 'row',
                            backgroundColor: '#f8f8f8',
                            padding: 16,
                            borderRadius: 8,
                            marginBottom: 12,
                            alignItems: 'center',
              },
              itemInfo: {
                            flex: 1,
              },
              itemName: {
                            fontSize: 16,
                            fontWeight: '500',
              },
              itemDetails: {
                            fontSize: 14,
                            color: '#666',
                            marginTop: 4,
              },
              itemCost: {
                            fontSize: 14,
                            color: '#6200ee',
                            marginTop: 4,
              },
              deleteButton: {
                            padding: 4,
              },
              sendButton: {
                            backgroundColor: '#6200ee',
                            margin: 16,
                            padding: 16,
                            borderRadius: 8,
                            alignItems: 'center',
              },
              sendButtonText: {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '500',
              },
});

export default PrerequisitesScreen;