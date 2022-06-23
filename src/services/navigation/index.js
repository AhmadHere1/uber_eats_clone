import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { RestuarantDetailScreen } from '../../screens/RestuarantDetailScreen';
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../../redux/store';

const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }

    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (
        <ReduxProvider store={store()}>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='LoginScreen'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestuarantDetailScreen" component={RestuarantDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )


}

export { NavContainer }