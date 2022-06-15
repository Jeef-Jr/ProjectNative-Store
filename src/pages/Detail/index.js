import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "PC GAMER",
    headerStyle: {
      backgroundColor: "#6c757d",
    },
    headerTintColor: "#fff",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/pc1.jpg")}
      />
      <View>
        <View>
          <Text style={styles.price}>R$ 1.250,00</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
        <View style={styles.description}>
          <Text></Text>
          <Text>
            PC Gamer Skul 3000 I3-10100F, Radeon RX 550, 8GB DDR4, SSD 240GB,
            500W PFC ATIVO, Linux Com Memória RAM 8GB DDR4 uma configuração
            focada em colecionar vitórias, a linha de computadores Gamer é ideal
            para quem busca desempenho, velocidade e qualidade de imagem em seus
            jogos!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  price: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6c757d",
    margin: 20,
  },
  image: {
    width: "100%",
    height: 600,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "#6c757d",
    padding: "3%",
    color: "#fff",
    borderRadius: 5,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
  },
  description: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ced4da",
  },
});
