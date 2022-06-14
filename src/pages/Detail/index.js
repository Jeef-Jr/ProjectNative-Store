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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  price: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#6c757d",
    padding: 10,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 600,
  },
});
