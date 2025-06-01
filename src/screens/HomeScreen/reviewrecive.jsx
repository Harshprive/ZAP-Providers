import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReviewRatingsScreen = () => {
              // Sample data for reviews
              const [reviews, setReviews] = useState([
                            {
                                          id: '1',
                                          name: 'Alex Johnson',
                                          rating: 5,
                                          date: 'March 8, 2025',
                                          category: 'Service',
                                          expanded: false,
                            },
                            {
                                          id: '2',
                                          name: 'Sarah Miller',
                                          rating: 4,
                                          date: 'March 5, 2025',
                                          category: 'Delivery',
                                          expanded: false,
                            },
                            {
                                          id: '3',
                                          name: 'Michael Chen',
                                          rating: 3,
                                          date: 'March 1, 2025',
                                          category: 'Quality',
                                          expanded: false,
                            },
              ]);

              // Calculate average rating
              const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

              // Toggle review expansion
              const toggleExpand = (id) => {
                            setReviews(
                                          reviews.map(review =>
                                                        review.id === id ? { ...review, expanded: !review.expanded } : review
                                          )
                            );
              };

              // Render star ratings
              const renderStars = (rating) => {
                            return (
                                          <View style={styles.starsContainer}>
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                                      <Ionicons
                                                                                    key={star}
                                                                                    name={star <= rating ? "star" : "star-outline"}
                                                                                    size={16}
                                                                                    color="#FFD700"
                                                                                    style={styles.starIcon}
                                                                      />
                                                        ))}
                                          </View>
                            );
              };

              // Render a review item
              const renderReviewItem = ({ item }) => (
                            <View style={styles.reviewItem}>
                                          <View style={styles.reviewHeader}>
                                                        <View style={styles.userInfo}>
                                                                      <View style={styles.avatar}>
                                                                                    <Text style={styles.avatarText}>
                                                                                                  {item.name.charAt(0)}
                                                                                    </Text>
                                                                      </View>
                                                                      <View style={styles.userDetails}>
                                                                                    <Text style={styles.userName}>{item.name}</Text>
                                                                                    <View style={styles.ratingDate}>
                                                                                                  {renderStars(item.rating)}
                                                                                                  <Text style={styles.reviewDate}>{item.date}</Text>
                                                                                    </View>
                                                                      </View>
                                                        </View>

                                                        <View style={styles.categoryContainer}>
                                                                      <Text style={styles.categoryText}>{item.category}</Text>
                                                                      <TouchableOpacity
                                                                                    style={styles.expandButton}
                                                                                    onPress={() => toggleExpand(item.id)}
                                                                      >
                                                                                    <Ionicons
                                                                                                  name={item.expanded ? "chevron-up" : "chevron-down"}
                                                                                                  size={18}
                                                                                                  color="#555"
                                                                                    />
                                                                      </TouchableOpacity>
                                                        </View>
                                          </View>

                                          {item.expanded && (
                                                        <View style={styles.reviewContent}>
                                                                      <Text style={styles.reviewText}>
                                                                                    This is where the full review content would appear when expanded. The customer shared their experience about the {item.category.toLowerCase()}.
                                                                      </Text>
                                                        </View>
                                          )}
                            </View>
              );

              return (
                            <SafeAreaView style={styles.safeArea}>
                                          <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
                                          <View style={styles.container}>
                                                        <View style={styles.headerContainer}>
                                                                      <Text style={styles.headerTitle}>Your Ratings</Text>
                                                        </View>

                                                        <View style={styles.ratingOverview}>
                                                                      <View style={styles.averageRatingContainer}>
                                                                                    <Text style={styles.averageRatingLabel}>Average Rating</Text>
                                                                                    <Text style={styles.averageRatingValue}>{averageRating.toFixed(1)}</Text>
                                                                                    {renderStars(Math.round(averageRating))}
                                                                      </View>
                                                                      <View style={styles.totalReviewsContainer}>
                                                                                    <Text style={styles.totalReviewsLabel}>Total Reviews</Text>
                                                                                    <Text style={styles.totalReviewsValue}>{reviews.length}</Text>
                                                                      </View>
                                                        </View>

                                                        <FlatList
                                                                      data={reviews}
                                                                      renderItem={renderReviewItem}
                                                                      keyExtractor={(item) => item.id}
                                                                      contentContainerStyle={styles.reviewsList}
                                                                      showsVerticalScrollIndicator={false}
                                                                      ItemSeparatorComponent={() => <View style={styles.separator} />}
                                                        />
                                          </View>
                            </SafeAreaView>
              );
};

const styles = StyleSheet.create({
              safeArea: {
                            flex: 1,
                            backgroundColor: '#f8f9fa',
              },
              container: {
                            flex: 1,
                            paddingHorizontal: 16,
                            paddingTop: 16,
                            paddingBottom: 24,
                            backgroundColor: '#f8f9fa',
              },
              headerContainer: {
                            marginBottom: 16,
                            paddingVertical: 8,
              },
              headerTitle: {
                            fontSize: 24,
                            fontWeight: '700',
                            color: '#222',
                            letterSpacing: -0.5,
              },
              ratingOverview: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            borderRadius: 12,
                            padding: 16,
                            marginBottom: 20,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.05,
                            shadowRadius: 3,
                            elevation: 2,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.03)',
              },
              averageRatingContainer: {
                            alignItems: 'flex-start',
              },
              averageRatingLabel: {
                            fontSize: 14,
                            color: '#666',
                            marginBottom: 8,
              },
              averageRatingValue: {
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#222',
                            marginBottom: 6,
              },
              totalReviewsContainer: {
                            alignItems: 'flex-end',
                            justifyContent: 'center',
              },
              totalReviewsLabel: {
                            fontSize: 14,
                            color: '#666',
                            marginBottom: 8,
              },
              totalReviewsValue: {
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#222',
              },
              starsContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              starIcon: {
                            marginRight: 2,
              },
              reviewsList: {
                            paddingBottom: 8,
              },
              reviewItem: {
                            backgroundColor: 'white',
                            borderRadius: 12,
                            padding: 16,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.05,
                            shadowRadius: 3,
                            elevation: 2,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.03)',
              },
              reviewHeader: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
              },
              userInfo: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 1,
              },
              avatar: {
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#f0f0f0',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.05)',
              },
              avatarText: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#555',
              },
              userDetails: {
                            justifyContent: 'center',
                            flex: 1,
              },
              userName: {
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#222',
                            marginBottom: 4,
              },
              ratingDate: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              reviewDate: {
                            fontSize: 12,
                            color: '#777',
                            marginLeft: 6,
              },
              categoryContainer: {
                            flexDirection: 'row',
                            alignItems: 'center',
              },
              categoryText: {
                            fontSize: 13,
                            color: '#555',
                            backgroundColor: '#f0f0f0',
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 8,
                            overflow: 'hidden',
                            marginRight: 8,
              },
              expandButton: {
                            padding: 4,
              },
              separator: {
                            height: 12,
              },
              reviewContent: {
                            paddingTop: 12,
                            marginTop: 12,
                            borderTopWidth: 1,
                            borderTopColor: '#f0f0f0',
              },
              reviewText: {
                            fontSize: 14,
                            lineHeight: 20,
                            color: '#444',
              },
});

export default ReviewRatingsScreen;