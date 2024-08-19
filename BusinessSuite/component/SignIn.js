import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Animated } from 'react-native';

export default function SignIn({ onSignIn }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertOpacity] = useState(new Animated.Value(0)); 

//     useState(()=> {
// //         fetchAccount()
// //     },[])

// //     const API_URL = 'http://localhost:5176/api/authentication'

// //    // FETCH DATA
// //   const fetchAccount = async () => {
// //     try {
// //       const response = await fetch(API_URL, {
// //         headers: {
// //           'Accept': 'application/json',
// //         },
// //       });
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       const json = await response.json();
// //       setEmail(json);
// //       setPassword(json)
// //     } catch (error) {
// //       console.error('Error fetching Account:', error);
// //     }
// //   };


    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }
        setShowAlert(true);
        Animated.timing(alertOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();

        setTimeout(() => {
            Animated.timing(alertOpacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start(() => setShowAlert(false));
        }, 3000);
     
    };

    const handleForgotPassword = () => {
        Alert.alert('Forgot Password', 'sadasdsadsa');
    };

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>ETR</Text>
                <Text style={styles.subTitle}>BUSINESS SUITE</Text>
            </View>
            <View style={styles.text2}>
                <Text style={styles.title2}>WAREHOUSE PICKLIST</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.form}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {showAlert && (
                <Animated.View style={[styles.alert, { opacity: alertOpacity }]}>
                    <Text style={styles.alertText}>invalid Account</Text>
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 55,
        width: '100%',
    },
    text: {
        alignItems: 'center'
    },
    text2: {
        alignItems: 'center',
        backgroundColor: '#F3F9FF',
        marginTop: 20,
        marginBottom: 15,
        width: '100%',
        height: '10%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 81,
        color: '#1D5D9B',
        fontWeight: 'bold',
        fontFamily: 'poppins-bold'
    },
    title2: {
        fontWeight: 'bold',
        fontFamily: 'poppins-bold',
        fontSize: 18,
    },
    subTitle: {
        color: '#1D5D9B',
        fontFamily: 'poppins-regular',
        fontSize: 18,
    },
    container2: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    form: {
        flex: 1,
        padding: 16,
        width: '100%',
     
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 8,
        marginBottom: 16,
        paddingHorizontal: 18,
        fontFamily: 'poppins-regular',
        width: '90%',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#1D5D9B',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        width: '90%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'poppins-regular'
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 105
    },
    forgotPassword: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'poppins-regular',
    },
    label: {
        fontFamily: 'poppins-regular',
        marginBottom: 4,
        marginLeft: 17,
    },
    alert: {
        position: 'absolute',
        bottom: 215,
        backgroundColor: '#FD9B08',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'poppins-regular'
    }
});
