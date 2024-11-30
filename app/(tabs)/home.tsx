import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
    { id: '1', name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '3', name: 'Michael Johnson', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '4', name: 'Emily Davis', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '5', name: 'David Wilson', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '6', name: 'Emma Brown', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '7', name: 'Chris Garcia', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: '8', name: 'Olivia Martinez', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '9', name: 'Joshua Lee', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: '10', name: 'Ava Rodriguez', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: '11', name: 'Daniel Hernandez', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: '12', name: 'Sophia Martinez', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: '13', name: 'Matthew Lopez', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: '14', name: 'Isabella Wilson', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: '15', name: 'Anthony Harris', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: '16', name: 'Mia Clark', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: '17', name: 'Andrew Lewis', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: '18', name: 'Charlotte Walker', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: '19', name: 'Joseph Allen', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { id: '20', name: 'Abigail Young', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];
  
  
  

const HomePage = () => {
  const renderItem = ({ item }:{item:{id:string,name:string,image:string}}) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  name: {
    fontSize: 18,
  },
});

export default HomePage;
