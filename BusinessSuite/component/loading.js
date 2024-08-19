import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ETR</Text>
            <Text style={styles.subTitle}>BUSINESS SUITE</Text>
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
    title:{
        fontSize: 81,
        color: '#1D5D9B',
        fontWeight:'bold',
        fontFamily: 'poppins-bold'
        
    },
    subTitle:{
        color: '#1D5D9B',
        fontFamily: 'poppins-regular',
        fontSize: 18,
    }

  });