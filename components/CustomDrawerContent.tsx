import { Drawer } from 'expo-router/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#007AFF" />
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Menu Items */}
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => router.push('/')}
      >
        <Ionicons name="person-outline" size={24} color="#333" />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => router.push('/')}
      >
        <Ionicons name="settings-outline" size={24} color="#333" />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => router.push('/(tabs)/flights')}
      >
        <Ionicons name="airplane-outline" size={24} color="#333" />
        <Text style={styles.menuText}>My Flights</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => router.push('/(tabs)/deals')}
      >
        <Ionicons name="briefcase-outline" size={24} color="#333" />
        <Text style={styles.menuText}>My Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default CustomDrawerContent;