import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Location, Duration } from '../types';
import FormInput from '../components/FormInput';
import SectionHeader from '../components/SectionHeader';
import LocationSelector from '../components/LocationSelector';

interface DurationScreenProps {
  locations: Location[];
  durations: Duration[];
  setDurations: React.Dispatch<React.SetStateAction<Duration[]>>;
}

const DurationScreen: React.FC<DurationScreenProps> = ({ locations, durations, setDurations }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [description, setDescription] = useState('');

  const addDuration = () => {
    if (!selectedLocationId || hours.trim() === '' || minutes.trim() === '') {
      return;
    }

    const newDuration: Duration = {
      id: Date.now(),
      locationId: selectedLocationId,
      hours: parseInt(hours) || 0,
      minutes: parseInt(minutes) || 0,
      description
    };

    setDurations([...durations, newDuration]);
    setHours('');
    setMinutes('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tempo de Interrupção</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Selecione a Localização:</Text>
        <LocationSelector
          locations={locations}
          selectedLocationId={selectedLocationId}
          onSelectLocation={setSelectedLocationId}
        />
        
        <Text style={styles.label}>Duração da Interrupção:</Text>
        <View style={styles.durationContainer}>
          <View style={styles.durationInput}>
            <FormInput
              label=""
              value={hours}
              onChangeText={setHours}
              placeholder="Horas"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.durationInput}>
            <FormInput
              label=""
              value={minutes}
              onChangeText={setMinutes}
              placeholder="Minutos"
              keyboardType="numeric"
            />
          </View>
        </View>
        
        <FormInput
          label="Observações:"
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva detalhes sobre a interrupção..."
          multiline
        />
        
        <Button 
          title="Registrar Tempo" 
          onPress={addDuration} 
          disabled={!selectedLocationId} 
        />
      </View>
      
      <SectionHeader title="Tempos Registrados:" />
      
      <ScrollView>
        {durations.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum tempo de interrupção registrado.</Text>
        ) : (
          durations.map(duration => {
            const location = locations.find(loc => loc.id === duration.locationId);
            return (
              <View key={duration.id} style={styles.durationItem}>
                <Text style={styles.locationName}>
                  {location ? location.name : 'Localização desconhecida'}
                </Text>
                <Text>Duração: {duration.hours}h {duration.minutes}min</Text>
                <Text>Observações: {duration.description}</Text>
              </View>
            );
          })
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  durationContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  durationInput: {
    flex: 1,
    marginRight: 8,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  durationItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  locationName: {
    fontWeight: 'bold',
  },
});

export default DurationScreen;

