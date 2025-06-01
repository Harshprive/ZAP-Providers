import React, { useState } from 'react';
import {
              StyleSheet,
              View,
              Text,
              TextInput,
              TouchableOpacity,
              Image,
              ScrollView,
              KeyboardAvoidingView,
              Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({ navigation }) => {
              const [message, setMessage] = useState('');
              const [messages] = useState([
                            {
                                          id: 1,
                                          text: 'hey there how are you',
                                          sender: 'user',
                                          timestamp: '10:00 AM',
                            },
                            {
                                          id: 2,
                                          text: "I'm doing greate, thanks for asking",
                                          sender: 'other',
                                          timestamp: '10:01 AM',
                            },
                            {
                                          id: 3,
                                          text: 'Want to grab coffe later?',
                                          sender: 'user',
                                          timestamp: '10:02 AM',
                            },
                            {
                                          id: 4,
                                          type: 'image',
                                          // imageUrl: require('./assets/coffee.jpg'), // You'll need to add this image
                                          sender: 'user',
                                          timestamp: '10:03 AM',
                            },
                            {
                                          id: 5,
                                          type: 'bill',
                                          billType: 'Mobile Shop Bill',
                                          sender: 'other',
                                          timestamp: '10:04 AM',
                            },
                            {
                                          id: 6,
                                          type: 'bill',
                                          billType: 'Instrumental Bill',
                                          sender: 'other',
                                          timestamp: '10:05 AM',
                            },
              ]);

              const renderMessage = (message) => {
                            const isUser = message.sender === 'user';

                            if (message.type === 'image') {
                                          return (
                                                        <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>
                                                                      <Image source={message.imageUrl} style={styles.messageImage} />
                                                                      <Text style={styles.timestamp}>{message.timestamp}</Text>
                                                        </View>
                                          );
                            }

                            if (message.type === 'bill') {
                                          return (
                                                        <View style={[styles.messageContainer, styles.otherMessage]}>
                                                                      <View style={styles.billContainer}>
                                                                                    <Ionicons name="document-text" size={24} color="#6B46C1" />
                                                                                    <Text style={styles.billText}>{message.billType}</Text>
                                                                      </View>
                                                                      <Text style={styles.timestamp}>{message.timestamp}</Text>
                                                        </View>
                                          );
                            }

                            return (
                                          <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>
                                                        <Text style={[styles.messageText, isUser ? styles.userMessageText : styles.otherMessageText]}>
                                                                      {message.text}
                                                        </Text>
                                                        <Text style={styles.timestamp}>{message.timestamp}</Text>
                                          </View>
                            );
              };

              return (
                            <SafeAreaView style={styles.container}>
                                          {/* Header */}
                                          <View style={styles.header}>
                                                        <TouchableOpacity style={styles.backButton}>
                                                                      <Ionicons name="arrow-back" size={24} color="#000" />
                                                        </TouchableOpacity>
                                                        <View style={styles.headerProfile}>
                                                                      <Image
                                                                                    // source={require('./assets/profile.jpg')} // Add profile image
                                                                                    style={styles.profileImage}
                                                                      />
                                                                      <View style={styles.profileInfo}>
                                                                                    <Text style={styles.profileName}>Rahul Bagde</Text>
                                                                                    <View style={styles.profileStatus}>
                                                                                                  <Ionicons name="time-outline" size={16} color="#666" />
                                                                                                  <Text style={styles.statusText}>Cleaning</Text>
                                                                                    </View>
                                                                      </View>
                                                        </View>
                                          </View>

                                          {/* Chat Messages */}
                                          <ScrollView style={styles.messagesContainer}>
                                                        {messages.map((msg) => (
                                                                      <View key={msg.id} style={[styles.messageWrapper, msg.sender === 'user' && styles.userMessageWrapper]}>
                                                                                    {renderMessage(msg)}
                                                                      </View>
                                                        ))}
                                          </ScrollView>

                                          {/* Input Footer */}
                                          <KeyboardAvoidingView
                                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                                        style={styles.footer}
                                          >
                                                        <View style={styles.inputContainer}>
                                                                      <TouchableOpacity style={styles.attachButton}>
                                                                                    <Ionicons name="attach" size={24} color="#666" />
                                                                      </TouchableOpacity>
                                                                      <TouchableOpacity style={styles.emojiButton}>
                                                                                    <Ionicons name="happy" size={24} color="#666" />
                                                                      </TouchableOpacity>
                                                                      <TextInput
                                                                                    style={styles.input}
                                                                                    placeholder="Type a message..."
                                                                                    value={message}
                                                                                    onChangeText={setMessage}
                                                                                    multiline
                                                                      />
                                                                      <TouchableOpacity style={styles.sendButton}>
                                                                                    <Ionicons name="send" size={24} color="#6B46C1" />
                                                                      </TouchableOpacity>
                                                        </View>
                                          </KeyboardAvoidingView>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              container: {
                            flex: 1,
                            backgroundColor: '#F7FAFC',
              },
              header: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 16,
                            backgroundColor: '#fff',
                            borderBottomWidth: 1,
                            borderBottomColor: '#E2E8F0',
              },
              backButton: {
                            marginRight: 16,
              },
              headerProfile: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 1,
              },
              profileImage: {
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginRight: 12,
              },
              profileInfo: {
                            flex: 1,
              },
              profileName: {
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#1A202C',
              },
              profileStatus: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 2,
              },
              statusText: {
                            fontSize: 14,
                            color: '#666',
                            marginLeft: 4,
              },
              messagesContainer: {
                            flex: 1,
                            padding: 16,
              },
              messageWrapper: {
                            marginBottom: 16,
                            maxWidth: '80%',
              },
              userMessageWrapper: {
                            alignSelf: 'flex-end',
              },
              messageContainer: {
                            borderRadius: 16,
                            padding: 12,
                            maxWidth: '100%',
              },
              userMessage: {
                            backgroundColor: '#6B46C1',
                            borderBottomRightRadius: 4,
              },
              otherMessage: {
                            backgroundColor: '#fff',
                            borderBottomLeftRadius: 4,
              },
              messageText: {
                            fontSize: 16,
                            lineHeight: 24,
              },
              userMessageText: {
                            color: '#fff',
              },
              otherMessageText: {
                            color: '#1A202C',
              },
              timestamp: {
                            fontSize: 12,
                            color: '#A0AEC0',
                            marginTop: 4,
              },
              messageImage: {
                            width: 200,
                            height: 200,
                            borderRadius: 12,
              },
              billContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#EDF2F7',
                            padding: 12,
                            borderRadius: 8,
              },
              billText: {
                            marginLeft: 8,
                            fontSize: 14,
                            color: '#2D3748',
                            fontWeight: '500',
              },
              footer: {
                            backgroundColor: '#fff',
                            borderTopWidth: 1,
                            borderTopColor: '#E2E8F0',
                            padding: 12,
              },
              inputContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#EDF2F7',
                            borderRadius: 24,
                            padding: 8,
              },
              attachButton: {
                            padding: 8,
              },
              emojiButton: {
                            padding: 8,
              },
              input: {
                            flex: 1,
                            fontSize: 16,
                            marginHorizontal: 8,
                            maxHeight: 100,
              },
              sendButton: {
                            padding: 8,
              },
});

export default ChatScreen;