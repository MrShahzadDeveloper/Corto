import DealsProduct from '@/components/DealsProduct';
import TestProducts from '@/components/TestProducts';
import { ProductProvider } from '@/context/ProductContext';
import { store } from '@/redux/store';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';

const Deals = () => {
    return (
        <Provider store={store}>
            <DealsProduct />
        </Provider>
    );
}

const styles = StyleSheet.create({})

export default Deals;
