// Onboarding.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const OnboardingScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    // Validation logic and navigation to the next screen
    navigation.navigate('Profile', { firstName, email, phoneNumber });
  };

  return (
    <View style={styles.container}>
      {/* Existing code for header, logo, and text inputs */}

      {/* New masked phone number input */}
      <TextInputMask
        type={'custom'}
        options={{ mask: '(999) 999-9999' }}
        value={phoneNumber}
        onChangeText={(formatted, extracted) => {
          setPhoneNumber(extracted);
        }}
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Existing code for the "Next" button */}
    </View>
  );
};

// ... (rest of the existing styles)

export default OnboardingScreen;
