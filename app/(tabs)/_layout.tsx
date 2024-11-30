import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Tab_Layout = () => {
  return (
    <Tabs>
        < Tabs.Screen name='home' />
        < Tabs.Screen name='profile' />
        < Tabs.Screen name='request' />
        < Tabs.Screen name='connection' />
    </Tabs>
  )
}

export default Tab_Layout

const styles = StyleSheet.create({})