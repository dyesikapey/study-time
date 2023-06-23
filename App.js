import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Login from "./src/screens/Login";
import StartUp from "./src/screens/StartUp";
import MainPage from "./src/screens/MainPage";
import Register from "./src/screens/Register";
import Drawer from './src/navigation/DrawerNav/Drawer';
import ActiveRecall from './src/navigation/DrawerNav/components/ActiveRecall';
import Pomodoro from './src/navigation/DrawerNav/components/Pomodoro';
import PomodoroAdd from './src/navigation/DrawerNav/components/PomodoroAdd';
import PomodoroTimer from './src/navigation/DrawerNav/components/PomodoroTimer';
import PomodoroDone from './src/navigation/DrawerNav/components/PomodoroDone';

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    RockSalt: require('./assets/fonts/RockSalt-Regular.ttf'),
    AmaticBold: require('./assets/fonts/AmaticSC-Bold.ttf'),
    AmaticRegular: require('./assets/fonts/AmaticSC-Regular.ttf'),
    AlumniSansThin: require('./assets/fonts/AlumniSans-Thin.ttf'),
    AlumniSansRegular: require('./assets/fonts/AlumniSans-Regular.ttf'),
    FuzzyBubblesBold: require('./assets/fonts/FuzzyBubbles-Bold.ttf'),
    FuzzyBubblesRegular: require('./assets/fonts/FuzzyBubbles-Regular.ttf'),
    // Inter: require ('./assets/fonts/Inter-VariableFont_slnt,wght.ttf')

});

if (!loaded) {
    return null;}
  // For development purposes only. Change in initialRouteName to 'StartUp' for production.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartUp" component={StartUp}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="ActiveRecall" component={ActiveRecall}/>
        <Stack.Screen name="Pomodoro" component={Pomodoro}/>
        <Stack.Screen name="PomodoroAdd" component={PomodoroAdd}/>
        <Stack.Screen name="PomodoroTimer" component={PomodoroTimer}/>
        <Stack.Screen name="PomodoroDone" component={PomodoroDone}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
