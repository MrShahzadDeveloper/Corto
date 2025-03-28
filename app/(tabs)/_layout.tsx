import { Tabs } from "expo-router";
import { AntDesign, SimpleLineIcons, Octicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // Top Tab Bar Styling
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",

        // Bottom Tab Bar Styling
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
