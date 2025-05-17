import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="search" options={{ title: "Search" }} />
      <Stack.Screen name="video" options={{ title: "Video" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="add-notes" options={{ title: "Add notes" }} />
    </Stack>
  );
}
