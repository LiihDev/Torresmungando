import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    // alignItems: "center",
    width: '96%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    
  },
});
