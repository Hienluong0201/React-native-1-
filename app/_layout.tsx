import { Slot } from "expo-router";
import { AppProvider } from "../app-context";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <AppProvider>
      <Slot />
      <Toast />
    </AppProvider>
  );
}
