import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../components/welcome';
import Usuario from '../components/usuario';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name = "Usuario"
                component={Usuario}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}