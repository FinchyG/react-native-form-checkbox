import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from "./components/CheckBox";
import H2Heading from "./components/H2Heading";

const App = () => {
  const [English, setEnglish] = useState(false);
  const [French, setFrench] = useState(false);
  const [Spanish, setSpanish] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <H2Header
        textContent="React Native Form Checkbox Example"
      />
      <H2Heading
        textContent="What languages do you speak?"
      />
      <CheckBox
        onPress={() => setEnglish(!English)}
        title="English"
        isChecked={English}
      />
      <CheckBox
        onPress={() => setFrench(!French)}
        title="French"
        isChecked={French}
      />
      <CheckBox
        onPress={() => setSpanish(!Spanish)}
        title="Spanish"
        isChecked={Spanish}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 8,
    backgroundColor: "aquamarine",
  },
});

export default App;
