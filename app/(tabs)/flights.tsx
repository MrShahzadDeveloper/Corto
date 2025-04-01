import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { SimpleLineIcons } from "@expo/vector-icons"
import FlightInput from '@/components/FlightInput';

const Flights = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={styles.header_title}>
                            <SimpleLineIcons name="plane" size={22} color={"#007AFF"} />
                            <Text style={styles.header_title_text}>Flight Search</Text>
                        </View>
                        <Text style={styles.header_para}>Find the best deals on flights worldwide</Text>
                    </View>
                    <FlightInput />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 30, 
    },
    main: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    header: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginBottom: 10,
    },
    header_title: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 3
    },
    header_title_text: {
        fontSize: 25,
        fontWeight: "bold"
    },
    header_para: {
        fontSize: 16,
        color: "grey"
    }
})

export default Flights;