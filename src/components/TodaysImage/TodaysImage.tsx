import React, { FC } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Types
import { PostImage, RouteStackParam } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type PostImageNavigationProps = NativeStackNavigationProp<RouteStackParam, 'Detail'>;

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <Image source={{uri: url}}  style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        //  marginVertical: 16,
         padding: 12,
        //  borderWidth: 2,
         borderRadius: 10,
         borderColor: '#ffff',
        //  marginHorizontal: 24,
    },
    image: {
        width: '100%',
        height: 150,
        // borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff'
    },
    title: {
        color: '#ffff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#ffff',
        fontSize: 16,

    },
    buttonContainer: {
        alignItems: "flex-end",
    }

})

export default TodaysImage;