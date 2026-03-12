import { View,Text,SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {

    const presentCount = history.filter(item => item.status === "Present").length;
    const absentCount = history.filter(item => item.status === "Absent").length;

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

            <Text style={styles.title}>Attendance App</Text>

            {/* STUDENT CARD */}
            <View style={styles.card}>
                <View style={styles.icon}>
                    <MaterialIcons name="person" size={24} color="#555" />
                </View>

                <View>
                    <Text style={styles.name}>Muhammad Dwi Saputra </Text>
                    <Text>NIM : 0320240089</Text>
                    <Text>Class : Informatika 2A</Text>
                </View>
            </View>

            {/* TODAY CLASS */}
            <View style={styles.classcard}>
                <Text style={styles.subtitle}>Today's Class</Text>
                <Text>Mobile Programming</Text>
                <Text>08:00 - 10:00</Text>
                <Text>Lab 3</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CHECK IN</Text>
                </TouchableOpacity>
            </View>

            {/* UPCOMING CLASS */}
            <View style={styles.classcard}>
                <Text style={styles.subtitle}>Upcoming Class</Text>
                <Text>Database System</Text>
                <Text>08:00 - 10:00</Text>
                <Text>Lab 3</Text>
            </View>

            {/* ATTENDANCE SUMMARY */}
            <View style={styles.summary}>
                <Text style={styles.subtitle}>Attendance Summary</Text>
                <Text>Present : {presentCount}</Text>
                <Text>Absent : {absentCount}</Text>
            </View>

            {/* HISTORY */}
            <Text style={styles.subtitle}>Attendance History</Text>

            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />

            </ScrollView>
        </SafeAreaView>
    );
};

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
}
});