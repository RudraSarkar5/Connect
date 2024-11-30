import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {

    const isLoggedIn = false;

    if(isLoggedIn){
       return < Redirect href={'/connection'} />
     }else {
       return < Redirect href={'/sign_up'} />
     }


}


export default index