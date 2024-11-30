import { View, Text } from 'react-native'

import { Stack } from 'expo-router'

const Root_Layout = () => {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default Root_Layout