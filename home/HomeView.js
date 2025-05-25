import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Contas-Bacarias"
          color="#6A0DAD"
          onPress={() => navigation.navigate('conta')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 20, 
  },
});
