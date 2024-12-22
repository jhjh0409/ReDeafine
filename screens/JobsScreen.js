import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button, Image } from 'react-native';

const jobData = [
  { 
    id: '1', 
    title: 'Warehouse Assistant', 
    location: 'Pulau Tekong', 
    companyName: 'Sats Food', 
    type: 'Full-time', 
    salary: '$100,000 - $120,000', 
    companyLogo: require('../assets/sats.png') // Example logo
  },
  { 
    id: '2', 
    title: 'Retail Assistant', 
    location: 'Changi Business Park', 
    companyName: 'Cold Storage', 
    type: 'Part-time', 
    salary: '$12 per hour', 
    companyLogo: require('../assets/cs.jpg') // Example logo
  },
  { 
    id: '3', 
    title: 'Cashier cum Retail Assistant', 
    location: 'Lorong Asrama Training Shed 2', 
    companyName: 'NTUC FairPrice', 
    type: 'Contract', 
    salary: '$70,000 - $80,000', 
    companyLogo: require('../assets/fair.png') // Example logo
  },
  { 
    id: '4', 
    title: 'Sales Assistant', 
    location: 'Tampines Mall', 
    companyName: 'Decathlon', 
    type: 'Full-time', 
    salary: '$110,000 - $130,000', 
    companyLogo: require('../assets/dec.png') // Example logo
  },
  { 
    id: '5', 
    title: 'Warehouse Assistant', 
    location: 'Kranji Camp 2', 
    companyName: 'Singapore Armed Forces', 
    type: 'Contract', 
    salary: '$100,000 - $120,000', 
    companyLogo: require('../assets/saf.png') // Example logo
  },
  { 
    id: '6', 
    title: 'Service Assistant', 
    location: 'Bedok', 
    companyName: 'Society for the Prevention of Cruelty to Animals (SPCA)', 
    type: 'Part-Time', 
    salary: '$10 per hour', 
    companyLogo: require('../assets/space.png') // Example logo
  },
];

export default function JobsScreen() {
  const [filter, setFilter] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleFilter = () => {
    setFilteredJobs(jobData.filter(job => job.title.toLowerCase().includes(filter.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by job title..."
        value={filter}
        onChangeText={setFilter}
      />
      <Button title="Apply Filter" onPress={handleFilter} />
      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <View style={styles.jobHeader}>
              {/* Company Logo */}
              <Image source={item.companyLogo} style={styles.companyLogo} />
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text>{item.companyName}</Text>
                <Text>{item.location} | {item.type}</Text>
                <Text>{item.salary}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  jobItem: {
    paddingVertical: 20, // Increase the vertical padding to make each job longer
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // Adjust spacing between logo and job details
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8, // Add some space below the job title for separation
  },
});
