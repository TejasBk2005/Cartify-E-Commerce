import React from "react";
import { View, Text, StyleSheet} from "react-native";   

const Account=() => {
    return (   
        <View style={styles.container}>    
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>PROFILE</Text>
            

        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    
});

export default Account;

