import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CustomButton({ title = '?', color = 'red', onPress }) {
  const button2 = {
    backgroundColor:color
  }
  return (
    <TouchableOpacity style={[styles.button, button2 ]} onPress={onPress}>
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
