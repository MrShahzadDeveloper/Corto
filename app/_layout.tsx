import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, View, Text } from "react-native";
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItem } from "@react-navigation/drawer";
import { AntDesign, SimpleLineIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Layout = () => {
    const CustomDrawer = (props: DrawerContentComponentProps) => {
        return (
            <DrawerContentScrollView {...props}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10, marginBottom: 50, marginTop: 20}}>
                    <Image style={{width: 50, height: 50, borderRadius: 50}} source={require("../assets/images/los-angeles.jpg")} />
                    <View>
                        <Text>Mr. Shahzad</Text>
                        <Text>mr.shahzad.developer@gmail.com</Text>
                    </View>
                </View>
                <DrawerItem
                    icon={({ size }) => (
                        <AntDesign
                            name="user"
                            size={size}
                            color={"#007AFF"}
                        />
                    )}
                    label={"Profile"}
                    onPress={() => {
                        router.push("/profile")
                    }}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <AntDesign name="search1" size={size} color={"#007AFF"} />
                    )}
                    label={"Corto"}
                    onPress={() => {
                        router.push("/(tabs)/index")
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <SimpleLineIcons name="plane" color={"#007AFF"} size={size} />
                    )}
                    label={"My Flights"}
                    onPress={() => {
                        router.push("/(tabs)/flights")
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Octicons name="tag" color={"#007AFF"} size={size} />
                    )}
                    label={"My Deals"}
                    onPress={() => {
                        router.push("/(tabs)/deals")
                    }}
                />
            </DrawerContentScrollView>
        );
    };

    return (
        <>
            <StatusBar style="light" backgroundColor="#007AFF" />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    drawerContent={(props) => <CustomDrawer {...props} />}
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Drawer.Screen name = "profile" options={{headerShown: true}} />
                </Drawer>
            </GestureHandlerRootView>
        </>
    );
};

const styles = StyleSheet.create({});

export default Layout;