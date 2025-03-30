import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useProductContext } from '@/context/ProductContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const DealsProduct = () => {
    const { products, fetchAllProducts, loading } = useProductContext();

    useEffect(() => {
        fetchAllProducts();
    }, []);

    // Filter products with discounts > 15%
    const discountedProducts = products.filter((product) => product.discountPercentage > 15);

    return (
        <>
            <View style = {styles.main_title}>
                <View style={styles.deal}>
                    <Text style={styles.dealText}>All Avalible Deals</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {loading ? (
                    <ActivityIndicator size="large" color="#007AFF" />
                ) : discountedProducts.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="cart-outline" size={50} color="#888" />
                        <Text style={styles.emptyText}>No Deals Found</Text>
                    </View>
                ) : (
                    discountedProducts.map((item) => (
                        <View key={item.id} style={styles.card}>
                            {/* Discount Badge */}
                            <View style={styles.discountBadge}>
                                <Text style={styles.discountText}>
                                    {Math.round(item.discountPercentage)}% OFF
                                </Text>
                            </View>

                            {/* Product Image */}
                            <Image style={styles.productImage} source={{ uri: item.thumbnail }} />

                            {/* Product Details */}
                            <View style={styles.details}>
                                <Text style={styles.productName}>{item.title}</Text>
                                <Text style={styles.storeName}>{item.warrantyInformation || "No Warranty Info"}</Text>

                                {/* Pricing Section */}
                                <View style={styles.priceSection}>
                                    <Text style={styles.discountedPrice}>
                                        ${((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}
                                    </Text>
                                    <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    main_title:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    deal: {
        backgroundColor: "#F0F6FF",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        marginVertical: 10
    },
    dealText: {
        color: "#007AFF"
    },
    container: {
        // paddingVertical: 10,
        // paddingHorizontal: 10,
    },
    card: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    discountBadge: {
        position: 'absolute',
        bottom: 80,
        right: 10,
        backgroundColor: '#FF3E3E',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        zIndex: 2,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    productImage: {
        width: '100%',
        height: 230,
        backgroundColor: "#f0f0f0",
    },
    details: {
        padding: 12,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    storeName: {
        fontSize: 14,
        color: 'grey',
        marginTop: 2,
    },
    priceSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discountedPrice: {
        fontSize: 22,
        fontWeight: '900',
        color: '#007AFF',
    },
    originalPrice: {
        fontSize: 18,
        color: '#999',
        textDecorationLine: 'line-through',
        marginLeft: 8,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 650,
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default DealsProduct;
