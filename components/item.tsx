import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { productsData } from "../data/product";

const Item = ({ item } : { item: any }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{'\u20B9'}{item.price}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 200,
    
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
        flex: 0,
        alignSelf: "center"

    },
    title: {
       textAlign: "center"
    },
    brand: {
       left: 20
    },
    price: {
        left: 20
    }
    

});

export default Item;