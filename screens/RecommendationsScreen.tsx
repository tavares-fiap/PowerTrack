import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Recommendation } from '../types';

const RecommendationsScreen: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'Antes da Falta de Energia',
      items: [
        'Mantenha lanternas e pilhas extras em locais de fácil acesso',
        'Tenha um rádio à pilha para receber informações',
        'Armazene água potável em recipientes limpos',
        'Mantenha um estoque de alimentos não perecíveis',
        'Tenha um kit de primeiros socorros em casa'
      ]
    },
    {
      id: 2,
      title: 'Durante a Falta de Energia',
      items: [
        'Desligue aparelhos eletrônicos para evitar danos quando a energia voltar',
        'Mantenha a geladeira fechada para preservar os alimentos',
        'Use lanternas em vez de velas para evitar riscos de incêndio',
        'Evite abrir a geladeira desnecessariamente',
        'Verifique se seus vizinhos estão bem, especialmente idosos ou pessoas com necessidades especiais'
      ]
    },
    {
      id: 3,
      title: 'Após o Retorno da Energia',
      items: [
        'Verifique se há alimentos estragados na geladeira',
        'Reconecte os aparelhos eletrônicos gradualmente',
        'Verifique se há danos em equipamentos sensíveis',
        'Recarregue dispositivos de comunicação',
        'Reponha os suprimentos de emergência utilizados'
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendações</Text>
      
      <ScrollView>
        {recommendations.map(section => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
  },
  itemText: {
    flex: 1,
  },
});

export default RecommendationsScreen;

