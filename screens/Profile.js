// Profile.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailNotification1, setEmailNotification1] = useState(false);
  const [emailNotification2, setEmailNotification2] = useState(false);

  useEffect(() => {
    // Load user data from storage when the component mounts
    const loadDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setProfileImage(parsedData.profileImage);
          setFirstName(parsedData.firstName);
          setLastName(parsedData.lastName);
          setEmail(parsedData.email);
          setPhoneNumber(parsedData.phoneNumber);
          setEmailNotification1(parsedData.emailNotification1);
          setEmailNotification2(parsedData.emailNotification2);
        }
      } catch (error) {
        console.error('Error loading data from storage:', error);
      }
    };

    loadDataFromStorage();
  }, []);

  const saveChanges = async () => {
    // Save user data to storage when changes are made
    try {
      const userData = {
        profileImage,
        firstName,
        lastName,
        email,
        phoneNumber,
        emailNotification1,
        emailNotification2,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving changes to storage:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Existing code */}
      <TouchableOpacity onPress={saveChanges}>
        <Text>Save Changes</Text>
      </TouchableOpacity>
      {}
    </View>
  );
};


import { useNavigation } from '@react-navigation/native';


  const navigation = useNavigation();

  const logout = async () => {
  
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Onboarding');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      {}
    </View>
  );

export default ProfileScreen;
