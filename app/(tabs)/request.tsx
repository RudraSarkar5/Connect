import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

const initialRequests = [
  { id: '1', name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '3', name: 'Michael Johnson', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '4', name: 'Emily Davis', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  // Add more data as needed
];

const FriendRequestPage = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleAccept = (id) => {
    // Remove the accepted request from the list
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleDecline = (id) => {
    // Remove the declined request from the list
    setRequests(requests.filter(request => request.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Accept" onPress={() => handleAccept(item.id)} />
          <Button title="Decline" onPress={() => handleDecline(item.id)} color="red" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend Requests</Text>
      <FlatList
        data={requests}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FriendRequestPage;
