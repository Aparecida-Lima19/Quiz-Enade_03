import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../components/welcome';
import Usuario from '../components/usuario';
import Acesso from '../components/acesso';






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
            <Stack.Screen
                name = "Acesso"
                component={Acesso}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}