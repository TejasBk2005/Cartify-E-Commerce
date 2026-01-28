import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image} from "react-native";
import { productsData } from "../data/product";

import Item from "../components/item";


    
const Home=() => {

    const renderItem = ({ item }:any ) => (
        <Item item={item} />
    );

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>PRODUCTS</Text>


     <FlatList data={productsData}
        keyExtractor={item => item._id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}/>
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
    card: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    image: {    
        width: 65,
        height: 65,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default Home;