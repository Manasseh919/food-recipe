const { NavigationContainer } = require("@react-navigation/native");
const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { default: HomeScreen } = require("../screens/HomeScreen");
const { default: WelcomeScreen } = require("../screens/WelcomeScreen");

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen } />
        <Stack.Screen name="Welcome" component={WelcomeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation