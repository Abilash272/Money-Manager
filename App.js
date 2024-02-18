import { View, Text, StatusBar } from 'react-native';
import Transactions from './src/screens/Transactions';
import Stats from './src/screens/Stats';
import AddTransaction from './src/screens/AddTransaction';

const App = () => (
  <View className="flex-1 items-center bg-[#1f2022]">
    {/* <Transactions /> */}
    {/* <Stats /> */}
    <AddTransaction />
    <StatusBar backgroundColor="#1f2022" barStyle="light-content" />
  </View>
);


export default App;
