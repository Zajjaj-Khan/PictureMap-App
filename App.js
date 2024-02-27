import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlace from "./screens/AllPlace";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import {Colors} from './constants/colors'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: Colors.primary500},
          headerTintColor:Colors.grey700,
          contentStyle:{backgroundColor: Colors.grey700}
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlace}
            options={({navigation})=>({
              headerRight: (tintColor) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlaces")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlaces" component={AddPlace} 
          options={{
            title:'Your Favirote Place'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
