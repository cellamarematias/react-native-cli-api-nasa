import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage/PostImage";



const LastFiveDaysImages: FC<{postImages?:PostImageTypes[]}> =  ({postImages})  => {
    //console.log("props", postImages);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>
                {postImages?.map((img) => (
                    <PostImage key={img.title} {...img} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: "#ffffff",
        fontSize: 16,
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    },
});

export default LastFiveDaysImages;
