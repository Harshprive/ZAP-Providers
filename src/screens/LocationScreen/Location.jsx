import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import HomeHeader from "../HomeScreen/HomeComponets/HomeHeader";
import CustomIcon from "../../utility/CustomIcon"; // Adjust the import path as necessary

export default function ClientLocationScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let userLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });
      } catch (error) {
        setErrorMsg("Error fetching location: " + error.message);
      }
    };

    getLocation();
  }, []);

  const initialRegion = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : null;

  console.log("Location", location);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f8f8f8"
        barStyle="dark-content"
        style="auto"
      />

      <HomeHeader name={"Allan Smith"} onPressed={{}} />
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={initialRegion}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
            <Marker coordinate={location} title="Current Location" />
          </MapView>
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.errorText}>{errorMsg || "Loading map..."}</Text>
          </View>
        )}
      </View>

      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressText}>
            Flat No. 101, A-1 Building, Mumbai Residency,{"\n"}
            Andheri East, Mumbai, Maharashtra,{"\n"}
            PIN Code: 400069, India.
          </Text>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("ClientServicePage")}
        >
          <CustomIcon
            name="navigation"
            type="MaterialIcons"
            size={30}
            color={"#4F23B8"}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
      </View>
      <Text onPress={() => navigation.navigate("ClientServicePage")}>
        start service{" "}
      </Text>
      <View style={[styles.buttonContainer]}>
        <Button title="Start Service" onPress={() => navigation.goBack()} />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    padding: 16,
    color: "#333",
  },
  mapContainer: {
    height: Dimensions.get("window").height * 0.7,
    width: "100%",
    // overflow: "hidden",

    backgroundColor: "#f5f5f5",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    padding: 20,
  },
  addressContainer: {
    // padding: 16,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  addressText: {
    fontSize: 14,
    color: "#000000",
    lineHeight: 22,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 5,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
