import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Home=({ navigation }: any) => {
    return (   
        <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Account')}>
                 <Text style={{ color: 'black', fontSize: 16 }}>Account</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    button: {
        flex : 0,
        marginBottom: 100,
        padding: 10,
        backgroundColor: 'skyblue',
        borderRadius: 15,
        bottom: -10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;