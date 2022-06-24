import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { orderCompleted } from '../../screens/orderCompleted';
import { RestuarantDetailScreen } from '../../screens/RestuarantDetailScreen';

const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }

    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestuarantDetailScreen" component={RestuarantDetailScreen} />
                <Stack.Screen name="orderCompleted" component={orderCompleted} />

            </Stack.Navigator>
        </NavigationContainer>
    )


}

export { NavContainer }