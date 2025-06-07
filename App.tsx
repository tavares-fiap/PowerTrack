import React, { useState } from 'react';
import { Location, Duration, Damage } from './types';
import AppNavigator from './navigation/AppNavigator';

function App(): React.JSX.Element {
  const [locations, setLocations] = useState<Location[]>([]);
  const [durations, setDurations] = useState<Duration[]>([]);
  const [damages, setDamages] = useState<Damage[]>([]);

  return (
    <AppNavigator
      locations={locations}
      setLocations={setLocations}
      durations={durations}
      setDurations={setDurations}
      damages={damages}
      setDamages={setDamages}
    />
  );
}

export default App;

