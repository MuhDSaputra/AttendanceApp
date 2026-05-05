import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 1. Class Component (Penjumlahan)

export class HitungClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angka: 0
        };
    }

    tambah = () => {
        this.setState({ angka: this.state.angka + 1 });
    };

    render() {
        return (
            <View style={styles.cardClass}>
                <Text style={styles.textWhite}>Class Component</Text>
                <Text style={styles.textSub}>Hasil: {this.state.angka}</Text>
                <Button title="Tambah +1" onPress={this.tambah} />
            </View>
        );
    }
}

// 2. Functional Component (Pengurangan)

export const HitungFunctional = () => {
    const [angka, setAngka] = useState(10);

    return (
        <View style={styles.cardFunc}>
            <Text style={styles.textWhite}>Functional Component</Text>
            <Text style={styles.textSub}>Hasil: {angka}</Text>
            <Button title="Kurang -1" onPress={() => setAngka(angka - 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    cardClass: {
        backgroundColor: '#0056A0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%",
        alignItems: "center",
    },
    cardFunc: {
        backgroundColor: '#2E7D32',
        padding: 20,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    textWhite: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textSub: {
        color: '#D1E8FF',
        fontSize: 14,
        marginVertical: 10,
    },
});