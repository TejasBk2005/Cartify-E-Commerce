import React from "react";
import { View, StyleSheet, FlatList, Image} from "react-native";


const BannerData = [
       { 
        id : "01",
        image : require("../assets/Banner1.jpg"),
       },
       { 
        id : "02",
        image : require("../assets/Banner2.jpg"),
       },
        { 
        id : "03",
        image : require("../assets/Banner3.jpg"),
        },
        { 
        id : "04",
        image : require("../assets/Banner4.jpg"),
        },
       ]


    const CarouselBanner=()=> {
        const renderItem = ({item, index}: {item: typeof BannerData[0]; index: number}) => {
            return(
            <View style={styles.card}>
                <Image source={item.image} style={{ height:150, width: 300}} />
                </View>
        )};
        
     return (
    
    <FlatList 
     data = {BannerData}
     renderItem={renderItem}
     horizontal={true}

     />
     
     )}





export default CarouselBanner;


const styles = StyleSheet.create({
    card: {
        flex:1,
        height: 150,
        width: 300,
    }

})