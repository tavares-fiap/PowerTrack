import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Location, Duration, Damage, RootStackParamList, MainTabParamList } from '../types';

import GeneralOverviewScreen from '../screens/GeneralOverviewScreen';
import LocationScreen from '../screens/LocationScreen';
import DurationScreen from '../screens/DurationScreen';
import DamagesScreen from '../screens/DamagesScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

interface AppNavigatorProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  durations: Duration[];
  setDurations: React.Dispatch<React.SetStateAction<Duration[]>>;
  damages: Damage[];
  setDamages: React.Dispatch<React.SetStateAction<Damage[]>>;
}

const MainTabNavigator: React.FC<AppNavigatorProps> = ({
  locations,
  setLocations,
  durations,
  setDurations,
  damages,
  setDamages,
}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Panorama" 
        options={{ title: 'Panorama Geral' }}
        children={() => (
          <GeneralOverviewScreen 
            locations={locations} 
            durations={durations} 
            damages={damages} 
          />
        )} 
      />
      <Tab.Screen 
        name="Localização" 
        options={{ title: 'Localização' }}
        children={() => (
          <LocationScreen 
            locations={locations} 
            setLocations={setLocations} 
          />
        )} 
      />
      <Tab.Screen 
        name="Duração" 
        options={{ title: 'Tempo' }}
        children={() => (
          <DurationScreen 
            locations={locations} 
            durations={durations} 
            setDurations={setDurations} 
          />
        )} 
      />
      <Tab.Screen 
        name="Prejuízos" 
        options={{ title: 'Prejuízos' }}
        children={() => (
          <DamagesScreen 
            locations={locations} 
            damages={damages} 
            setDamages={setDamages} 
          />
        )} 
      />
      <Tab.Screen 
        name="Recomendações" 
        component={RecommendationsScreen} 
      />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC<AppNavigatorProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          options={{ headerShown: false }}
          children={() => <MainTabNavigator {...props} />} 
        />
        <Stack.Screen 
          name="EventDetail" 
          options={{ title: 'Detalhes do Evento' }}
          children={() => (
            <EventDetailScreen 
              locations={props.locations} 
              durations={props.durations} 
              damages={props.damages} 
            />
          )} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

