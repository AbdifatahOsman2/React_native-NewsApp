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


  export default function Card() {
    const [artciles, setArtciles] = useState();
    
    const getData = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=708b4fef95bb4cf9a8d18431374efd50`
      );
      // console.log(res.data.articles[0].urlToImage)
      setArtciles(res.data.articles);
    };
    getData();
    return (
      <SafeAreaView style={styles.area}>
        <ScrollView>
          <Text>welcome to HEIL</Text>
          <View>
            {artciles &&
              artciles.map((article) => (
                <>
                  <Text>Article {article.title}</Text>

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
      backgroundColor: "#AC5DDE",
      marginHorizontal: 20,
    },
    image:{
      width:50,
      height:50,
    }
  });
  
  // <Text>{article.title}</Text>
  // <Text>{article.content}</Text>
  // <Text>{article.author}</Text>
  // <Text>{article.publishedAt}</Text>