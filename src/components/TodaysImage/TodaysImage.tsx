import React, { FC } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

// Types
import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: url}}  style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#c3c4fa",
         marginVertical: 16,
         padding: 12,
         borderWidth: 2,
         borderRadius: 10,
         borderColor: '#ffff',
         marginHorizontal: 24,
    },
    image: {
        width: '100%',
        height: 180,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff'
    },
    title: {
        color: '#0B3B8C',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#0B3B8C',
        fontSize: 16,

    },
    buttonContainer: {
        alignItems: "flex-end"
    }

})

export default TodaysImage;