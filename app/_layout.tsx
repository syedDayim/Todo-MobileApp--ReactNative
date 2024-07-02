import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitle: 'My TODO',
        headerTitleStyle: styles.headerTitle,
      }}/>
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    height: 45, 
  },
  headerTitle: {
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
  }
})
