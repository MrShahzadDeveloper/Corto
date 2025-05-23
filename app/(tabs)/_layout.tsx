import { Tabs } from "expo-router";
import { AntDesign, SimpleLineIcons, Octicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
    
      screenOptions={{
       
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerLeft: () => (
          <View style={{ marginLeft: 15 }}>
            <DrawerToggleButton tintColor="#fff" />
          </View>
        ),
        headerTintColor: "#fff",
        headerTitleAlign: "center",

        
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          marginVertical: 5,
        },

        tabBarActiveTintColor: "#007AFF", // Active tab color (blue)
        tabBarInactiveTintColor: "gray", // Inactive tab color (gray)
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hey Corto",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="flights"
        options={{
          title: "Flights",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="plane" size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="deals"
        options={{
          title: "Deals",
          tabBarIcon: ({ color }) => (
            <Octicons name="tag" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
