import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Location } from '../types';
import FormInput from '../components/FormInput';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';

interface LocationScreenProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

const LocationScreen: React.FC<LocationScreenProps> = ({ locations, setLocations }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const addLocation = () => {
    if (name.trim() === '' || date.trim() === '') {
      return;
    }

    const newLocation: Location = {
      id: Date.now(),
      name,
      date,
      description
    };

    setLocations([...locations, newLocation]);
    setName('');
    setDate('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização Atingida</Text>
      
      <View style={styles.formContainer}>
        <FormInput
          label="Nome da Região:"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Bairro Centro"
        />
        
        <FormInput
          label="Data do Evento:"
          value={date}
          onChangeText={setDate}
          placeholder="Ex: 05/06/2025"
        />
        
        <FormInput
          label="Descrição:"
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva o evento..."
          multiline
        />
        
        <Button title="Registrar Localização" onPress={addLocation} />
      </View>
      
      <SectionHeader title="Localizações Registradas:" />
      
      <ScrollView>
        {locations.length === 0 ? (
          <Text style={styles.emptyText}>Nenhuma localização registrada.</Text>
        ) : (
          locations.map(location => (
            <View key={location.id} style={styles.locationItem}>
              <Text style={styles.locationName}>{location.name}</Text>
              <Text>Data: {location.date}</Text>
              <Text>Descrição: {location.description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  locationItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  locationName: {
    fontWeight: 'bold',
  },
});

export default LocationScreen;

