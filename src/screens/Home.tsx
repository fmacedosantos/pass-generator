import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text, View, StyleSheet} from 'react-native'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text>Início do projeto!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });