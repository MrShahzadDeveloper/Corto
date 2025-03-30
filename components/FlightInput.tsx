import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign, Feather, Octicons, Ionicons } from "@expo/vector-icons";
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import FlightDetails from './FlightDetails';

type DayType = {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
};

const FlightInput = () => {
    const [tripType, setTripType] = useState<'round' | 'oneway'>('round');
    const [showCalendar, setShowCalendar] = useState(false);
    const [showPassengerModal, setShowPassengerModal] = useState(false);
    const [calendarType, setCalendarType] = useState<'departure' | 'return'>('departure');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [city1, setCity1] = useState("")
    const [city2, setCity2] = useState("")

    const handleDateSelect = (day: DayType) => {
        if (calendarType === 'departure') {
            setDepartureDate(day.dateString);
        } else {
            setReturnDate(day.dateString);
        }
        setShowCalendar(false);
    };

    const updateAdults = (value: number) => {
        setAdults(Math.max(1, value)); // Ensure we don't go below 1
    };

    return (
        <>
            <ScrollView style={styles.main}>
                {/* Trip Type Selector */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={[styles.tripOption, tripType === 'round' && styles.activeOption]}
                        onPress={() => setTripType('round')}
                    >
                        <Text style={[styles.tripText, tripType === 'round' && styles.activeText]}>Round Trip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tripOption, tripType === 'oneway' && styles.activeOption]}
                        onPress={() => setTripType('oneway')}
                    >
                        <Text style={[styles.tripText, tripType === 'oneway' && styles.activeText]}>One Way</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputCon}>
                        <AntDesign name="search1" size={20} color="#007AFF" style={styles.icon} />
                        <TextInput
                            placeholder="From"
                            placeholderTextColor="#8E8E93"
                            style={styles.textInput}
                            onChangeText={(value) => setCity1(value)}
                        />
                    </View>

                    <View style={styles.inputCon}>
                        <AntDesign name="search1" size={20} color="#007AFF" style={styles.icon} />
                        <TextInput
                            placeholder="To"
                            placeholderTextColor="#8E8E93"
                            style={styles.textInput}
                            onChangeText={(value) => setCity2(value)}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.inputCon}
                        onPress={() => {
                            setCalendarType('departure');
                            setShowCalendar(true);
                        }}
                    >
                        <Feather name="calendar" size={20} color="#007AFF" style={styles.icon} />
                        <Text style={[styles.textInput, !departureDate && { color: '#8E8E93' }]}>
                            {departureDate || 'Select Departure Date'}
                        </Text>
                    </TouchableOpacity>

                    {tripType === 'round' && (
                        <TouchableOpacity
                            style={styles.inputCon}
                            onPress={() => {
                                setCalendarType('return');
                                setShowCalendar(true);
                            }}
                        >
                            <Feather name="calendar" size={20} color="#007AFF" style={styles.icon} />
                            <Text style={[styles.textInput, !returnDate && { color: '#8E8E93' }]}>
                                {returnDate || 'Select Return Date'}
                            </Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={styles.inputCon}
                        onPress={() => setShowPassengerModal(true)}
                    >
                        <Octicons name="people" size={20} color="#007AFF" style={styles.icon} />
                        <Text style={[styles.textInput, { color: '#000' }]}>
                            {adults === 1 ? '1 Adult' : `${adults} Adults`}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Search Button */}
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Search Flights</Text>
                </TouchableOpacity>

                {/* Calendar Modal */}
                <Modal
                    isVisible={showCalendar}
                    style={styles.modal}
                    backdropOpacity={0.5}
                    onBackdropPress={() => setShowCalendar(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.calendarHeader}>
                            <Text style={styles.calendarTitle}>
                                {calendarType === 'departure' ? 'Select Departure Date' : 'Select Return Date'}
                            </Text>
                            <TouchableOpacity onPress={() => setShowCalendar(false)}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View>
                        <Calendar
                            current={'2025-03-01'}
                            onDayPress={handleDateSelect}
                            markedDates={{
                                ...(departureDate ? { '2025-03-01': { selected: true } } : {})
                            }}
                            theme={{
                                calendarBackground: 'white',
                                textSectionTitleColor: '#000',
                                dayTextColor: '#000',
                                todayTextColor: '#007AFF',
                                selectedDayBackgroundColor: '#007AFF',
                                selectedDayTextColor: 'white',
                                monthTextColor: '#000',
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 16,
                                textMonthFontSize: 18,
                                arrowColor: '#007AFF',
                            }}
                            style={styles.calendar}
                        />
                    </View>
                </Modal>

                {/* Passenger Selection Modal */}
                <Modal
                    isVisible={showPassengerModal}
                    style={styles.modal}
                    backdropOpacity={0.5}
                    onBackdropPress={() => setShowPassengerModal(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.calendarHeader}>
                            <Text style={styles.calendarTitle}>Select Passengers</Text>
                            <TouchableOpacity onPress={() => setShowPassengerModal(false)}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.passengerRow}>
                            <View>
                                <Text style={styles.passengerLabel}>Adults</Text>
                            </View>
                            <View style={styles.passengerCounter}>
                                <TouchableOpacity
                                    style={styles.counterButton}
                                    onPress={() => updateAdults(adults - 1)}
                                    disabled={adults <= 1}
                                >
                                    <AntDesign name="minus" size={20} color={"#007AFF"} />
                                </TouchableOpacity>
                                <Text style={styles.passengerCount}>{adults}</Text>
                                <TouchableOpacity
                                    style={styles.counterButton}
                                    onPress={() => updateAdults(adults + 1)}
                                >
                                    <Ionicons name="add" size={20} color={"#007AFF"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <FlightDetails city1={city1} city2={city2} />
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '95%',
        alignSelf: 'center',
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 7,
        alignItems: "center",
    },
    tripOption: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 7,
        marginHorizontal: 5,
        marginVertical: 5,
        width: "45%",
        alignItems: "center",
    },
    activeOption: {
        backgroundColor: '#fff'
    },
    tripText: {
        fontSize: 16,
        color: '#8E8E93'
    },
    activeText: {
        color: '#007AFF',
        fontWeight: 'bold'
    },
    inputContainer: {
        marginBottom: 10
    },
    inputCon: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "#f0f0f0",
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        paddingVertical: 0,
        height: 24,
    },
    searchButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    searchButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: 30,
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    calendarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    doneButton: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 10,
        overflow: 'hidden',
    },
    passengerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    passengerLabel: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    passengerCounter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        justifyContent: 'center',
        alignItems: 'center',
    },

    passengerCount: {
        width: 40,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
});

export default FlightInput;