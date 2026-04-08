import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// 1. Class Component

export class KartuClass extends Component {
    render () {
        return (
            <View style={styles.cardClass}>
                <Text style={styles.textWhite}>Hallo, saya dari Class Component!</Text>
                <Text style={styles.textSub}>Sintaks saya lebih panjang dan butuh render ()</Text>
            </View>
        );
    }
}

// 2. Functional Component

export const KartuFunctional = () => {
    return (
        <View style={styles.cardFunc}>
            <Text style={styles.textWhite}>Hallo, saya dari Functional Component!</Text>
            <Text style={styles.textSub}>Sintaks saya lebih singkat dan tidak butuh render ()</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        borderRadius: 10,
        marginBottom: 20,
        color: '#333',
    },
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
    textSub:{
        color: '#D1E8FF',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
    },
});