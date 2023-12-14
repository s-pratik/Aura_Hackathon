import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { themeColors } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) { 
                console.log('got error: ', err.message);
            }
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.backButton}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButtonContainer}
                    >
                        <ArrowLeftIcon size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../images/signup.png')}
                        style={styles.logo}
                    />
                </View>
            </SafeAreaView>
            <View style={styles.formContainer}>
                <View style={styles.form}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        placeholder='Enter Name'
                    />
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Enter Email'
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                        placeholder='Enter Password'
                    />
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.signupButtonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.orText}>Or</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../images/google.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../images/apple.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../images/facebook.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.bg,
    },
    safeArea: {
        flex: 1,
    },
    backButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backButtonContainer: {
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 50,
        marginLeft: 16,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        width: 165,
        height: 110,
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    form: {
        marginTop: 20,
    },
    label: {
        color: '#333',
        fontSize: 16,
        marginLeft: 4,
    },
    input: {
        padding: 12,
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        color: '#333',
        marginBottom: 10,
    },
    signupButton: {
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    signupButtonText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    orText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialButton: {
        padding: 12,
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        marginRight: 10,
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
    loginTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 7,
    },
    loginText: {
        color: '#666',
        fontWeight: 'bold',
    },
    loginLink: {
        color: 'yellow',
        fontWeight: 'bold',
    },
});
