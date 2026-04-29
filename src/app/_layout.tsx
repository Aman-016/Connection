import { ClerkProvider } from "@clerk/expo";
import { Stack } from "expo-router";
import "../../global.css";
import { tokenCache } from '@clerk/expo/token-cache';

export default function RootLayout() {
  return (
      <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </ClerkProvider>
  );
}