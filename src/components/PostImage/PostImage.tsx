import React, {FC} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImageType } from "../../types";

const PostImage: FC<PostImageType> = ({title, date}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View"></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#c3c4fa",
        borderRadius: 10,
        marginBottom: 12,
        padding: 16.

    },
    title: {
        color: '#0004c2',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    date: {
        color: '#c70c3e',
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 12
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})

export default PostImage;
