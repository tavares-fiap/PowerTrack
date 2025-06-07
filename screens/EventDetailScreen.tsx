import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, Location, Duration, Damage } from '../types';
import SectionHeader from '../components/SectionHeader';

interface EventDetailScreenProps {
  locations: Location[];
  durations: Duration[];
  damages: Damage[];
}

type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

const EventDetailScreen: React.FC<EventDetailScreenProps> = ({ locations, durations, damages }) => {
  const route = useRoute<EventDetailRouteProp>();
  const { locationId } = route.params;
  
  const location = locations.find(loc => loc.id === locationId);
  const locationDurations = durations.filter(duration => duration.locationId === locationId);
  const locationDamages = damages.filter(damage => damage.locationId === locationId);
  
  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Detalhes do Evento</Text>
        <Text style={styles.errorText}>Evento não encontrado.</Text>
      </View>
    );
  }

  const totalHours = locationDurations.reduce((acc, curr) => acc + curr.hours, 0);
  const totalMinutes = locationDurations.reduce((acc, curr) => acc + curr.minutes, 0);
  const adjustedHours = totalHours + Math.floor(totalMinutes / 60);
  const adjustedMinutes = totalMinutes % 60;

  const totalDamage = locationDamages.reduce((acc, curr) => {
    const cost = parseFloat(curr.estimatedCost) || 0;
    return acc + cost;
  }, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalhes do Evento</Text>
      
      <View style={styles.card}>
        <Text style={styles.locationName}>{location.name}</Text>
        <Text style={styles.date}>Data: {location.date}</Text>
        {location.description ? (
          <Text style={styles.description}>{location.description}</Text>
        ) : null}
      </View>
      
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>
          Tempo Total de Interrupção: {adjustedHours}h {adjustedMinutes}min
        </Text>
        <Text style={styles.statText}>
          Prejuízo Total: R$ {totalDamage.toFixed(2)}
        </Text>
      </View>
      
      {locationDurations.length > 0 && (
        <View>
          <SectionHeader title="Registros de Tempo de Interrupção" />
          {locationDurations.map(duration => (
            <View key={duration.id} style={styles.detailCard}>
              <Text>Duração: {duration.hours}h {duration.minutes}min</Text>
              {duration.description ? (
                <Text>Observações: {duration.description}</Text>
              ) : null}
            </View>
          ))}
        </View>
      )}
      
      {locationDamages.length > 0 && (
        <View>
          <SectionHeader title="Prejuízos Registrados" />
          {locationDamages.map(damage => (
            <View key={damage.id} style={styles.detailCard}>
              <Text>Descrição: {damage.description}</Text>
              <Text>Custo Estimado: R$ {damage.estimatedCost || '0.00'}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
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
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  locationName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
  statsContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statText: {
    fontSize: 16,
    marginBottom: 8,
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default EventDetailScreen;

