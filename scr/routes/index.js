import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/welcome';
import Usuario from '../components/usuario';
import Acesso from '../components/acesso';
import Quiz from '../components/quiz';
import Result from '../components/quiz/resultado/result';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      <Stack.Screen name="Usuario" component={Usuario} options={{headerShown: false}} />
      <Stack.Screen name="Acesso" component={Acesso} options={{headerShown: false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
    
    </Stack.Navigator>
  );
}
