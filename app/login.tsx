import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import StyledText from "@/components/styled-text";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/");
  };

  const openPrivacyPolicy = () => {
    router.push("/policy");
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="cover"
        />
      </View>

      <View style={styles.middle}>
        <Image
          source={require("../assets/images/app-icon.png")}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottom}>
        <StyledText style={styles.welcome}>
          Welcome to the best YouTube-based learning application.
        </StyledText>

        <Button
          style={{ width: "100%" }}
          title="Log in as guest"
          onPress={handleLogin}
        />

        <StyledText style={styles.policy}>
          By continuing you agree with
        </StyledText>
        <StyledText style={styles.policy}>
          <Text style={styles.link} onPress={openPrivacyPolicy}>
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={openPrivacyPolicy}>
            Privacy Policy
          </Text>
          .
        </StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(141, 153, 174, 1)",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 24,
    paddingBottom: 30,
  },
  policy: {
    fontSize: 13,
    lineHeight: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  link: {
    color: "#2b2d42",
    textDecorationLine: "underline",
    fontSize: 13,
    lineHeight: 16,
  },
});
