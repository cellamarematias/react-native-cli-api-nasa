import React, {FC} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImageType } from "../../types";
import { useNavigation } from "@react-navigation/native";
// Types
import { PostImage as PostImageTypes, RouteStackParam } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type PostImageNavigationProps = NativeStackNavigationProp<RouteStackParam, 'Detail'>;


const PostImage: FC<PostImageType> = ({title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        borderRadius: 5,
        marginBottom: 12,
        padding: 16.

    },
    title: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 18,
        // marginBottom: 12
    },
    date: {
        color: '#ffff',
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 12
    },
    buttonContainer: {
        alignItems: 'flex-end',
    }
})

export default PostImage;
