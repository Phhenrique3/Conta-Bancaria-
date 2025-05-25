// Navegação entre telas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas da aplicação
import HomeView from './home/HomeView.js';
import ContaView from './Banco/ContaView.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen 
          name="home" 
          component={HomeView} 
          options={homeOptions} 
        />
        <Stack.Screen 
          name="conta" 
          component={ContaView} 
          options={contaOptions} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const defaultOptions = {
  headerStyle: {
    backgroundColor: 'purple',
  },
  headerTintColor: 'white',
};


const homeOptions = {
  title: 'Bem-vindo',
  headerShown: false,
};


const contaOptions = {
  title: 'Suas contas',
};
