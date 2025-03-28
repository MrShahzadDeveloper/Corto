import DealsProduct from '@/components/DealsProduct';
import { ProductProvider } from '@/context/ProductContext';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Deals = () => {
    return (
        <View>
            <ProductProvider >
                <DealsProduct />
            </ProductProvider>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Deals;
