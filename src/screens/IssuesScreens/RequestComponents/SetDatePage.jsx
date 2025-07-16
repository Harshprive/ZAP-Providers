import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, FlatList, ScrollView,Button } from 'react-native'
import React,{useState} from 'react'
import HeaderTitle from '../../../components/Header'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateData = [
    { id: '1', date: '25', day: 'Today' },
    { id: '2', date: '26', day: 'Tue' },
    { id: '3', date: '27', day: 'Wed' },
    { id: '4', date: '28', day: 'Thu' },

]



const SetDatePage = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirma = (time) => {
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedTime(formattedTime);
    hideTimePicker();
  };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <HeaderTitle />
            <ScrollView style={{ padding: 16 }}>
                <Text style={styles.sectionTitle}>Choose Service details</Text>
                <View style={styles.messageBox}>
                    <Text>Select date of Service</Text>
                    <FlatList
                        data={DateData}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        renderItem={({ item }) => (
                            <View
                                style={styles.box}
                            >
                                <Text style={styles.descriptionText}>{item.day}</Text>
                                <Text style={styles.sectionTitle}>{item.date}</Text>

                            </View>
                        )}
                    />
                </View>

                <View style={styles.messageBox}>
                    <Text>Select duration of Service</Text>
                    <FlatList
                        data={DateData}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        renderItem={({ item }) => (
                            <View
                                style={styles.box}
                            >
                                <Text style={styles.descriptionText}>{item.day}</Text>
                                <Text style={styles.sectionTitle}>{item.date}</Text>

                            </View>
                        )}
                    />
                </View>
                <View style={styles.messageBox}>
                    <Text>Select start time of Service</Text>
                    <FlatList
                        data={DateData}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        renderItem={({ item }) => (
                            <View
                                style={styles.box}
                            >
                                <Text style={styles.descriptionText}>{item.day}</Text>
                                <Text style={styles.sectionTitle}>{item.date}</Text>

                            </View>
                        )}
                    />
                </View>

                 <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

            <Button title="Select Time" onPress={showTimePicker} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Selected Time: {selectedTime}</Text>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirma}
        onCancel={hideTimePicker}
        is24Hour={false} // Change to true for 24-hour format
      />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SetDatePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    sectionTitle: {
        fontSize: 16,
        marginVertical: 5
        // fontWeight: 'bold',
        // marginBottom: 12,
    },
    descriptionText: {
        fontSize: 12,
        color: '#666',
        lineHeight: 20,
    },
    messageBox: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    box: {
        padding: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#8e80b0',
        margin: 8,
        width: 60,
    }
})