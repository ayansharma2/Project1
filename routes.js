import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
const screens = {
    Home:{
        screen:Home,
        navigationOptions: {
            headerShown: false,
          }

    },
    SecondScreen:{
        screen:SecondScreen,
        navigationOptions: {
            headerShowmn: false,
          }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)