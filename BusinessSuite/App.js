import React, { useState, useEffect } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Loading from './component/loading'; 
import SignIn from './component/SignIn';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'poppins-regular': require('./fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('./fonts/Poppins-Bold.ttf'),
    });
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsLoading(false);
    };

    loadData();
  }, []);


  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      {isLoading ? (
        <Loading />
      ) : (
        // Main content of app
        <View style={styles.mainContent}>
          <SignIn />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
