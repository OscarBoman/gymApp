import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [name, setName] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
      <StatusBar style="light" />
        <Text style={styles.bigText}>
          {name ? `Välkommen ${name}!` : "Välkommen!"}
        </Text>
        <Text style={styles.smallText}>
          {name ? `Nu kör vi!` : "Vi börjar med ditt namn"}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Namn"
          placeholderTextColor="gray"
          returnKeyType="done"
          onChangeText={setName}
        />
        {name && (
          <Pressable
            style={styles.pressableActive}
            onPressIn={() => {
              router.replace("/logged-in/tab_1/home");
            }}
          >
            <Text style={styles.buttonText}>Nu åker vi</Text>
          </Pressable>
        )}
        {!name && (
          <Pressable style={styles.pressableNotActive}>
            <Text style={styles.buttonText}>Skriv ditt namn</Text>
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
