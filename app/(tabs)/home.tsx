import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useAuth } from '@/context_api/auth_context';

const App = () => {
  const [location, setLocation] = useState(null);
  const { user } = useAuth();
  let webSocket = null;

  useEffect(() => {
    console.log('Component mounted...');
    let locationSubscription = null;

    const startTracking = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }

        // Start WebSocket connection
        webSocket = new WebSocket('ws://192.168.0.104:5050');
        webSocket.onopen = () => {
          console.log('Connected to the server');
        };

        webSocket.onclose = () => {
          console.log('Disconnected from the server');
        };

        // Watch for location changes
        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000, // Minimum time interval between updates
            distanceInterval: 1, // Minimum distance (meters) between updates
          },
          (newLocation) => {
            console.log('Live location update:', newLocation.coords);
            setLocation(newLocation);

            // Send location to the backend via WebSocket
            if (webSocket && webSocket.readyState === WebSocket.OPEN) {
              webSocket.send(
                JSON.stringify({
                  type: 'updateLocation',
                  email: user?.email,
                  lat: newLocation.coords.latitude,
                  lng: newLocation.coords.longitude,
                })
              );
            }
          }
        );
      } catch (error) {
        console.error('Error initializing tracking:', error);
      }
    };

    startTracking();

    // Cleanup function
    return () => {
      console.log('Component unmounted...');
      if (locationSubscription) {
        locationSubscription.remove();
      }
      if (webSocket) {
        if (user?.email) {
          webSocket.send(
            JSON.stringify({
              type: 'close_connection',
              email: user.email,
              lat: 0,
              lng: 0,
            })
          );
        }
        webSocket.close();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Live Location Updates:</Text>
      {/* {location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text>Fetching location...</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;



















// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// const data = [
//     { id: '1', name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
//     { id: '2', name: 'Jane Smith', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
//     { id: '3', name: 'Michael Johnson', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
//     { id: '4', name: 'Emily Davis', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
//     { id: '5', name: 'David Wilson', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
//     { id: '6', name: 'Emma Brown', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
//     { id: '7', name: 'Chris Garcia', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
//     { id: '8', name: 'Olivia Martinez', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
//     { id: '9', name: 'Joshua Lee', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
//     { id: '10', name: 'Ava Rodriguez', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
//     { id: '11', name: 'Daniel Hernandez', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
//     { id: '12', name: 'Sophia Martinez', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
//     { id: '13', name: 'Matthew Lopez', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
//     { id: '14', name: 'Isabella Wilson', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
//     { id: '15', name: 'Anthony Harris', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
//     { id: '16', name: 'Mia Clark', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
//     { id: '17', name: 'Andrew Lewis', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
//     { id: '18', name: 'Charlotte Walker', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
//     { id: '19', name: 'Joseph Allen', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
//     { id: '20', name: 'Abigail Young', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
//   ];
  
  
  

// const HomePage = () => {
//   const renderItem = ({ item }:{item:{id:string,name:string,image:string}}) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.image }} style={styles.profileImage} />
//       <Text style={styles.name}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 18,
//   },
// });

// export default HomePage;
