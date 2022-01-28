import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [artciles, setArtciles] = useState();

  const getData = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=708b4fef95bb4cf9a8d18431374efd50`
    );
    // console.log(res.data.articles)
    setArtciles(res.data.articles);
  };
  console.log(artciles);

  getData();
  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <Text>HEll</Text>
        <View>
          {artciles &&
            artciles.map((article) => (
              <>
                <Text>{article.title}</Text>
                <Image
                  source={{
                    uri: `${article.urlToImage}`,
                  }}
                />
              </>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  view: {
    backgroundColor: "#ACDDDE",
    marginHorizontal: 20,
  },
});
