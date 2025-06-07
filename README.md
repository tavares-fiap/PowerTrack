# Aplicativo de Registro de Faltas de Energia

Este aplicativo mobile foi desenvolvido com **React Native** e **TypeScript** para permitir o registro e visualização de informações sobre episódios de falta de energia causados por desastres naturais.

## Funcionalidades

O aplicativo possui 5 telas principais:

1. **Panorama Geral**: Resumo dos eventos registrados, com cards clicáveis para visualizar detalhes.
2. **Localização Atingida**: Cadastro e visualização de regiões afetadas.
3. **Tempo de Interrupção**: Registro e visualização do tempo sem energia.
4. **Prejuízos Causados**: Descrição dos prejuízos observados.
5. **Recomendações**: Orientações e boas práticas para situações de falta de energia.

Além disso, há uma tela adicional:

- **Detalhes do Evento**: Exibe informações detalhadas sobre um evento específico, incluindo tempo de interrupção, prejuízos causados e localização afetada.

## Tecnologias Utilizadas

- React Native  
- TypeScript  
- React Navigation (Stack Navigator e Bottom Tabs Navigator)  
- Expo  

## Estrutura do Projeto

```

PowerOutageApp/
├── components/               # Componentes reutilizáveis
│   ├── EventCard.tsx         # Card para exibir eventos na tela de panorama
│   ├── FormInput.tsx         # Input de formulário reutilizável
│   ├── LocationSelector.tsx  # Seletor de localização para formulários
│   └── SectionHeader.tsx     # Cabeçalho de seção reutilizável
├── navigation/               # Configuração de navegação
│   └── AppNavigator.tsx      # Configuração de Stack e Tab Navigators
├── screens/                  # Telas do aplicativo
│   ├── DamagesScreen.tsx         # Tela de prejuízos causados
│   ├── DurationScreen.tsx        # Tela de tempo de interrupção
│   ├── EventDetailScreen.tsx     # Tela de detalhes do evento
│   ├── GeneralOverviewScreen.tsx # Tela de panorama geral
│   ├── LocationScreen.tsx        # Tela de localização atingida
│   └── RecommendationsScreen.tsx # Tela de recomendações
├── types/                   # Definições de tipos TypeScript
│   └── index.ts             # Tipos centralizados
├── App.tsx                  # Componente principal
├── app.json                 # Configuração do Expo
├── babel.config.js          # Configuração do Babel
├── package.json             # Dependências do projeto
└── tsconfig.json            # Configuração do TypeScript

````

## Pré-requisitos

- Node.js (versão LTS recomendada)  
- Expo CLI  
- Android Studio (para emulador Android) ou Xcode (para emulador iOS)  

## Instalação

1. Clone o repositório  
2. Instale as dependências:  
   ```bash
   npm install
````

3. Inicie o aplicativo:

   ```bash
   npx expo start
   ```
4. Siga as instruções no terminal para abrir o aplicativo em um emulador ou dispositivo físico.

## Uso

* **Localização Atingida**: registre as regiões afetadas.
* **Tempo de Interrupção**: selecione uma localização e registre o tempo sem energia.
* **Prejuízos Causados**: selecione uma localização e registre os prejuízos observados.
* **Panorama Geral**: visualize um resumo de todos os eventos registrados e clique em um evento para ver mais detalhes.
* **Recomendações**: consulte orientações para situações de falta de energia.

## Limitações

* Os dados são armazenados apenas em memória, sendo perdidos ao fechar o aplicativo.
* Não há suporte para upload de imagens ou arquivos.
* Não há integração com serviços externos ou APIs.

## 👥 Integrantes

* Pedro Henrique Pedrosa Tavares - RM 97877
* Pedro Oliveira Valotto - RM 551445
* Guilherme Rocha Bianchini - RM 97974
