import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#232A54',
          borderColor: '#232A54',

        },
      }}
    >
      <Tabs.Screen  name = 'home' options={{tabBarLabel:'Hem', tabBarIcon: () => <FontAwesome size={28} name="home" color={'white'}/> }}/>
      <Tabs.Screen name = 'settings' options={{tabBarLabel:'Inställningar',  tabBarIcon: () => <FontAwesome size={28} name="cog" color={'white'}/>}}/>
      <Tabs.Screen name = 'workout-page' options = {{href:null}}/>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize:25,

  }
})
