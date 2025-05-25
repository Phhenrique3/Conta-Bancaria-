import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import { findAll, deleteById } from "./BancoApi.js";
import {
  Button,
  PaperProvider,
  Portal,
  Dialog,
  TextInput,
  Text,
} from "react-native-paper";

export default function ContaView({ navigation }) {
  const [listaContas, setlistaContas] = useState([]);
  const [id, setId] = useState(null);
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showModal, setShowModal] = useState(false);

  const BuscarConta = async () => {
    try {
      const contas = await findAll();
      setlistaContas(contas);
    } catch (error) {
      console.error("Erro ao buscar conta bancaria:", error);
    }
  };

  const excluir = async (id) => {
    await deleteById(id);
    alert("Conta bancária excluída com sucesso");
    await BuscarConta();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contas Bacarias</Text>

      <FlatList
        data={listaContas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Card {...item} onDelete={() => excluir(item.id)} />
        )}
      />

      <Button
        onPress={BuscarConta}
        mode="contained"
        style={styles.botao}
        labelStyle={{ fontSize: 16 }}
      >
        Buscar Contas
      </Button>

      <Button
        mode="contained"
        style={styles.botao}
        labelStyle={{ fontSize: 16 }}
      >
       Depositar $ 
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
    textAlign: "center",
  },
  lista: {
    paddingBottom: 20,
  },
  botao: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "black",
    borderRadius: 30,
    paddingVertical: 6,
  },
});
