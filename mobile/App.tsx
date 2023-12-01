import { View, StatusBar } from 'react-native';
import SignIn from './src/pages/SignIn';


export default function App() {
  return (
    <View >

      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false} />
      <SignIn />
    </View>
  );
}
