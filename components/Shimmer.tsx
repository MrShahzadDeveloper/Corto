import React from 'react';
import { View, StyleSheet } from 'react-native';

const Shimmer = () => {
    return (
        <>
            <View style={styles.p_container}>
             
                <View style={styles.ship}>
                    <View style={styles.freeShipping} />
                </View>

                <View style={styles.productImage} />

                <View style={styles.con_text}>
                   
                    <View style={styles.left_con}>
                        <View style={styles.productName} />
                        <View style={styles.storeName} />
                        <View style={styles.price}>
                            <View style={styles.currency} />
                            <View style={styles.priceValue} />
                        </View>
                    </View>

                    <View style={styles.right_con}>
                        <View style={styles.rating}>
                        </View>
                        <View style={styles.btn}>
                            <View style={styles.btnText} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.p_container}>
                
                <View style={styles.ship}>
                    <View style={styles.freeShipping} />
                </View>

                <View style={styles.productImage} />

                <View style={styles.con_text}>
                    <View style={styles.left_con}>
                        <View style={styles.productName} />
                        <View style={styles.storeName} />
                        <View style={styles.price}>
                            <View style={styles.currency} />
                            <View style={styles.priceValue} />
                        </View>
                    </View>

                    <View style={styles.right_con}>
                        <View style={styles.rating}>
                        </View>
                        <View style={styles.btn}>
                            <View style={styles.btnText} />
                        </View>
                    </View>
                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
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
        paddingBottom: 15,
        marginBottom: 40
    },
    ship: {
        alignItems: "flex-end",
        padding: 10
    },
    freeShipping: {
        width: 100,
        height: 20,
        backgroundColor: "#e0e0e0",
        borderRadius: 10
    },
    productImage: {
        width: '100%',
        height: 200,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
    },
    con_text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 15
    },
    left_con: {
        flex: 1,
    },
    productName: {
        width: '80%',
        height: 20,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        marginBottom: 10
    },
    storeName: {
        width: '50%',
        height: 15,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        marginBottom: 10
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currency: {
        width: 20,
        height: 15,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        marginRight: 5
    },
    priceValue: {
        width: 50,
        height: 20,
        backgroundColor: "#e0e0e0",
        borderRadius: 5
    },
    right_con: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        width: 50,
        height: 20,
        borderRadius: 5,
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#e0e0e0',
        width: 80,
        height: 30,
        borderRadius: 5
    },
    btnText: {
        width: '100%',
        height: '100%',
        backgroundColor: "#e0e0e0",
        borderRadius: 5
    }
});

export default Shimmer;
