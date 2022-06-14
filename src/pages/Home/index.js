import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.banner}
          source={require("../../assets/banner.png")}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Hardware</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>Componentes</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons
              style={styles.icon}
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView>
        <Text style={[styles.text, styles.title]}>Lançamentos</Text>
        <View style={styles.row}>
          <Card
            url={require("../../assets/pc1.jpg")}
            text="PC GAMER 1"
            preco="1.250,00"
            click={() => navigation.navigate("Detail")}
          />
          <Card
            url={require("../../assets/pc2.jpg")}
            text="PC GAMER 2"
            preco="1.550,00"
            click={() => alert("click")}
          />
        </View>
        <View style={styles.row}>
          <Card
            url={require("../../assets/pc1.jpg")}
            text="PC GAMER 3"
            preco="4.050,00"
            click={() => alert("click")}
          />
          <Card
            url={require("../../assets/pc4.jpg")}
            text="PC GAMER 4"
            preco="5.750,00"
            click={() => alert("click")}
          />
        </View>
        <View style={styles.row}>
          <Card
            url={require("../../assets/pc2.jpg")}
            text="PC GAMER 5"
            preco="3.850,00"
            click={() => alert("click")}
          />
          <Card
            url={require("../../assets/pc3.jpg")}
            text="PC GAMER 6"
            preco="2.940,00"
            click={() => alert("click")}
          />
        </View>
        <View style={styles.row}>
          <Card
            url={require("../../assets/pc4.jpg")}
            text="PC GAMER 7"
            preco="4.150,00"
            click={() => alert("click")}
          />
          <Card
            url={require("../../assets/pc2.jpg")}
            text="PC GAMER 8"
            preco="3.650,00"
            click={() => alert("click")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#212529",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "#495057",
  },
  text: {
    fontSize: 25,
    color: "#dee2e6",
    marginHorizontal: "1%",
  },
  icon: {
    marginRight: 10,
    color: "#dee2e6",
  },
  line: {
    borderBottomColor: "#ced4da",
    borderBottomWidth: 2,
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  card: {
    flexDirection: "row",
  },
  imgs: {
    width: 200,
    height: 200,
    marginHorizontal: "1%",
  },
  row: {
    flexDirection: "row",
  },
});
