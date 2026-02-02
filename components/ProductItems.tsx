import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const renderItem = ({ item } : { item: any }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{'\u20B9'} {item.price}</Text>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
    },
    card: {
        flexDirection: 'column',
        padding: 5,
        margin: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 170,
        left: -5,
    
    },
    image: {
        width: 130,
        height: 100,
        borderRadius: 15,
        flex: 1,
        alignSelf: "center",

    },
    
    brand: {
        flex: 1,
        padding: 10,
        fontSize: 17,
        textAlign: "center",
        fontWeight: "400",
   },
    price: {
        textAlign:"left",
        fontWeight: "bold",
        fontSize: 17
    },
    
    title: {
      
       textAlign: "left",
       fontSize: 15,
       fontWeight: "400"
    },

});
export default renderItem;