import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsScreen from './screens/JobsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, Keyboard, Alert, Image } from 'react-native';

// Placeholder components for Snack compatibility
function PlaceholderScreen({ title }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Example login credentials (for testing)
  const exampleEmail = 'blindguy@blind.com';
  const examplePassword = 'password123';

  // Handle Login
  const handleLogin = () => {
    if (email === exampleEmail && password === examplePassword) {
      onLogin(true); // Successfully logged in
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // Handle Sign Up
  const handleSignUp = () => {
    if (email && password) {
      Alert.alert('Sign Up successful', 'You are now logged in!', [
        { text: 'OK', onPress: () => onLogin(true) },
      ]);
    } else {
      Alert.alert('Please provide both email and password.');
    }
  };

  // Add keyboard listener to handle potential cleanup
  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {});

    return () => {
      if (keyboardHideListener.remove) {
        keyboardHideListener.remove();
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginContainer}>
        {/* Logo Image */}
        <Image
          source={require('./assets/logo.png')} // Use your logo image here
          style={styles.logo}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter your password"
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} style={styles.button} />
          <Button title="Sign Up" onPress={handleSignUp} color="green" style={styles.button} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Set to false to show login screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Jobs"
              component={JobsScreen || (() => <PlaceholderScreen title="Jobs Screen" />)}
            />
            <Tab.Screen
              name="Profile"
              component={() => <ProfileScreen onLogout={handleLogout} />}
            />
          </Tab.Navigator>
        ) : (
          <LoginScreen onLogin={setIsLoggedIn} />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Optional: Set a background color
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adds a semi-transparent white background
    margin: 16,
    borderRadius: 10, // Optional: for rounded corners
  },
  logo: {
    width: 150, // Adjust the size of the logo
    height: 150,
    marginBottom: 20, // Space between the logo and input fields
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row', // Aligns buttons side by side
    justifyContent: 'center', // Centers the buttons horizontally
    width: '80%', // Buttons take up 80% of the container width
    marginTop: 20, // Space between input fields and buttons
  },
  button: {
    width: '40%', // Makes both buttons take up 40% of the container width, keeping them side by side with space in between
    marginHorizontal: 8, // Adds space between buttons
  },
});
