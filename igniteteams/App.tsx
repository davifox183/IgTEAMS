import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Loading } from "@components/Loading";
import { StatusBar, ActivityIndicator } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
  const[fontsLoader] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle= "light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoader ? <Groups/> : <ActivityIndicator/>}      
    </ThemeProvider>
  );
}
