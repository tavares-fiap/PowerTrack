import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Location, Duration, Damage, RootStackParamList } from '../types';
import EventCard from '../components/EventCard';
import SectionHeader from '../components/SectionHeader';

interface GeneralOverviewScreenProps {
  locations: Location[];
  durations: Duration[];
  damages: Damage[];
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

const GeneralOverviewScreen: React.FC<GeneralOverviewScreenProps> = ({
  locations,
  durations,
  damages,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const totalLocations = locations.length;
  
  let averageDuration = 0;
  if (durations.length > 0) {
    const totalHours = durations.reduce((acc, curr) => acc + curr.hours + (curr.minutes / 60), 0);
    averageDuration = totalHours / durations.length;
  }
  
  const totalDamages = damages.reduce((acc, curr) => {
    const cost = parseFloat(curr.estimatedCost) || 0;
    return acc + cost;
  }, 0);

  const handleEventPress = (locationId: number) => {
    navigation.navigate('EventDetail', { locationId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panorama Geral</Text>
      
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Regiões Afetadas: {totalLocations}</Text>
        <Text style={styles.statText}>Tempo Médio de Interrupção: {averageDuration.toFixed(2)} horas</Text>
        <Text style={styles.statText}>Prejuízo Total Estimado: R$ {totalDamages.toFixed(2)}</Text>
      </View>
      
      {totalLocations === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum evento registrado ainda.</Text>
          <Text style={styles.emptyText}>Utilize as outras abas para registrar eventos.</Text>
        </View>
      ) : (
        <View>
          <SectionHeader title="Eventos Recentes:" />
          {locations.slice(0, 3).map(location => (
            <EventCard 
              key={location.id} 
              location={location} 
              onPress={() => handleEventPress(location.id)} 
            />
          ))}
        </View>
      )}
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
  statsContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statText: {
    fontSize: 18,
    marginBottom: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

export default GeneralOverviewScreen;

