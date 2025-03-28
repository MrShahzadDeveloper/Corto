import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { ProductProvider } from '@/context/ProductContext';
import Product from '@/components/Product';
import Input from '@/components/Input';
import Shimmer from '@/components/Shimmer';

const Index = () => {

    return (
        <View style={styles.main}>
            <ProductProvider>
                <Input />
                <Product />
            </ProductProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },


});

export default Index;
