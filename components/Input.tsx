import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from '../redux/features/hooks/hooks';
import { searchProduct } from '../redux/features/products/productSlice'; 

const Input = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchProduct(query));
    }
  };

  return (
    <View>
      <View style={styles.input_main}>
        <View style={styles.container}>
          <AntDesign name="search1" size={25} color={"#007AFF"} />
          <TextInput
            style={styles.input}
            placeholder='Search for Products...'
            value={query}
            onChangeText={(value) => setQuery(value)}
            onSubmitEditing={handleSearch}
          />
          {query ? (
            <AntDesign
              name="close"
              color={"gray"}
              size={20}
              onPress={() => setQuery("")}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input_main: {
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 6,
    margin: 15,
    backgroundColor: "#F0F6FF",
    borderRadius: 12,
    borderColor: "#007AFF",
    borderWidth: 0.3
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10
  },
});

export default Input;
