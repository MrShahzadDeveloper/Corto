import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProductProvider } from '@/context/ProductContext';
import Product from '@/components/Product';
import Input from '@/components/Input';

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
