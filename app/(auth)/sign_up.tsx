import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';  
import { useRouter } from 'expo-router';
import { useAuth } from '@/context_api/auth_context';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { addUser } = useAuth();


  const handleSignUp = async () => {
    if (name && email && password) {
      try {
        const response = await axios.post('http://192.168.0.104:5050/api/v1/user/sign_up', {
          name,
          email,
          password
        });
        if (response.data.success) {
          Alert.alert('Success', 'You have signed up successfully!');
          addUser({email,name});
          router.push('/home');
        } else {
          Alert.alert('Error', 'Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please enter all fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SignUp;
