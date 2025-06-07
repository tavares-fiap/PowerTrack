import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Location, Damage } from '../types';
import FormInput from '../components/FormInput';
import SectionHeader from '../components/SectionHeader';
import LocationSelector from '../components/LocationSelector';

interface DamagesScreenProps {
  locations: Location[];
  damages: Damage[];
  setDamages: React.Dispatch<React.SetStateAction<Damage[]>>;
}

const DamagesScreen: React.FC<DamagesScreenProps> = ({ locations, damages, setDamages }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [description, setDescription] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');

  const addDamage = () => {
    if (!selectedLocationId || description.trim() === '') {
      return;
    }

    const newDamage: Damage = {
      id: Date.now(),
      locationId: selectedLocationId,
      description,
      estimatedCost
    };

    setDamages([...damages, newDamage]);
    setDescription('');
    setEstimatedCost('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prejuízos Causados</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Selecione a Localização:</Text>
        <LocationSelector
          locations={locations}
          selectedLocationId={selectedLocationId}
          onSelectLocation={setSelectedLocationId}
        />
        
        <FormInput
          label="Descrição dos Prejuízos:"
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva os prejuízos causados..."
          multiline
        />
        
        <FormInput
          label="Custo Estimado (R$):"
          value={estimatedCost}
          onChangeText={setEstimatedCost}
          placeholder="Ex: 1500.00"
          keyboardType="numeric"
        />
        
        <Button 
          title="Registrar Prejuízo" 
          onPress={addDamage} 
          disabled={!selectedLocationId} 
        />
      </View>
      
      <SectionHeader title="Prejuízos Registrados:" />
      
      <ScrollView>
        {damages.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum prejuízo registrado.</Text>
        ) : (
          damages.map(damage => {
            const location = locations.find(loc => loc.id === damage.locationId);
            return (
              <View key={damage.id} style={styles.damageItem}>
                <Text style={styles.locationName}>
                  {location ? location.name : 'Localização desconhecida'}
                </Text>
                <Text>Descrição: {damage.description}</Text>
                <Text>Custo Estimado: R$ {damage.estimatedCost || '0.00'}</Text>
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
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  damageItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  locationName: {
    fontWeight: 'bold',
  },
});

export default DamagesScreen;

