import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import foto from '../assets/money.png';

export default function Card({
  tipo = '?',
  usuario = '?',
  dataAbertura = '?',
  senha = '?',
  saldo = '?',
  onPress,
  onDelete,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={foto} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{usuario}</Text>
        <Text style={styles.detail}>Tipo: {tipo}</Text>
        <Text style={styles.detail}>Abertura: {dataAbertura}</Text>
        <Text style={styles.detail}>Senha: {senha}</Text>
        <Text style={styles.saldo}>Saldo: R$ {saldo}</Text>
        <Button
          style={styles.excluir_button}
          textColor="white"
          mode="contained"
          onPress={onDelete}>
          Excluir
        </Button>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 16,
    paddingTop: 20
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  saldo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#008000',
    marginTop: 4,
    marginBottom: 8,
  },
  excluir_button: {
    alignSelf: 'flex-start',
    backgroundColor: '#E53935',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});
