import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Location } from '../types';

interface LocationSelectorProps {
  locations: Location[];
  selectedLocationId: number | null;
  onSelectLocation: (locationId: number) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  selectedLocationId,
  onSelectLocation,
}) => {
  if (locations.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Nenhuma localização disponível. Registre uma localização primeiro.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView horizontal style={styles.container}>
      {locations.map((location) => (
        <TouchableOpacity
          key={location.id}
          style={[
            styles.locationButton,
            selectedLocationId === location.id && styles.selectedButton,
          ]}
          onPress={() => onSelectLocation(location.id)}
        >
          <Text
            style={[
              styles.locationText,
              selectedLocationId === location.id && styles.selectedText,
            ]}
          >
            {location.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  emptyContainer: {
    marginBottom: 12,
  },
  emptyText: {
    color: '#666',
    padding: 8,
  },
  locationButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#007bff',
  },
  locationText: {
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
});

export default LocationSelector;

