import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "@/styles";
import { useCallback, useState } from "react";
import { getMyPetGenerator } from "@/services/ai";

export default function Index() {
  const [typedText, setTypedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>();

  const onGetMyPetClick = useCallback(async () => {
    setIsLoading(true);

    try {
      const resultFromAPI = await getMyPetGenerator(typedText);

      setResult(resultFromAPI);
      setTypedText("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [typedText]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GetMyPet</Text>
      <Text style={styles.description}>
        O assistente que te ajuda a encontrar o Pet ideal para você
      </Text>

      <TextInput
        editable={!isLoading}
        style={{ ...styles.input, fontStyle: typedText ? undefined : "italic" }}
        onChangeText={setTypedText}
        value={typedText}
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="lightgray"
        placeholder="Queria um pet terrestre, de preferência que ande sob quatro patas, não solte muito pelo e goste de ficar sozinho, pois passo a maior parte do tempo fora de casa trabalhando."
      />

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: isLoading ? "gray" : "black",
        }}
        disabled={isLoading}
        onPress={onGetMyPetClick}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}
