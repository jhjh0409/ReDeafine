import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProfileScreen({ onLogout }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Placeholder Profile Picture */}
      <Image
        style={styles.profilePicture}
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e06d415096d5a7657fd468cb8b2c5232', // Placeholder image URL
        }}
      />

      {/* Personal Details */}
      <Text style={styles.sectionTitle}>My Profile</Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Name: </Text>Blind Guy
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Email: </Text>blindguy@blind.com
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Phone: </Text>+65 1234 5678
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Address: </Text>123 Vision Street, Singapore 42069
      </Text>

      {/* Education Background */}
      <Text style={styles.sectionTitle}>Education Background</Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Degree: </Text>PSLE Certificate
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>University: </Text>National University of Singapore
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Year of Graduation: </Text>2024
      </Text>

      {/* Job History */}
      <Text style={styles.sectionTitle}>Job History</Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Job 1: </Text>Software Intern at XYZ Corp (2023)
      </Text>
      <Text style={styles.detailItem}>
        <Text style={styles.detailLabel}>Job 2: </Text>Research Assistant at Changi Prison (2022-2023)
      </Text>

      {/* Logout Button */}
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
    color: '#333',
  },
  detailItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButtonContainer: {
    marginTop: 32,
    width: '80%',
  },
});
