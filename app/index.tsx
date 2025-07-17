import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Konstanta untuk grid
const JUMLAH_KOLOM = 3;
const TOTAL_GAMBAR = 9;
const LEBAR_LAYAR = Dimensions.get("window").width;
const UKURAN_KOTAK = Math.floor(LEBAR_LAYAR / JUMLAH_KOLOM);

// Data gambar utama dan cadangan dengan seed unik
const dataGambar = Array.from({ length: TOTAL_GAMBAR }, (_, i) => ({
  id: i,
  utama: `https://picsum.photos/seed/gbr${i}/200`,
  cadangan: `https://picsum.photos/seed/cdg${i}/200`,
}));

// Komponen untuk 1 kotak gambar
const GambarItem = ({
  sumber,
}: {
  sumber: { utama: string; cadangan: string };
}) => {
  const [pakaiCadangan, setPakaiCadangan] = useState(false);
  const [skala, setSkala] = useState(1);
  const [gagalMuat, setGagalMuat] = useState(false);

  const urlGambar = pakaiCadangan ? sumber.cadangan : sumber.utama;

  const handleTekan = () => {
    if (gagalMuat) return;

    setPakaiCadangan((prev) => !prev);
    setSkala((prev) => Math.min(prev * 1.2, 2));
  };

  return (
    <TouchableOpacity onPress={handleTekan} style={styles.wadahKotak}>
      {gagalMuat ? (
        <View style={styles.kotakError}>
          <Text style={styles.teksError}>X</Text>
        </View>
      ) : (
        <Image
          source={{ uri: urlGambar }}
          style={[styles.gambar, { transform: [{ scale: skala }] }]}
          onError={() => setGagalMuat(true)}
        />
      )}
    </TouchableOpacity>
  );
};

// Komponen utama grid
const GaleriGambar = () => {
  return (
    <SafeAreaView style={styles.latar}>
      <ScrollView contentContainerStyle={styles.grid}>
        {dataGambar.map((item) => (
          <GambarItem key={item.id} sumber={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GaleriGambar;

// Gaya
const styles = StyleSheet.create({
  latar: {
    flex: 1,
    backgroundColor: "#101010",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  wadahKotak: {
    width: UKURAN_KOTAK,
    height: UKURAN_KOTAK,
    padding: 2,
  },
  gambar: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  kotakError: {
    width: "100%",
    height: "100%",
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  teksError: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
  },
});
