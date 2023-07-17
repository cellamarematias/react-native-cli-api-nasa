import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteStackParam } from "../../types";
import Header from "../../components/Header/Header";

const Detail = () => {
    const {params: { title, url, explanation, date}} = useRoute<NativeStackScreenProps<RouteStackParam, 'Detail'>['route']>();

    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.content}>
                <Image source={{uri: url}} style={styles.image}></Image>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView>
                <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'black'
    },
    content: {
        backgroundColor: 'black',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16

    }, 
    title: {
        color: '#ffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,

    },
    image: {
        width: '100%',
        height: '50%',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 16,

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
    }
})

export default Detail;