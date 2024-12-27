import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "@/styles";
import { useState } from "react";

export default function Index() {
  const [typedText, setTypedText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetMyPet</Text>
      <Text style={styles.description}>
        O assistente que te ajuda a encontrar o Pet ideal para você
      </Text>

      <TextInput
        style={{ ...styles.input, fontStyle: typedText ? undefined : "italic" }}
        onChangeText={setTypedText}
        value={typedText}
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="lightgray"
        placeholder="Queria um pet terrestre, de preferência que ande sob quatro patas, não solte muito pelo e goste de ficar sozinho, pois passo a maior parte do tempo fora de casa trabalhando."
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}
