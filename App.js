import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./src/screens/Login";
import StartUp from "./src/screens/StartUp";
import MainPage from "./src/screens/MainPage";
import Register from "./src/screens/Register";
import Drawer from "./src/navigation/DrawerNav/Drawer";
import ActiveRecall from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecall";
import ActiveRecallAdd from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallAdd";
import ActiveRecallQuiz from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallQuiz";
import ActiveRecallDone from "./src/navigation/DrawerNav/components/ActiveRecall/ActiveRecallDone";
import Pomodoro from "./src/navigation/DrawerNav/components/Pomodoro/Pomodoro";
import PomodoroAdd from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroAdd";
import PomodoroTimer from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroTimer";
import PomodoroDone from "./src/navigation/DrawerNav/components/Pomodoro/PomodoroDone";
import SQ3RSurvey from "./src/navigation/DrawerNav/components/SQ3R/SQ3RSurvey";
import SQ3R from "./src/navigation/DrawerNav/components/SQ3R/SQ3R";
import SQ3RQuestion from "./src/navigation/DrawerNav/components/SQ3R/SQ3RQuestion";
import PQ4R from "./src/navigation/DrawerNav/components/PQ4R/PQ4R";
import PQ4RPreview from "./src/navigation/DrawerNav/components/PQ4R/PQ4RPreview";
import SpacedRepitition from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepitition";
import SpacedRepititionAdd from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionAdd";
import SpacedRepititionDateStart from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionDateStart";
import SpacedRepititionDateEnd from "./src/navigation/DrawerNav/components/SpacedRepitition/SpacedRepititionDateEnd";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    RockSalt: require("./assets/fonts/RockSalt-Regular.ttf"),
    AmaticBold: require("./assets/fonts/AmaticSC-Bold.ttf"),
    AmaticRegular: require("./assets/fonts/AmaticSC-Regular.ttf"),
    AlumniSansThin: require("./assets/fonts/AlumniSans-Thin.ttf"),
    AlumniSansRegular: require("./assets/fonts/AlumniSans-Regular.ttf"),
    FuzzyBubblesBold: require("./assets/fonts/FuzzyBubbles-Bold.ttf"),
    FuzzyBubblesRegular: require("./assets/fonts/FuzzyBubbles-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  // For development purposes only. Change in initialRouteName to 'StartUp' for production.
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartUp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="ActiveRecall" component={ActiveRecall} />
        <Stack.Screen name="ActiveRecallAdd" component={ActiveRecallAdd} />
        <Stack.Screen name="ActiveRecallQuiz" component={ActiveRecallQuiz} />
        <Stack.Screen name="ActiveRecallDone" component={ActiveRecallDone} />
        <Stack.Screen name="Pomodoro" component={Pomodoro} />
        <Stack.Screen name="PomodoroAdd" component={PomodoroAdd} />
        <Stack.Screen name="PomodoroTimer" component={PomodoroTimer} />
        <Stack.Screen name="PomodoroDone" component={PomodoroDone} />
        <Stack.Screen name="SQ3R" component={SQ3R} />
        <Stack.Screen name="SQ3RSurvey" component={SQ3RSurvey} />
        <Stack.Screen name="SQ3RQuestion" component={SQ3RQuestion} />
        <Stack.Screen name="PQ4R" component={PQ4R} />
        <Stack.Screen name="PQ4RPreview" component={PQ4RPreview} />
        <Stack.Screen name="SpacedRepitition" component={SpacedRepitition} />
        <Stack.Screen
          name="SpacedRepititionAdd"
          component={SpacedRepititionAdd}
        />
        <Stack.Screen
          name="SpacedRepititionDateStart"
          component={SpacedRepititionDateStart}
        />
        <Stack.Screen
          name="SpacedRepititionDateEnd"
          component={SpacedRepititionDateEnd}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
