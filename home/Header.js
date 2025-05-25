import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.text}>NEWBANCO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6A0DAD',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 6, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'sans-serif-medium',
    marginTop: 12,
    letterSpacing: 2,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
});
