import { useAuth } from "@clerk/expo";
import { Image } from "expo-image";
import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl">
        Edit src/app/index.tsx to edit this screen.
      </Text>

      <Text>hi im ok</Text>

      {/* <Link href={"/about"}>About screen link</Link> */}

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=Mnw3MjA3fDB8MHxzZWFyY2h8NHxleGFtcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});