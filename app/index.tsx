import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TampilanBentuk() {
  return (
    <View style={gaya.lappaUtama}>
      {/* Bentuk segitiga */}
      <View style={gaya.tiluTanggo} />

      {/* Persegi panjang dengan nama */}
      <View style={gaya.kotakNamma}>
        <Text style={gaya.teksIsina}>Muliana</Text>
      </View>

      {/* Bentuk pil dengan NIM */}
      <View style={gaya.pilInduk}>
        <Text style={gaya.teksIsina}>105841103822</Text>
      </View>
    </View>
  );
}

const gaya = StyleSheet.create({
  lappaUtama: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    gap: 30,
  },
  tiluTanggo: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: 110,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#a83279", // warna ungu merah
  },
  kotakNamma: {
    width: 280,
    height: 65,
    backgroundColor: "#0e7490", // biru laut tua
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  pilInduk: {
    width: 280,
    height: 65,
    backgroundColor: "#f59e0b", // orange terang
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  teksIsina: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
