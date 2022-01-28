import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import Card from "../components/Card";

export default function Home() {
  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
      <Card/>
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
