import React, { useState, useEffect }from "react";
import { View,Text,SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,FlatList, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const history = [
{ id:"1", course:"Mobile Programming", date:"2026-03-01", status:"Present"},
{ id:"2", course:"Database System", date:"2026-03-02", status:"Present"},
{ id:"3", course:"Operating System", date:"2026-03-03", status:"Absent"},
{ id:"4", course:"Computer Network", date:"2026-03-04", status:"Present"},
{ id:"5", course:"Mobile Programming", date:"2026-03-05", status:"Present"},
{ id:"6", course:"Database System", date:"2026-03-06", status:"Absent"},
{ id:"7", course:"Operating System", date:"2026-03-07", status:"Present"},
{ id:"8", course:"Computer Network", date:"2026-03-08", status:"Present"},
{ id:"9", course:"Mobile Programming", date:"2026-03-09", status:"Absent"},
{ id:"10", course:"Database System", date:"2026-03-10", status:"Present"},
{ id:"11", course:"Operating System", date:"2026-03-11", status:"Present"},
{ id:"12", course:"Computer Network", date:"2026-03-12", status:"Present"},
{ id:"13", course:"Mobile Programming", date:"2026-03-13", status:"Absent"},
{ id:"14", course:"Database System", date:"2026-03-14", status:"Present"},
{ id:"15", course:"Operating System", date:"2026-03-15", status:"Present"},
{ id:"16", course:"Computer Network", date:"2026-03-16", status:"Absent"},
{ id:"17", course:"Mobile Programming", date:"2026-03-17", status:"Present"},
{ id:"18", course:"Database System", date:"2026-03-18", status:"Present"},
{ id:"19", course:"Operating System", date:"2026-03-19", status:"Absent"},
{ id:"20", course:"Computer Network", date:"2026-03-20", status:"Present"},
{ id:"21", course:"Mobile Programming", date:"2026-03-21", status:"Present"},
{ id:"22", course:"Database System", date:"2026-03-22", status:"Absent"}
];

const Home = () => {

    const [historyData, setHistoryData] = useState(history);
    const [isCheckedIn, setIsCheckIn] = useState(false);
    const [currentTime, setCurrentTime] = useState('Memuat Jam...');

    useEffect(() => {
        const timer = setInterval(() => {
            const timeString = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCheckIn = () => {
        if (isCheckedIn) {
            Alert.alert("Perhatian", "Anda sudah melakukan check in untuk kelas ini.");
            return;
        }

        const newAttendance = {
            id:Date.now().toString(),
            course:"Mobile Programming",
            date:new Date().toLocaleDateString('id-ID'),
            status:"Present"
        };

        setHistoryData([newAttendance, ...historyData]);
        
        setIsCheckIn(true);
        Alert.alert("Sukses", `Anda berhasil check in pada pukul ${currentTime}`);
    };

    const renderItem = ({ item }) => (
                <View style={styles.item}>

            <View>
                <Text style={styles.course}>{item.course}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>

            <View style={styles.statusContainer}>
                <MaterialIcons
                    name={item.status === "Present" ? "check-circle" : "cancel"}
                    size={20}
                    color={item.status === "Present" ? "green" : "red"}
                />

                <Text
                    style={[
                        styles.status,
                        item.status === "Present"
                        ? styles.present
                        : styles.absent
                    ]}
                >
                    {item.status}
                </Text>
            </View>

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.headerRow}>
                <Text style={styles.title}>Attendance App</Text>
                {/* Tampilkan State Jam Digital */}
                <Text style={styles.clockText}>{currentTime}</Text>
            </View>

            {/* Student Card */}
            <View style={styles.card}>
                <View style={styles.icon}>
                <MaterialIcons name="person" size={40} color="#555" />
                </View>
                <View>
                <Text style={styles.name}>Budi Susanto</Text>
                <Text>NIM : 0325260031</Text>
                <Text>Class : Informatika-2B</Text>
                </View>
            </View>

            {/* Today's Class */}
            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Today's Class</Text>
                <Text>Mobile Programming</Text>
                <Text>08:00 - 10:00</Text>
                <Text>Lab 3</Text>

                {/* Modifikasi Tombol Check In */}
                <TouchableOpacity
                style={[styles.button, isCheckedIn ? styles.buttonDisabled : styles.buttonActive]}
                onPress={handleCheckIn}
                disabled={isCheckedIn} // Matikan fungsi klik jika sudah absen
                >
                <Text style={styles.buttonText}>
                    {isCheckedIn ? "CHECKED IN" : "CHECK IN"}
                </Text>
                </TouchableOpacity>
            </View>

            {/* Attendance History */}
            <View style={styles.classCard}>
                <Text style={styles.subtitle}>Attendance History</Text>

                <FlatList
                data={historyData} // <-- Ubah 'history' menjadi 'historyData'
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f5f5f5'
},

content:{
padding:20,
paddingBottom:40
},

title:{
fontSize:24,
fontWeight:'bold',
marginBottom:20
},

card:{
flexDirection:'row',
backgroundColor:'white',
padding:15,
borderRadius:10,
marginBottom:20
},

icon:{
width:60,
height:60,
backgroundColor:'#eee',
borderRadius:30,
justifyContent:'center',
alignItems:'center',
marginRight:15
},

name:{
fontSize:18,
fontWeight:'bold'
},

classcard:{
backgroundColor:'white',
padding:15,
borderRadius:10,
marginBottom:20
},

summary:{
backgroundColor:'white',
padding:15,
borderRadius:10,
marginBottom:20
},

subtitle:{
fontSize:18,
fontWeight:'bold',
marginBottom:10
},

button:{
marginTop:10,
backgroundColor:'#007aff',
padding:10,
borderRadius:8,
alignItems:"center"
},

buttonText:{
color:'white'
},

item:{
flexDirection:'row',
justifyContent:'space-between',
backgroundColor:'white',
padding:12,
borderRadius:8,
marginBottom:8
},

course:{
fontSize:16
},

date:{
color:"gray",
fontSize:12
},

statusContainer:{
flexDirection:"row",
alignItems:"center",
gap:5
},

status:{
marginLeft:5
},

present:{
color:'green',
fontWeight:'bold'
},

absent:{
color:'red',
fontWeight:'bold'
},
headerRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
},
clockText:{
    fontSize:16,
    color:'#007AFF',
    fontWeight:'bold',
    fontVariant:['tabular-nums'],
},
buttonActive:{
    backgroundColor:'#007AFF',
},
buttonDisabled: {
    backgroundColor: '#A0C4FF',
},
});