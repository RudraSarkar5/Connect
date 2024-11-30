import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Software Engineer with a passion for mobile app development. Loves hiking, photography, and tech meetups.</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Location:</Text>
        <Text style={styles.info}>San Francisco, CA</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.info}>john.doe@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Phone:</Text>
        <Text style={styles.info}>+1 234 567 890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default ProfilePage;
