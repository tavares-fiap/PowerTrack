export type Location = {
  id: number;
  name: string;
  date: string;
  description: string;
};

export type Duration = {
  id: number;
  locationId: number;
  hours: number;
  minutes: number;
  description: string;
};

export type Damage = {
  id: number;
  locationId: number;
  description: string;
  estimatedCost: string;
};

export type Recommendation = {
  id: number;
  title: string;
  items: string[];
};

export type RootStackParamList = {
  MainTabs: undefined;
  EventDetail: { locationId: number };
};

export type MainTabParamList = {
  Panorama: undefined;
  Localização: undefined;
  Duração: undefined;
  Prejuízos: undefined;
  Recomendações: undefined;
};

