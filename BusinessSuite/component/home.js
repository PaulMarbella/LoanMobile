import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
})

