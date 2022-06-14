import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <TouchableOpacity style={styles.card} onPress={props.click}>
      <Image style={styles.imgs} source={props.url} />
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.text}>R${props.preco}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
  },
  imgs: {
    width: 200,
    height: 200,
    marginHorizontal: "1%",
    marginVertical: "1%",
  },
  text: {
    width: 200,
    textAlign: "center",
    color: "#fff",
  },
});
