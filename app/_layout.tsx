import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context_api/auth_context'; // Import the AuthProvider

const Root_Layout = () => {
  return (
    // Wrap the Stack component with the AuthProvider to provide authentication context
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Root_Layout;
