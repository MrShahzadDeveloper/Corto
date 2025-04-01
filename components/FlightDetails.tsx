import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import flightData from '../context/flightData';

interface FlightSegment {
    departureTime: string;
    duration: string;
    arrivalTime: string;
    from: string;
    to: string;
    flightNumber: string;
}

interface FlightItem {
    id: number;
    price: string;
    fromCity: string;
    toCity: string;
    flights: FlightSegment[];
}

interface FlightDetailsProps {
    city1: string;
    city2: string;
}

const FlightDetails = ({ city1, city2 }: FlightDetailsProps) => {
    if (!city1 || !city2) {
        return null;
    }

    const normalizedCity1 = city1.toLowerCase().trim();
    const normalizedCity2 = city2.toLowerCase().trim();

    const filteredFlights = flightData.filter(
        (item) =>
            item.fromCity?.toLowerCase() === normalizedCity1 &&
            item.toCity?.toLowerCase() === normalizedCity2
    );

    if (filteredFlights.length === 0) {
        return <Text style={styles.noFlightsText}>No flights available</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {filteredFlights.map((item) => (
                <View key={item.id} style={styles.container}>
                    <Text style={styles.price}>{item.price}</Text>
                    {item.flights.map((flight, index) => (
                        <View key={index} style={styles.flightContainer}>
                            <View style={styles.segment}>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.time}>{flight.departureTime}</Text>
                                    <Text style={styles.airport}>{flight.from}</Text>
                                </View>
                                <View style={styles.durationContainer}>
                                    <Text style={styles.duration}>{flight.duration}</Text>
                                    <View style={styles.lineContainer}>
                                        <View style={styles.line}></View>
                                    </View>
                                    <Text style={styles.flightNumber}>{flight.flightNumber}</Text>
                                </View>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.time}>{flight.arrivalTime}</Text>
                                    <Text style={styles.airport}>{flight.to}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20,
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 10,
        marginHorizontal: 10
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 16,
        textAlign: 'center',
    },
    flightContainer: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 12,
    },
    segment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    timeContainer: {
        alignItems: 'center',
        width: '30%',
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    airport: {
        fontSize: 14,
        color: '#666',
        fontWeight: 'bold',
    },
    durationContainer: {
        alignItems: 'center',
        width: '40%',
    },
    duration: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    flightNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 4,
    },
    lineContainer: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        marginVertical: 4,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: "#bdbdbd",
        borderStyle: 'dashed',
        borderRadius: 1,
    },
    noFlightsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});

export default FlightDetails;