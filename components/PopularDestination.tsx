import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const cityData = [
  { name: 'New York', image: require('../assets/images/NewYork.jpg') },
  { name: 'Los Angeles', image: require('../assets/images/los-angeles.jpg') },
  { name: 'Chicago', image: require('../assets/images/chicago.jpg') },
  { name: 'Houston', image: require('../assets/images/houston.jpg') },
  { name: 'Phoenix', image: require('../assets/images/phoenix.jpg') },
  { name: 'Philadelphia', image: require('../assets/images/philadelphia.jpg') },
  { name: 'San Antonio', image: require('../assets/images/san-antonio.jpg') }
];

const PopularDestination = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Destinations</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cityData.map((city, index) => (
          <TouchableOpacity key={index} style={styles.cityCard}>
            <Image source={city.image} style={styles.cityImage} />
            <Text style={styles.cityName}>{city.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
    color: '#333',
  },
  scrollContainer: {
    paddingLeft: 15,
    paddingRight: 5,
  },
  cityCard: {
    width: 250,
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cityImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    color: '#007AFF',
    paddingHorizontal: 5,
  },
});

export default PopularDestination;