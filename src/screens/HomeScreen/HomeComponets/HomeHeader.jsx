import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = ({name,onPressed}) => {
  return (
    <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.userName}>{name}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={[styles.brandText, { marginRight: 115 }]}>ZAP</Text>
          <Text onPress={onPressed}>
            current service
          </Text>
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </View>
        </View>
      </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
     header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",

  },
  headerLeft: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
   headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
    brandText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6C63FF",
    marginRight: 16,
  },
})