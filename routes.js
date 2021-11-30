import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
const screens = {
    Home:{
        screen:Home,
        navigationOptions: {
            header: null,
          }

    },
    SecondScreen:{
        screen:SecondScreen,
        navigationOptions: {
            header: null,
          }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)