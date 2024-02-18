import { View, Text, StatusBar } from 'react-native';
import Transactions from './src/screens/Transactions';
import Stats from './src/screens/Stats';
import AddTransaction from './src/screens/AddTransaction';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';

const App = () => (
  <NavigationContainer>
  {/* <View className="flex-1 items-center bg-[#1f2022]"> */}
    {/* <Transactions /> */}
    {/* <Stats /> */}
    {/* <AddTransaction /> */}
    {/* <StatusBar backgroundColor="#1f2022" barStyle="light-content" /> */}
  {/* </View> */}
  <Tabs />
  </NavigationContainer>
);


export default App;
