import React from "react";
import { View, StyleSheet, Image, Text, ScrollView,Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Types
import { PostImage as PostImageTypes, RouteStackParam } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type PostImageNavigationProps = NativeStackNavigationProp<RouteStackParam, 'Detail'>;

const Detail = () => {
    const { params: { title, url, explanation, date, hdurl } } = useRoute<NativeStackScreenProps<RouteStackParam, 'Detail'>['route']>();
    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Image', {title, date, url, explanation, hdurl})
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image}></Image>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Full Image" onPress={handleViewPress}></Button>
                </View>
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
        height: '30%',
        // borderColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 6,

    },
    date: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    explanation: {
        color: '#ffff',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginBottom: 12
    }
})

export default Detail;