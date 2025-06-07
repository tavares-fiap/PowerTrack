import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Location } from '../types';

interface EventCardProps {
  location: Location;
  onPress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ location, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{location.name}</Text>
        <Text style={styles.date}>Data: {location.date}</Text>
        {location.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {location.description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventCard;

