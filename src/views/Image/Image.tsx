import React from "react";
import { View, StyleSheet, Image, Text, ScrollView,Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// Types
import { PostImage as PostImageTypes, RouteStackParam } from "../../types";

const CompleteImage = () => {
    const { params: { hdurl, url, explanation, date } } = useRoute<NativeStackScreenProps<RouteStackParam, 'Image'>['route']>();

    //console.log('hdurl', hdurl)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image}></Image>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        backgroundColor: 'black'
    },
    content: {
        backgroundColor: 'black',
        // borderRadius: 32,
        // marginVertical: 24,
        padding: 16

    },
    image: {
        width: '100%',
        height: '100%',
        // borderColor: 'white',
    },
    date: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    explanation: {
        color: '#ffff',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginBottom: 4
    }
})

export default CompleteImage;