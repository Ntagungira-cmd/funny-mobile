import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert, StyleSheet, Platform } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert('Woow', 'You pressed the TouchableOpacity Component!👍👍👍');
  };

  const handleOtherPress = () => {
    Alert.alert('Welcome', 'You pressed the Button Component!👏👏👏');
  };

  return (
   //view is like div
    <View style={styles.container}>
      
      <Text style={styles.title}>React Native Presentation Demo</Text>

      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }} style={styles.image} />

      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <Text style={styles.touchableText}>Press me</Text>
      </TouchableOpacity>

      <Button title="Press me too" onPress={handleOtherPress} />

      <Text style={styles.platformSpecificText}>This text is platform-specific: {Platform.OS === 'ios' ? 'iOS' : 'Android'}</Text>

      <Button title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  touchable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
  },
  platformSpecificText: {
    margin: 20,
  },
 
 });

 export default HomeScreen;