import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import useRoute from "./router";


export default function App() {
  
  const routing = useRoute(true)
  // fonts______________________________
   const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('./src/fonts/Inter-Black.ttf'),
    'Roboto-regular': require('./src/fonts/Roboto-Regular.ttf'),
    'Roboto-medium': require('./src/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
     {routing}
    </NavigationContainer>
  
  );
}


