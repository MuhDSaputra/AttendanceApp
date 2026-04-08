import { Component } from "react";
import { View, Button, StyleSheet, SafeAreaView, Text } from "react-native";

class TimerLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detik: 0
        };
        console.log("[CONSTRUCTOR] Memori disiapkan untuk anak");
    }

    componentDidMount() {
        console.log("1. [MOUNT] Anak lahir! Timer mulai berjalan");

        this.interval = setInterval(() => {
            this.setState({ detik: this.state.detik + 1 });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`2. [UPDATING] waktu bertambah ${prevState.detik} -> ${this.state.detik} detik`);
    }

    componentWillUnmount() {
        console.log("3. [UNMOUNT] Anak meninggal! Timer dimatikan (Cleanup).");
        clearInterval(this.interval);
    }

    render() {
        return (
            <View style={styles.timerBox}>
                <Text style={styles.timerText}>{this.state.detik} detik</Text>
                <Text>Detik Berjalan</Text>
            </View>
        );
    }
}

export default class ClassLifeCycle extends Component {
    state = { tampilkanTimer: false };

    toggleTimer = () => {
        this.setState({ tampilkanTimer: !this.state.tampilkanTimer });
    };

    render() {
        return (
            <SafeAreaView>
                <Text>Demo LifeCycle Komponen</Text>
                
                <View>
                    {this.state.tampilkanTimer ? (
                        <TimerLifeCycle />
                    ) : (
                        <Text>Komponen Anak Belum Lahir</Text>
                    )}
                </View>

                <View>
                    <Button 
                        title={this.state.tampilkanTimer ? "Hancurkan Komponen (Unmount)" : "Lahirkan Komponen (Mount)"}
                        color={this.state.tampilkanTimer ? "#D32F2f" : "#0056A0"}
                        onPress={this.toggleTimer}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    content: {
        height: 150,
        justifyContent: 'center',
    },
    timerBox: {
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    infoText: {
        fontSize: 16,
        color: '#888',
        fontStyle: 'italic',
    },
    buttonContainer: {
        marginTop: 40,
        width: '80%',
    },
});