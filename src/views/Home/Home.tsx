import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header/Header";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([]);

    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResp = await fetchApi();
                //console.log(todaysImageResp);
                setTodaysImage(todaysImageResp);

            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
        };

        const loadLast5Days = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, "yyyy-MM-dd");
                const fiveDaysAgo = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        
                const lastFiveDaysImageResp = await fetchApi(
                    `&start_date=${fiveDaysAgo}&end_date=${todaysDate}`
                    );
                setLastFiveDaysImage(lastFiveDaysImageResp);
            } catch (error) {
                console.log(error);
            }
        };
        

        loadTodaysImage().catch(null);
        loadLast5Days().catch(null);

    }, []);


    console.log("lastFiveDaysImage", lastFiveDaysImage)


    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImage}></LastFiveDaysImages>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        padding: 12,
        backgroundColor: 'black',
    }
});

export default Home;