import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { dataPresensi } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{dataPresensi.course}</Text>

        <Text>Tanggal: {dataPresensi.date}</Text>
        <Text>Status: {dataPresensi.status}</Text>
        <Text>Ruangan: {dataPresensi.room}</Text>
        <Text>Dosen: {dataPresensi.lecturer}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});