import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/features/hooks/hooks';
import { getProducts } from '../redux/features/products/productSlice';

const TestProducts = () => {
    const dispatch = useAppDispatch()
    const {items, loading, error} = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
    
      if (loading) return <ActivityIndicator size="large" />;
      if (error) return <Text>Error: {error}</Text>;
    
      return (
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 100 }} />
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
        />
      );
}


export default TestProducts;
