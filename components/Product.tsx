import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Shimmer from './Shimmer';
import { useAppSelector } from '@/redux/features/hooks/hooks';


const Product = () => {

    const { items: products, loading, error } = useAppSelector(state => state.products);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            {
                (products.length == 0) ?
                    <View style={styles.emptyContainer}>
                        <Ionicons name="cart-outline" size={50} color="#888" />
                        <Text style={styles.emptyText}>No Products Found</Text>
                    </View> : (
                        loading ? <Shimmer /> : (
                            products.map((product) => (
                                <View key={product.id} style={styles.p_container}>
                                    <View style={styles.ship}>
                                        <View style={styles.freeShipping}>
                                            <Text style={styles.freeShippingText}>
                                                {product.shippingInformation || "Free Shipping"}
                                            </Text>
                                        </View>
                                    </View>

                                    <Image style={styles.productImage} source={{ uri: product.thumbnail }} />

                                    <View style={styles.con_text}>
                                        <View style={styles.left_con}>
                                            <Text style={styles.productName}>{product.title}</Text>
                                            <Text style={styles.storeName}>{product.warrantyInformation || "No Warranty Info"}</Text>
                                            <View style={styles.price}>
                                                <Text style={styles.currency}>USD</Text>
                                                <Text style={styles.priceValue}>${product.price}</Text>
                                            </View>
                                        </View>

                                        <View style={styles.right_con}>
                                            <View style={styles.rating}>
                                                <Ionicons name='star' size={20} color={"gold"} />
                                                <Text style={styles.ratingText}>{product.rating || "N/A"}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.btn}>
                                                <Ionicons name='cart-outline' size={16} color={'#fff'} />
                                                <Text style={styles.btnText}>Buy Now</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))
                        ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 10,
    },
    p_container: {
        width: '90%',
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
    ship: {
        backgroundColor: "#f0f0f0",
        alignItems: "flex-end"
    },
    freeShipping: {
        backgroundColor: '#007AFF',
        padding: 5,
        width: "auto",
        borderRadius: 10
    },
    freeShippingText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    productImage: {
        width: '100%',
        height: 250,
        backgroundColor: "#f0f0f0",
    },
    con_text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    left_con: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    storeName: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: "bold",
        marginBottom: 10,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    currency: {
        fontSize: 14,
        marginRight: 5,
        color: '#666',
    },
    priceValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    right_con: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: "bold"
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF5E05',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        marginLeft: 5,
        fontWeight: 'bold',
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

export default Product;
